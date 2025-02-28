// src/Footer.js
import React from 'react';
import locIcon from './locicon.png'; 
import pdfIcon from './pdficon.png'; 
import instaIcon from './insta.png'; 
import linkIcon from './link.png'; 
import twitIcon from './twit.png'; 
import faceIcon from './face.png'; 
import youicon from './yopu.png';

const Footer = () => {
    return (
        <div className="last">
            <div className="addd">
                <h3>Address</h3>
                <br />
                <p>Sathyabama Institute of Science and Technology (Deemed to be University) <br />
                    Jeppiaar Nagar, Rajiv Gandhi Salai, <br />
                    Chennai - 600 119. Tamilnadu, India.
                </p>
            </div>
            <img src={locIcon} className="loco" alt="Location Icon" width="30" height="30" />
            <div className="cont">
                <h3>Contact Us</h3>
                <br />
                <p>Email-Id: organizers.roboyudh@gmail.com</p>
            </div>
            <div className="social-icons">
                <a href="https://www.instagram.com/sathyabama_advancedstudies/?igsh=MTgwNXd1Nmd2ZzFlZw%3D%3D#" target="_blank" rel="noopener noreferrer">
                    <img src={instaIcon} alt="Instagram" width="30" height="30" />
                </a>
                <a href="https://www.linkedin.com/school/sathyabama/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                    <img src={linkIcon} alt="LinkedIn" width="30" height="30" />
                </a>
                <a href="https://x.com/sathyabamasist?lang=en" target="_blank" rel="noopener noreferrer">
                    <img src={twitIcon} alt="Twitter" width="30" height="30" />
                </a>
                <a href="https://www.facebook.com/SathyabamaOfficial/" target="_blank" rel="noopener noreferrer">
                    <img src={faceIcon} alt="Facebook" width="30" height="30" />
                </a>
                <a href="https://www.youtube.com/@sathyabamaofficial" target="_blank" rel="noopener noreferrer">
                    <img src={youicon} alt="youtube icon" width="30" height="30" />
                </a>
                <a href="https://www.facebook.com/SathyabamaOfficial/" target="_blank" rel="noopener noreferrer">
                    <img src={pdfIcon} alt="PDF Icon" className="pdficon" />
                </a>
                <div className="broch">
                    <h3>Brochure: </h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;