const LearnAdvertise = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', paddingTop: '80px'}}>Brew Up Your Brand On Our Unique Platform</h1>
            <p className="smallText promote-subtitle">On average, every cup gets</p>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {/* <div className="LearnAdvertise-container"> */}
                <div className="LearnAdvertiseBox">
                    <p className="bigNum">15</p>
                    <p className="mediumText">impressions</p>
                </div>

               <div className="LearnAdvertiseBox">
                    <p className="bigNum">30</p>
                    <p className="mediumText">minutes</p>
                </div>

                <div className="LearnAdvertiseBox">
                    <p className="bigNum">20</p>
                    <p className="mediumText">exposures</p>
                    {/* <p className="smallText">as a mobile billboard</p> */}
                </div>
            {/* </div> */}
            </div>
            <div style={{display: 'flex', 'justifyContent': 'center', margin: '30px'}}>
                <button>Learn More</button>
            </div>
        </>
    )
}

export default LearnAdvertise