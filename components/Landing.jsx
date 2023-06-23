const Landing = () => {
    return (
        <>
            <div className="landing-container">
                <div style={{'max-width': '500px', width: '25%', 'margin-top': '10%'}}>
                    <h1>Brew up your brand on our unique platform</h1>
                    <button >Advertise with us</button> 
                </div>
                <div style={{width: '35%', height: 'auto'}}>
                    <img src='../assets/Brew Banner.png' alt='banner' style={{height: '100%', width: '100%'}}></img>
                </div>
                <div style={{'max-width': '500px', width: '25%', 'margin-top': '10%'}}>
                    <h1 style={{'text-align': 'right'}}>Promote a cause while reducing operating costs</h1>
                    <button style={{float: 'right'}}>Distribute with us</button>
                </div>
            </div>            
        </>
    )
}

export default Landing