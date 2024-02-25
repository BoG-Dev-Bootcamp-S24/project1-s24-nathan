import React, { useState, useEffect } from 'react';

export default function Navbar(props) {
    const { color, data } = props;
    return (
      <div>
        Navbar:
        {color}
      </div>
    );
}