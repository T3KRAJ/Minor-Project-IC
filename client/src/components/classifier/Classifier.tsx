import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
import {BsFillImageFill} from "react-icons/bs"
import './Classifier.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';


const Classifier:React.FC = () => {
    const [files,setFiles]=useState([{"name":"","size":""}])
    const[loading,setLoading]=useState(false)
    
    const onDrop = (acceptedFiles:any)  =>{
      setLoading(true)
      Loadimage(acceptedFiles)
    }
   const Loadimage=(acceptedFiles:any)=>{
     setInterval(()=>{
      setFiles(acceptedFiles)
      setLoading(false)
     },1000)
   
   }
    const file = files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
        ))
  console.log(files)
    return (
        <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)} >
        {({isDragActive,getRootProps, getInputProps}) => (
          <Container maxWidth="sm">
            <div {...getRootProps({className: 'dropzone main'})}>
              <input {...getInputProps()} />
              <BsFillImageFill size="40px" color="#332f2f"/>
              <p>{isDragActive? "Drop Some images":  "Drag 'n' drop some files here, or click to select files"}</p>
            </div>
            {loading?<CircularProgress color="primary" />: <ul>{file}</ul>}
          </Container>
        )}
      </Dropzone>
    )
}

export default Classifier