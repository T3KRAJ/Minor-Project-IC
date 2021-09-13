import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
      maxWidth: 445,
    },
    media: {
      
      width: 440,  
      height: 240,
      alignContent:'center',
      backgroundPosition:'cover'
    
    },
  });


  interface Props {
    source:string,  
    result:any
  }
const ImagesCard: React.FC<Props> = (props): JSX.Element  => {
  const classes = useStyles();
  console.log(props.source)
  return (

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='http://127.0.0.1:8000/media/download_UDs98Ck.jfif'
              title={props.result}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.result}
              hellp[-]
              </Typography>
             
            </CardContent>
          </CardActionArea>
        
        </Card>
      );
}
export default ImagesCard
// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// // import ImageCard from './ImageCard'

// const Images: React.FC = () => {
//     const [images, setImages] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [visible, setVisible] = useState(2)


//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/api/images/', {
//             headers: {
//                 accept: 'application/json'
//             }
//         }).then(res => {
//             setImages(res.data)
//             setLoading(false)
//             console.log(res.data)
//         })
//     },[])

//     return (
//         <div>
//             {/* {images.map(img => {
//                 <ImageCard key={img.id} pic={img.picture} name={img.result} />
//             })} */}
//         </div>
//     )
// }

// export default Images

