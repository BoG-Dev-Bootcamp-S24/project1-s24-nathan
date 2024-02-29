import React, { useState, useEffect } from 'react';
import "./Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function About() {
    
    return (
        <div class="body">
            <div class="header">
                <div class="aboutButton"></div>
                <div>MARTA</div>
                <button class="aboutButton" onClick={() => navigate("/about")}>About MARTA</button>
            </div>
            <div class="mainBox">
                <div class="routes">
                    <div class="routesHeader">VIEW ROUTES SCHEDULE</div>
                    <button class="routeButton" onClick={() => navigate("/lines/gold")}><span style={{color:'gold'}}>Gold</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/red")}><span style={{color:'red'}}>Red</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/blue")}><span style={{color:'blue'}}>Blue</span>&#8205; Line</button>
                    <button class="routeButton" onClick={() => navigate("/lines/green")}><span style={{color:'green'}}>Green</span>&#8205; Line</button>
                </div>
                <img src={trainImage} class="trainImage"/>
            </div>
        </div>
    );
}