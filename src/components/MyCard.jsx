import React, { useState } from 'react'
import { img_500, img_300, img_none } from '../utils'
import { Box, Card, CardContent, CardMedia, Modal, Typography } from '@mui/material';

export const MyCard = ({poster_path,title,original_title
,release_date,vote_average,backdrop_path, overview}) => {
    
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
    <Card className='holographic-card' sx={{ height:630, width: 345, position:"relative", objectFit:"cover", aspectRatio:"1.1", gap:"30px"}}>
      
      <CardMedia
      onClick ={handleOpen}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
      onClick ={handleOpen}
        sx={{ backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", userSelect:"none"}}
        height="auto" width="auto" component="img"
        image={backdrop_path?img_500+backdrop_path:img_none}
        title={original_title}
    />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <b>{title}</b> ({release_date})
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {overview}
          </Typography>
        </Box>
      </Modal>
    </div>
  );

}
