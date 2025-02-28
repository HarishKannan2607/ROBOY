// src/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import logo from './logo.png'; 
import sathyabamalogo from './sathyabamalogo-Photoroom.png'; // Adjust the path as necessary
import naacLogo from './naac-Photoroom.png'; // Adjust the path as necessary
import otherLogos from './otherlogos-Photoroom.png'; // Adjust the path as necessary

const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <img src={logo} className="logo" alt="Logo" />
                <ul>
                    <li><a href="App.js">HOME</a></li>
                    <li><Link to="about" smooth={true} duration={500}>
                Overview
                </Link>
                </li>
                    <li><a href="#">LIST OF EVENTS</a></li>
                    <li><a href="#">ORGANIZERS</a></li>
                    <li><a href="#">SPONSORS</a></li>
                </ul>
            </div>
            <div className="text">
                <h1>SATHYABAMA</h1>
                <p>INSTITUTE OF SCIENCE AND TECHNOLOGY</p>
                <p>(DEEMED TO BE UNIVERSITY)</p>
                <h3>Category 1 University By UGC</h3>
                <h3>ACCREDITED WITH GRADE "A++" BY NAAC | APPROVED BY AICTE</h3>
                <br />
                <br />
                <br />
                <br />
                <h2>SCHOOL OF COMPUTING</h2>
                <h2>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING</h2>
                <p>(SPECIALIZATION IN ARTIFICIAL INTELLIGENCE AND ROBOTICS)</p>
                <p>PRESENTS</p>
            </div>
            <div className="imgs1">
                <img src={sathyabamalogo} className="logo1" alt="Sathyabama Logo" width="100" height="100" />
                <img src={naacLogo} className="logo2" alt="NAAC" width="100" height="80" />
                <img src={otherLogos} className="logo3" alt="Other Logos" />
                <h1>ROBO YUDH</h1>
                <h3>On 27 & 28 March, 2025</h3>
            </div>
        </div>
    );
};

export default Header;