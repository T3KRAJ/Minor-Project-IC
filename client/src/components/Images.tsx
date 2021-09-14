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
  return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.source}
              title={props.result}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {props.result}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}
export default ImagesCard

