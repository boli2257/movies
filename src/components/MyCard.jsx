import React from 'react'
import { img_500 } from '../utils'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const MyCard = ({backdrop_path,original_title
,release_date,vote_average}) => {
    
  return (
    <Card sx={{ width: 345,borderRadius:"10px", position:"relative"}}>
      <CardMedia
        sx={{ height: 140 , borderRadius:"10px 10px 0px 0px"}}
        image={img_500+backdrop_path}
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
