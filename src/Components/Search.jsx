import React from 'react';
import { Button } from '@mui/material';
import "../CSS/search.css";

function Search() {
  return (
    <div className='search'>
        <div className='search-tag'>
            <label>Location</label>
            <input type="text" placeholder='New York'></input>
        </div>
        <hr />
        <div className='search-tag'>
            <label>When</label>
            <input type="date" placeholder='Select move in date'></input>
        </div>
        <hr />
        <div className='search-tag'>
            <label>Price</label>
            <input type="number" placeholder='0'></input>
        </div>
        <hr />
        <div className='search-tag'>
            <label>Property type</label>
            <input type="text" placeholder='House'></input>
        </div>
        <hr />
        <Button variant="contained" style={{backgroundColor:"rgb(124 77 255)" , color:"white"}}>Signup</Button>
    </div>
  )
}

export default Search