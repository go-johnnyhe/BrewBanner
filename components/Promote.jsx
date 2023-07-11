import React from "react"

export default function Promote() {
    return (
        <div className="promote-container">
            <h1 className="promote-title header-galaxy" style={{paddingTop: '80px', paddingBottom: '80px'}}>Promote a Cause While Reducing Costs</h1>
            <div className="promote-content">
                <div className="promote-box">
                    <p className="promote-smallText">Number of trees planted since 2023</p>
                    <p className="bigNum2">5,000</p>
                </div>
                <div className="promote-box2">
                    <p className="promote-text">10% of the profit is donated to #TeamTrees to help reforest the planet.</p>
                </div>
                <div className="promote-box2">
                    <p className="promote-text">All coffee cups are provided and delivered to coffee shops for free.</p>
                </div>
                <div className="promote-box">
                    <p className="promote-smallText">Dollars businesses save per year</p>
                    <p className="bigNum2">35,000</p>
                </div>
            </div>
            <div style={{display: 'flex', 'justifyContent': 'center', margin: '30px'}}>
                <button className="learn-more" style={{marginTop: '30px'}}>Learn More</button>
            </div>
        </div>
    )
}