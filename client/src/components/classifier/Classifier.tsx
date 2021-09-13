import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone";
import { BsFillImageFill } from "react-icons/bs";
import "./Classifier.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Button } from "@material-ui/core";

const Classifier: React.FC = () => {
  const [files, setFiles] = useState<any[]>([]);

  const [recentImg, setRecentImg] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles: any) => {
    Loadimage(acceptedFiles);
  };

  const Loadimage = (acceptedFiles: any) => {
    setInterval(() => {
      setFiles(acceptedFiles);
    }, 1000);
  };

  const sendImage = () => {
    setLoading(true);
    let formData = new FormData();
    formData.append("picture", files[0], files[0].name);
    axios
      .post("http://127.0.0.1:8000/api/image/create/", formData, {
        headers: {
          accept: "application/json",
          "content-type": "multipart/form-data",
        },
      })
      .then((resp) => {
        getImageClass(resp);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const getImageClass = (obj: any) => {
    axios
      .get(`http://127.0.0.1:8000/api/image/${obj.data.id}`, {
        headers: {
          accept: "application/json",
        },
      })
      .then((resp) => {
        setRecentImg(resp.data);
        setLoading(false);
        console.log(recentImg);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const file = files.map((file) => (
    <h3 key={file.name}>
      {file.name} - {file.size} bytes
    </h3>
  ));

  return (
    <>
      <React.Fragment>
        <Dropzone onDrop={(acceptedFiles) => onDrop(acceptedFiles)}>
          {({ isDragActive, getRootProps, getInputProps }) => (
            <Container maxWidth="sm">
              <div {...getRootProps({ className: "dropzone main" })}>
                <input {...getInputProps()} />
                <BsFillImageFill size="40px" color="#332f2f" />
                <p>
                  {isDragActive
                    ? "Drop a image"
                    : "Drag and drop image here, or click to select image"}
                </p>
              </div>
              <h4>{file}</h4>
              {files.length > 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => sendImage()}
                >
                  Classify
                </Button>
              )}
            </Container>
          )}
        </Dropzone>
        <div>{loading && <CircularProgress color="secondary" />}</div>
        {recentImg && (
          <React.Fragment>
            <img src={`http://127.0.0.1:8000${recentImg.picture}`} />
            <p>{recentImg.result}</p>
          </React.Fragment>
        )}
      </React.Fragment>
    </>
  );
};

export default Classifier;
