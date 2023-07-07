import React from "react"
import LandingTwo from "./LandingTwo"
import LearnAdvertise from "./LearnAdvertise"
import Locations from "./Locations"
import Mission from "./Mission"
import Promote from "./Promote"
import Contact from "./Contact"

export default function Body() {
    return (
        <div className="main-page">
        <LandingTwo/>
        <LearnAdvertise/>
        <Promote />
        <Locations />
        <Mission />
        <div style={{display: 'flex', 'justifyContent': 'center'}}>
                <a href="/contact">
                        <button>Contact Us</button>        
                </a>
        </div>
        </div>
    )
}
