import React from 'react'
import { img_500, img_300 } from '../utils'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const MyCard = ({poster_path,title,original_title
,release_date,vote_average}) => {
    
  return (
    <Card className='holographic-card' sx={{ height:630, width: 345, position:"relative", objectFit:"cover", aspectRatio:"1.1", gap:"30px"}}>
      <CardMedia
        sx={{ height: 500 }}
        image={img_500+poster_path}
        title={original_title}
    />
      <div className='rating'>
          {Math.round(vote_average*10)/10}
        </div>
      <CardContent>
        
        <Typography gutterBottom variant="h5" component="div">
          {original_title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {release_date}
        </Typography>
          
      </CardContent>
    </Card>
  );

}
