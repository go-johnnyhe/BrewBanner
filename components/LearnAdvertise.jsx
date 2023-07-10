const LearnAdvertise = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', paddingTop: '80px', paddingBottom: '80px'}}>Brew Up Your Brand On Our Unique Platform</h1>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
               <div className="LearnAdvertiseBox">
                    <p className="bigNum">30</p>
                    <p className="mediumText">minutes</p>
                    <p className="smallText">of extended personal connection</p>
                </div>
                <div className="LearnAdvertiseBox">
                    <p className="bigNum">10</p>
                    <p className="mediumText">impressions</p>
                    <p className="smallText">for each potential customer</p>
                </div>
                <div className="LearnAdvertiseBox">
                    <p className="bigNum">20</p>
                    <p className="mediumText">distinct exposures</p>
                    <p className="smallText">as a mobile billboard</p>
                </div>
            </div>
            <div style={{display: 'flex', 'justifyContent': 'center', margin: '30px'}}>
                <button>Learn More</button>
            </div>
        </>
    )
}

export default LearnAdvertise