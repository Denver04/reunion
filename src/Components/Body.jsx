import React from 'react';
import "../CSS/body.css";
import Search from './Search';
import Card from './Card';

function Body() {
  return (
    <div className='body'>
        <div className='body1'>
            <h1>Search properties to rent</h1>
            <input type="search" placeholder='Search'></input>
        </div>
        <Search />
        <div className='cards'>
            <Card name="Sherlock House" price="$2200"/>
            <Card name="Watson House" price="$1500" />
            <Card name="Western Avenue" price="$3000" />
            <Card name="Amaan Hilton" price="$2500" />
            <Card name="Hilton Carter" price="$800" />
            <Card name="Yorkingel" price="$11520" />
            <Card name="White House" price="$8400" />
            <Card name="Palm Harbor" price="$4000" />
            <Card name="Beverly SpringField" price="$990" />
            <Card name="Faulkner Ave" price="$2312" />
            <Card name="Elementary Residency" price="$5000" />
            <Card name="Akuma house" price="$1213" />
            <Card name="Freemangood" price="$1536" />
            <Card name="Western Avenue" price="$2000" />
            <Card name="Easy home" price="$4500" />
        </div>
    </div>
  )
}

export default Body