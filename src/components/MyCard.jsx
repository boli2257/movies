import React from 'react'
import { img_500 } from '../utils'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export const MyCard = ({backdrop_path,original_title
,release_date,vote_average}) => {
    
  return (
    <Card sx={{ width: 345,borderRadius:"10px" }}>
      <CardMedia
        sx={{ height: 140 , borderRadius:"10px 10px 0px 0px", position:"relative"}}
        image={img_500+backdrop_path}
        title={original_title}
      />
      <CardContent>
        <div className='rateing'>
          {Math.round(vote_average*10)/10}
        </div>
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
