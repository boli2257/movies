import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useQueries, useQuery } from 'react-query';
import { detailsData } from '../utils';
import { CardMedia } from '@mui/material';
import { MyCarousel } from './MyCarousel';
import { img_500, img_300, img_none } from '../utils'
import { ShowTrailer } from './ShowTrailer';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MyModal = ({ open, setOpen, id, type, }) => {
  const urlDetails = `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`;
  console.log(urlDetails);

  const handleClose = () => setOpen(false);

  const { data, isLoading, isError, error } = useQuery({ queryKey: ['details', urlDetails], queryFn: detailsData })
  console.log(open);

  data && console.log(data);
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      <Modal
        className='maga_a_modal'
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Box sx={style}>
          {data &&
            <CardMedia
              sx={{ backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", userSelect: "none" }}
              height="auto" component="img"
              image={data && img_500 + data.backdrop_path}
              title={data?.original_title}
            />}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className='modal_cim'>{data && (data?.original_title || data?.name)}</span>
            <span className='modal_ev'>{data && (data?.release_date || data?.first_air_date)}</span>
          </Typography>
          <Typography className='tagline'>
            {data && data?.tagline}
          </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {data && data?.overview}
            </Typography>
            <MyCarousel  type={type} id={id} />
            <ShowTrailer ctype={type} id={id} />
        </Box>
      </Modal>
    </div>
  );
}
