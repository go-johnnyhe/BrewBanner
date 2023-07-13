import { useNavigate } from 'react-router-dom';

const Locations = () => {
    const navigateTo = useNavigate();

    function handleOnclick() {
        navigateTo("/soon");
    }

    return (
        <>
            <h1 style={{textAlign: 'center', paddingTop: '80px'}}>Our Coffee Shop Locations</h1>
            <div className="diamond-container" style={{'maxLength': '4000px'}}>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                <div className="diamond"></div>
                {/* <div className="diamond"></div>
                <div className="diamond"></div> */}
            </div>
            <div style={{display: 'flex', 'justifyContent': 'center', margin: '50px'}}>
                <button style={{marginTop: '20px'}} className="learn-more" onClick={handleOnclick}>Join us</button>
            </div>
        </>
    )
}

export default Locations