import React, { useState, useEffect } from 'react';
import './Train.css';

export default function Train(props) {
    const{train} = props
  
    return (
      <div class="trainBox">
        <div class="letterIcon">{train.STATION.charAt(0)}</div>
        <div class="infoBox">
          {train.STATION} &rarr; {train.DESTINATION}
          <div class="colorAndDelay">
            <div class="lineColorBox" style={{backgroundColor: train.LINE.toLowerCase()}}>{train.LINE}</div>
            <div>{train.DELAY === "T0S" ? <div style={{color:'green'}}>On Time</div> : <div style={{color:'red'}}>Delayed</div>}</div>
          </div>
        </div>
        <div class="waitingTime">{train.WAITING_TIME}</div>
      </div>
    );
}