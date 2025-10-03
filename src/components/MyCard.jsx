import React from 'react'
import { img_500 } from '../utils'

export const MyCard = ({backdrop_path,title}) => {
    return (
    
    <div>
      <img src={img_500+backdrop_path} alt={title} />
  

    </div>

  )
}
