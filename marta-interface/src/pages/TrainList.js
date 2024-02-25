import React, { useState, useEffect } from 'react';
import Train from "../components/Train.js"

export default function TrainList(props) {
    const{ color, data } = props;
  
    return (
      <div>
        {data ? data.map((train) => 
          <Train train={train}/>
        ) : <div>Loading...</div>}
      </div>
    );
}