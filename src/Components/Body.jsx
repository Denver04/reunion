import React from 'react';
import "../CSS/body.css";
import Search from './Search';

function Body() {
  return (
    <div className='body'>
        <div className='body1'>
            <h1>Search properties to rent</h1>
            <input type="search" placeholder='Search'></input>
        </div>
        <Search />
    </div>
  )
}

export default Body