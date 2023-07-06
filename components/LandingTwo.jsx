import React from "react"

export default function LandingTwo() {
    return (
    <section className="landing-container">
        {/* <div className="landing-img-container">
            <img className="landing-img-1" src="../assets/images/Brew Banner1.png"/>
            <img className="landing-img-2" src="../assets/images/Brew Banner2.png"/>
            <img className="landing-img-3" src="../assets/images/Brew Banner3.png"/>
            <img className="landing-img-4" src="../assets/images/Brew Banner4.png"/>
            <img className="landing-img-5" src="../assets/images/Brew Banner5.png"/>
            <img className="landing-img-6" src="../assets/images/Brew Banner6.png"/>
        </div> */}
        <div className="landing-img-container">
            <img className="landing-img-1" src="../assets/images/old-cup.png"/>
            <div className="button-container">
            <button className="button1">Advertise with us</button>
            <button className="button2">Distribute with us</button>
            </div>
            <img className="new-cup" src="../assets/images/new-cup.png"/>

        </div>
        {/* <div className="landing-buttons">

        </div> */}
    </section>
    )
}