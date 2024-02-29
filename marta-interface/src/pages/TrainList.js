import React, { useState, useEffect } from 'react';
import Train from "../components/Train.js"
import "./TrainList.css";

export default function TrainList(props) {
    const{ color, data, stationFilter} = props;
    const[arrivingFilter, setArrivingFilter] = useState(null)
    const[directionFilter, setDirectionFilter] = useState(null)
    const[listLoading, setListLoading] = useState(true)

    function filterData(data) {
      let newData = data;
      if (arrivingFilter == 'A') {
        newData = newData.filter((train) => train.WAITING_TIME == "Arriving")
      }
      if (arrivingFilter == 'S') {
        newData = newData.filter((train) => train.WAITING_TIME != "Arriving")
      }
      if (directionFilter == 'N') {
        newData = newData.filter((train) => train.DIRECTION == "N")
      }
      if (directionFilter == 'S') {
        newData = newData.filter((train) => train.DIRECTION == "S")
      }
      if (directionFilter == 'E') {
        newData = newData.filter((train) => train.DIRECTION == "E")
      }
      if (directionFilter == 'W') {
        newData = newData.filter((train) => train.DIRECTION == "W")
      }
      if (stationFilter != null) {
        console.log(stationFilter)
        newData = newData.filter((train) => train.STATION.includes(stationFilter.toUpperCase()))
      }

      return newData
    }

    return (
      <div class = "trainListBox">
        <div class="filterButtons">
          <button class="filterButton" style={{backgroundColor: arrivingFilter == 'A' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            arrivingFilter == 'A'? setArrivingFilter(null) : setArrivingFilter('A')}>Arriving</button>
          
          <button class="filterButton" style={{backgroundColor: arrivingFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
            arrivingFilter == 'S'? setArrivingFilter(null) : setArrivingFilter('S')}>Scheduled</button>
          
          {color == 'gold' || color == 'red' ? 
          <>
            <button class="filterButton" style={{backgroundColor: directionFilter == 'N' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
              directionFilter == 'N' ? setDirectionFilter(null) : setDirectionFilter('N')}>Northbound</button>
            
            <button class="filterButton" style={{backgroundColor: directionFilter == 'S' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
              directionFilter == 'S' ? setDirectionFilter(null) : setDirectionFilter('S')}>Southbound</button>
          </> :
          <>
            <button class="filterButton" style={{backgroundColor: directionFilter == 'E' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
              directionFilter == 'E' ? setDirectionFilter(null) : setDirectionFilter('E')}>Eastbound</button>
            
            <button class="filterButton" style={{backgroundColor: directionFilter == 'W' ? 'lightslategray' : 'ButtonFace'}} onClick={() => 
              directionFilter == 'W' ? setDirectionFilter(null) : setDirectionFilter('W')}>Westbound</button>
          </>}
        </div>

        {data == null ? <div class="noTrainsText">Loading...</div> : filterData(data)[0] == null ? <div class="noTrainsText">No Current Trains Match Filters</div> : 
          filterData(data).map((train) => 
          <Train train={train}/>
        )}
      </div>
    );
}