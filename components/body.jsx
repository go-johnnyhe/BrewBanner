import React from "react"
import Landing from "./Landing"
import LandingTwo from "./LandingTwo"
import LearnAdvertise from "./LearnAdvertise"
import Locations from "./Locations"
import Mission from "./Mission"
import Promote from "./Promote"
import Contact from "./Contact"

export default function body() {
    return (
        <>
        {/* <Landing/> */}
        <LandingTwo />
        <LearnAdvertise/>
        <Promote />
        <Locations />
        <Mission />
        <Contact />
        </>
    )
}