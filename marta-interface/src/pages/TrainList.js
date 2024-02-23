import React, { useState, useEffect } from 'react';

export default function TrainList() {
    // initialize some currColor state
  
    return (
      <div>
        <NavBar color={currColor} data={stationData} />
      </div>
    );
}