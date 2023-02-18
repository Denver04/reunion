import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import "../CSS/navbar.css"

function Navbar() {

  return (
    <div className='navbar'>
        <div className='navbar-icon'>
           <HomeIcon className='icon' />
           <h5>Reunion</h5> 
        </div>
        <div className='navbar-tags'>
            <Button variant="text">Rent</Button>
            <Button variant="text">Buy</Button>
            <Button variant="text">Sell</Button>
            <Button variant="text">Manage property</Button>
            <Button variant="text">Resources</Button>
        </div>
        <div className='navbar-btn'>
            <Button variant="outlined">Login</Button>
            <Button variant="contained" style={{backgroundColor:"rgb(124 77 255)" , color:"white"}}>Signup</Button>
        </div>
    </div>
  )
}

export default Navbar