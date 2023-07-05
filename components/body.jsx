import React from "react"
// import Landing from "./Landing"
import LandingTwo from "./LandingTwo"
import LearnAdvertise from "./LearnAdvertise"
import Locations from "./Locations"
import Mission from "./Mission"
import Promote from "./Promote"
import Contact from "./Contact"

export default function body() {
    return (
        <>
        <LandingTwo/>
        <LearnAdvertise/>
        <Promote />
        <Locations />
        <Mission />
        <Contact />
        <div style={{display: 'flex', 'justifyContent': 'center'}}>
                <a href="/contact">
                        <button>Contact Us</button>        
                </a>
        </div>
        </>
    )
}