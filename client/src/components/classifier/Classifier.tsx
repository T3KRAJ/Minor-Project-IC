import React,{useState} from 'react'
import Dropzone from 'react-dropzone'

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
          <section>
            <div {...getRootProps()}>
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