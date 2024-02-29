import React, { useState, useEffect } from 'react';
import "./Navbar.css"

export default function Navbar(props) {
    const { color, data, stationFilter, setFilter } = props;
    
    return (
      <div class="navBox">
        Select your starting station:
        {data == null ? <div class="loading">Loading</div> :
        <div class="stationList">
        {data.map((station) => 
          <button style={{backgroundColor: stationFilter == station ? 'darkgray' : 'rgb(55, 52, 52)'}}
            onClick={() => stationFilter == station ? setFilter(null) : setFilter(station)} class="stationButton">{station}</button>
        )}
        </div>
        }
      </div>
    );
}