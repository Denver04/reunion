import React , {useState} from 'react';
import data from "./data.js";
import "../CSS/body.css";
import "../CSS/search.css";
import "../CSS/card.css";
import "../CSS/responsive.css";
import { Button } from '@mui/material';
// import { useParams, Link } from "react-router-dom";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';

function Body() {
    const [search , setSearch] = useState("");
    const [location , setLocation] = useState("");
    const [type , setType] = useState("");
    const [ Lprice, setLPrice ] = useState(0);
    const [ Mprice, setMPrice ] = useState(5000000);

    // let {id} = useParams();

  return (
    <div className='body'>
        <div className='body1'>
            <h1>Search properties to rent</h1>
            <input type="search" placeholder='Search....' onChange={(e)=>{setSearch(e.target.value)}}></input>
        </div>
        {/* <div className='search-tag'>
            <label>Location</label>
            <input type="search" placeholder='New York' onChange={(e)=>{setLocation(e.target.value)}}></input>
        </div>
        <Search /> */}
        <div className='divsearch'>
            <div className='search'>
                <div className='search-tag'>
                    <label>Location</label>
                    <input type="search" placeholder='New York' onChange={(e)=>{setLocation(e.target.value)}}></input>
                </div>
                <hr />
                <div className='search-tag'>
                    <label>When</label>
                    <input type="text" className='date-search' placeholder='Select move in date' onFocus={(e) => (e.target.type = "date")}></input>
                    
                </div>
                <hr />
                <div className='search-tag'>
                    <label>Min Price</label>
                    <input type="number" placeholder='0' onChange={(e)=>{setLPrice(e.target.value)}}></input>
                </div>
                <hr />
                <div className='search-tag'>
                    <label>Max Price</label>
                    <input type="number" placeholder='0' onChange={(e)=>{setMPrice(e.target.value)}}></input>
                </div>
                <hr />
                <div className='search-tag'>
                    <label>Property type</label>
                    {/* <input type="search" className='type-search' placeholder='House, office or Company' onChange={(e)=>{setType(e.target.value)}}></input> */}
                    <select className='select-search' value={type} onChange={(e)=>{setType(e.target.value)}}>
                        <option value="" disabled selected>Industry</option>
                        <option> </option>
                        <option>House</option>
                        <option>Company</option>
                        <option>office</option>
                    </select>
                </div>
                <hr />
                <Button variant="contained" style={{backgroundColor:"rgb(124 77 255)" , color:"white" , padding:"7px 35px"}}>Search</Button>
            </div>
        </div>
        <div className='cards'>
            {
                data.filter((item)=>{
                    return search.toLowerCase() === " " && location.toLowerCase() === " " && type.toLowerCase() === " " && Lprice === " " && Mprice === " " ?
                    item :
                    item.house.toLowerCase().includes(search.toLowerCase()) && 
                    item.addr.toLowerCase().includes(location.toLowerCase()) && 
                    item.type.toLowerCase().includes(type.toLowerCase()) &&
                    item.price > parseInt(Lprice) &&
                    item.price < parseInt(Mprice)
                }).map((item , id)=>(
                    // <Link to={`/house/${item.id}`} >
                    <div className='card-section' key={item.id}> 
                        <div className='card'>
                            <div className='card-img'>
                                <img src={item.image} />
                            </div>
                            <div className='card-info'>
                                <div className='heart'>
                                    <p className='price'><span>${item.price}</span>/month</p>
                                    <FavoriteBorderIcon className='hearts' />
                                </div>
                                <p className='housename'>{item.house}</p>
                                <p className='type'> <ApartmentRoundedIcon /> {item.type}</p>
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
                                    <span> 220 m<sup>2</sup></span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    // </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Body


{/* <DatePicker 
                        render={<InputIcon/>}
                    />    */}