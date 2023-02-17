import React , {useState} from 'react';
import {data} from "./data.js";
import "../CSS/body.css";
import Search from './Search';
import sx from "../images/sx.jpg";
import "../CSS/card.css";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import Card from './Card';

function Body() {
    const [search , setSearch] = useState("");

  return (
    <div className='body'>
        <div className='body1'>
            <h1>Search properties to rent</h1>
            <input type="search" placeholder='Search....' onChange={(e)=>{setSearch(e.target.value)}}></input>
        </div>
        <Search />
        <div className='cards'>
            {
                data.filter((item)=>{
                    return search.toLowerCase() === " " ?
                    item :
                    item.house.toLowerCase().includes(search)
                }).map((item , key)=>(
                    <div className='card-section' key={item.id}> 
                        <div className='card'>
                            <div className='card-img'>
                                <img src={sx} />
                            </div>
                            <div className='card-info'>
                                <div className='heart'>
                                    <p className='price'><span>{item.price}</span>/month</p>
                                    <FavoriteBorderIcon className='hearts' />
                                </div>
                                <p className='housename'>{item.house}</p>
                                <p className='addr'>{item.addr}</p>
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
                ))
            }
        </div>
    </div>
  )
}

export default Body