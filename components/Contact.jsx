const Contact = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', paddingLeft: '38%', paddingRight: '38%'}}>Contact Us</h1>
            <form>
                <div style={{display: 'flex', 'justifyContent': 'center'}}>
                    <input type="email" id='contact-email' placeholder="Email" style={{width: '50%', maxWidth: '800px'}}/><br/>
                </div>
                <div style={{display: 'flex', 'alignItems': 'center', 'flexDirection': 'column'}}>
                    <textarea type="text" id='contact-text' style={{height: '200px', width: '50%', maxWidth: '800px', margin: '20px'}}/><br/>
                    <button value="Submit">Submit</button>
                </div>
                
            </form>
        </>
    )
}

export default Contact