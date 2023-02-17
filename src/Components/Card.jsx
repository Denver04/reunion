import React from 'react';
import {data} from "./data.js"
import sx from "../images/sx.jpg";
import "../CSS/card.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Card(props) {
  return (
    <div className='card-section'> 
        <div className='card'>
            <div className='card-img'>
                <img src={sx} />
            </div>
            <div className='card-info'>
                <div className='heart'>
                    <p className='price'><span>{props.price}</span>/month</p>
                    <FavoriteBorderIcon className='hearts' />
                </div>
                <p className='housename'>{props.name}</p>
                <p className='addr'>221B Bakers Street</p>
            </div>
            <hr />
            <div className='card-icon'>
                <div className='icons'> 
                    <BedIcon className='icon' /> 
                    <span>4 beds</span>
                </div>
                <div className='icons'> 
                    <BathtubIcon className='icon' />
                    <span>4 bathrooms</span>
                 </div>
                <div className='icons'>
                    <CropSquareIcon className='icon' />
                    <span> 220 m2</span> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card