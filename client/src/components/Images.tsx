import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import ImageCard from './ImageCard'

const Images: React.FC = () => {
    const [images, setImages] = useState([])
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(2)


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/images/', {
            headers: {
                accept: 'application/json'
            }
        }).then(res => {
            setImages(res.data)
            setLoading(false)
            console.log(res.data)
        })
    },[])

    return (
        <div>
            {/* {images.map(img => {
                <ImageCard key={img.id} pic={img.picture} name={img.result} />
            })} */}
        </div>
    )
}

export default Images
