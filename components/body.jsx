import React from "react"
import Landing from "./Landing"
import LandingTwo from "./LandingTwo"
import LearnAdvertise from "./LearnAdvertise"
import Locations from "./Locations"
import Mission from "./Mission"

export default function body() {
    return (
        <>
        <LandingTwo/>
        <LearnAdvertise/>
        <Locations/>
        <Mission/>
        <div style={{display: 'flex', 'justifyContent': 'center'}}>\
                <a href="/contact">
                        <button>Contact Us</button>        
                </a>
        </div>
        </>
    )
}