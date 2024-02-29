import React, { useState, useEffect } from 'react';
import "./About.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import trainImage from "./img/martaTrain2.jpeg";

export default function About() {
    const navigate = useNavigate();
    
    return (
        <div class="body">
            <div class="header">
                <button class="backButton" onClick={() => navigate("/")}>Back</button>
                <div>MARTA</div>
                <div class="backButton"></div>
            </div>
            <div class="mainBox">
                <div class="bioBox">
                    <div class="bioHeader" style={{fontSize:'250%'}}>At MARTA</div>
                    <div class="bioHeader">Our Vision</div>
                    People taking People where they want to go today and tomorrow.
                    <div class="bioHeader">Our Mission</div>
                    To advocate for and provide safe, multimodal transit services that advance prosperity, connectivity and equity for a more livable region.
                    <div class="bioHeader">Our Priorities</div>
                    Everyday, we will do our part at MARTA to operate a transit system that:
                    <ul>
                        <li>Consistently provides excellence in customer service</li>
                        <li>Delivers the capital program with speed and efficiency</li>
                        <li>Strengthens the MARTA brand</li>
                        <li>Demonstrates fiscal responsibility</li>
                    </ul>
                </div>
                <img src={trainImage} class="trainImage"/>
            </div>
        </div>
    );
}