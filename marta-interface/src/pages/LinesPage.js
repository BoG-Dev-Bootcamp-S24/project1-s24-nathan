import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.js"
import TrainList from "./TrainList.js"

export default function LinesPage() {
    // initialize some currColor state
    const URL = "https://midsem-bootcamp-api.onrender.com"
    const [currColor, setCurrColor] = useState('gold');
    const [stationData, setStationData] = useState([]);
    const [trainData, setTrainData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(URL + '/stations/' + currColor)
        .then(response => response.json())
        .then(data => setStationData(data))
        .catch(console.log("error"))

        fetch(URL + '/arrivals/' + currColor)
        .then(response => response.json())
        .then(data => setTrainData(data))
        .catch(console.log("error"))
        setLoading(false)
        //setTimeout(() => setLoading(false), 300)
    }, [currColor]);

  
    return (
      <div>
        <div class="colorButtons">
            <button class="goldButton" onClick={() => setCurrColor('gold')}>Gold</button>
            <button class="redButton" onClick={() => setCurrColor('red')}>Red</button>
            <button class="blueButton" onClick={() => setCurrColor('blue')}>Blue</button>
            <button class="greenButton" onClick={() => setCurrColor('green')}>Green</button>
        </div>
        {loading ? <div>Loading...</div> : <div>{stationData}</div>}
        {loading ? <div>Loading...</div> : (stationData ? <Navbar color={currColor} data={stationData}/> : <div>Error Fetching Data</div>)}
        {loading ? <div>Loading...</div> : (trainData? <TrainList color={currColor} data={trainData}/> : <div>Error Fetching Data</div>)}
      </div>
    );
}