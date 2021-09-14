import React, { useEffect, useState } from 'react'
import axios from "axios"
import ImagesCard from './Images'
import { CircularProgress } from '@material-ui/core'
import "./RecentImage.css"




const RecentImgs: React.FC = () => {
    const [imgs, setImgs] = useState<any| []>([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        getRecentImages()
    },[])

    const getRecentImages = () => {
        setLoading(true)
        axios.get(`http://127.0.0.1:8000/api/images`, {
          headers: {
            accept: "application/json",
          },
        })
        .then((res) => {
          setImgs(res.data)
          setLoading(false)
          console.log(imgs)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err);
        });
    }
    
    return (
        <>
        <div className="recent">
            <h3 className="text-center align-center heading">Recent Classified Images</h3>
            {loading ? 
                <div className = "spiner"><CircularProgress color="secondary" /></div>:
            <div className="top">
                <div className ="grid-container">
                {imgs.map((item:any) =>
                <div key={item.id} className ="grid-item">
                 <ImagesCard source = {item.picture} result={item.result}/>  
               </div>
               )}
            </div>
          </div>
                }
        </div>        
        </>
    )
}

export default RecentImgs
