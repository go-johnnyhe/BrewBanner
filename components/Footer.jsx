import { useNavigate } from 'react-router-dom';

export default function Footer() {

    const navigateTo = useNavigate();

    function handleOnclick() {
        navigateTo("./contact");
    }

    return (
        <div className="footer-container">
            <p className="mission">We aim to provide effective advertising solutions to businesses while simultaneously aiding coffee shops in reducing costs by supplying free coffee cups.</p>
            <button onClick={handleOnclick} className="button3">Contact us</button>
            <div className="footer-line">
            <img className="footer-icon" src="../assets/images/instagram.svg" alt="instagram" />
            <img className="footer-icon" src="../assets/images/linkedin.svg" alt="linkedin" />
            <p className="footer-logo">brewbanner</p>
            <img className="footer-icon" src="../assets/images/tiktok.svg" alt="tiktok" />
            <img className="footer-icon" src="../assets/images/youtube.svg" alt="youtube" />
            </div>
            {/* <img className="footer-icon" src="../assets/images/linkedin-in.svg" alt="linkedin" /> */}
            {/* <img className="footer-icon" src="../assets/images/square-youtube.svg" alt="youtube" /> */}
        </div>
    )
}