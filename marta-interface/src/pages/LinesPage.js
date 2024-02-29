import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.js";
import TrainList from "./TrainList.js";
import "./LinesPage.css";

export default function LinesPage() {
    // initialize some currColor state
    const URL = "https://midsem-bootcamp-api.onrender.com"
    const [currColor, setCurrColor] = useState('gold');
    const [stationData, setStationData] = useState([]);
    const [trainData, setTrainData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stationFilter, setStationFilter] = useState(null);

    useEffect(() => {
      setLoading(true);
      fetchStationData();
      fetchArrivalsData();
      setLoading(false)
    }, [currColor]);

    async function fetchStationData() {  
      setStationData(null);
      await fetch(URL + '/stations/' + currColor)
      .then(response => response.json())
      .then(data => setStationData(data))
      .catch(console.log("error"))
    }

    async function fetchArrivalsData() {
      setTrainData(null);
      await fetch(URL + '/arrivals/' + currColor)
      .then(response => response.json())
      .then(data => setTrainData(data))
      .catch(console.log("error"))
    }

  
    return (
      <div class="box">
        <div class="colorButtons">
            <button class="button" style={{backgroundColor: 'gold'}} onClick={() => setCurrColor('gold')}>Gold</button>
            <button class="button" style={{backgroundColor: 'red'}} onClick={() => setCurrColor('red')}>Red</button>
            <button class="button" style={{backgroundColor: 'blue'}} onClick={() => setCurrColor('blue')}>Blue</button>
            <button class="button" style={{backgroundColor: 'green'}} onClick={() => setCurrColor('green')}>Green</button>
        </div>
        <div class="colorHeader">{currColor.toUpperCase()}</div>
        <div class="mainBox">
          <Navbar color={currColor} data={stationData} stationFilter={stationFilter} setFilter={setStationFilter}/>
          <TrainList color={currColor} data={trainData} stationFilter={stationFilter}/>
        </div>

      </div>
    );
}