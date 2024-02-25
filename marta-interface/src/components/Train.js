import React, { useState, useEffect } from 'react';
import './Train.css';

export default function Train(props) {
    const{train} = props
  
    return (
      <div class="box">
        <div class="letterIcon">{train.STATION.split(0, 1)}</div>
      </div>
    );
}