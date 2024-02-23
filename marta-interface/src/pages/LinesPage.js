import React, { useState, useEffect } from 'react';

export default function LinesPage() {
    // initialize some currColor state
  
    return (
      <div>
        <NavBar color={currColor} data={stationData} />
        <TrainList color={currColor} data={trainData} />
      </div>
    );
}