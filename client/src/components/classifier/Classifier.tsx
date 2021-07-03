import React,{useState} from 'react'
import Dropzone from 'react-dropzone'
import Button from '@material-ui/core/Button';

const Classifier:React.FC = () => {
    const [files,setFiles]=useState([{"name":"","size":""}])
    
    const onDrop = (acceptedFiles:any)  =>{
      setFiles(acceptedFiles)
    }
    const file = files.map(file => (
        <li key={file.name}>
          {file.name} - {file.size} bytes
        </li>
        ))

    return (
        <Dropzone onDrop={acceptedFiles => onDrop(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section className="block-example border border-dark" style={{padding:`12px`,border:`3px dotted gray`,marginTop:'25px' }}>
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <p>{file}</p>
          </section>
        )}
      </Dropzone>
    )
}

export default Classifier