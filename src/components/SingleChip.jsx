import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { MdOutlineRadioButtonChecked } from "react-icons/md";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { selectClasses } from '@mui/material';


export const SingleChip=({id,name, selectedGenres, setSelectedGenres})=> {
    const [isSelected, setIsSelected]= useState(false)
  const handleClick = () => {
    setIsSelected(!isSelected)
    console.log(selectedGenres);
    
    if(selectedGenres.indexOf(id)==-1){
      setSelectedGenres(prev=> [...prev, id])
    }else{
      setSelectedGenres(prev=>prev.filter((item)=>item!=id))
    }
  };

  return (
    <Stack direction="row" spacing={1} sx={{padding:"5px", display:"flex", flexWrap:"wrap"}}>
      <Chip
      className='radiogombok'
        label={name}
        onClick={handleClick}
        icon={isSelected? <MdOutlineRadioButtonChecked /> :<MdOutlineRadioButtonUnchecked />}
        clickable
        color='warning'
        sx={{color:"whitesmoke", bgcolor:"#b419198c"}}
        />
    </Stack>
  );
}
