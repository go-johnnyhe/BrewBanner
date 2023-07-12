import React from "react"
import LandingTwo from "./LandingTwo"
import LearnAdvertise from "./LearnAdvertise"
import Locations from "./Locations"
import Promote from "./Promote"
import Footer from "./Footer"


export default function Body() {
    return (
        <div className="main-page">
        <LandingTwo/>
        <LearnAdvertise/>
        <Promote />
        <Locations />
        <Footer />
        </div>
    )
}
