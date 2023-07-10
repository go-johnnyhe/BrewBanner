import React from "react"

export default function LandingTwo() {

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    
    function resizeWindow() {
        setWindowWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    console.log(windowWidth);

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
            <button className="button1">Advertise With Us</button>
            {windowWidth > 769 ? 
                <>
                <img className="landing-img-1" src="../assets/images/old-cup.png"/>
                <img className="new-cup" src="../assets/images/new-cup.png"/>
                </> : 
                <div className="cup-container">
                <img className="landing-img-1" src="../assets/images/old-cup.png"/>
                <img className="new-cup" src="../assets/images/new-cup.png"/>
                </div>}
            <button className="button2">Distribute With Us</button>
        </div>
        {/* <div className="landing-buttons">

        </div> */}
    </section>
    )
}