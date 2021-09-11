import React,{useState,useEffect} from 'react'
import Dropzone from 'react-dropzone'
import {BsFillImageFill} from "react-icons/bs"
import './Classifier.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { Button } from '@material-ui/core';

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
     console.log(files)
     
   }
   useEffect(() => {
     axios.get("http://127.0.0.1:8000/api/",{
       headers:{
         'accept':'application/json'
       }
     }).then(res=>{console.log(res.data)})
   }, [])
    const file = files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
        ))
    return (
        <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)} >
        {({isDragActive,getRootProps, getInputProps}) => (
          <Container maxWidth="sm" >
            <div {...getRootProps({className: 'dropzone main'})}>
              <input {...getInputProps()} />
              <BsFillImageFill size="40px" color="#332f2f"/>
              <p>{isDragActive? "Drop Some images":  "Drag 'n' drop some files here, or click to select files"}</p>
            </div>
            
            {files?<Button variant="contained" color="primary">Select Image</Button> :null}
            <aside>
            {loading?<CircularProgress color="primary" />: <ul className="file">{file}</ul>}
            </aside>
          </Container>
        )}
      </Dropzone>
    )
}

export default Classifier