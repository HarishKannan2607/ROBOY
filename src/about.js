// src/About.js
import React, { useState, useEffect } from 'react';
import sathad from './sathad.jpg'; // Adjust the path as necessary
import reas from './reas.jpg'; // Adjust the path as necessary
import adv from './adv.jpg'; // Adjust the path as necessary
import advvvv from './advvvv.jpeg'; // Adjust the path as necessary

const images = [
    { src: sathad, alt: 'Image 1' },
    { src: reas, alt: 'Image 2' },
    { src: adv, alt: 'Image 3' },
    { src: advvvv, alt: 'Image 4' },
];

const About = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="about">
            <h1>EVENT OVERVIEW</h1>
            <div className="text-container" id="text-container">
                <p>The event showcases a thrilling array of robotics competitions,</p>
                <p>kicking off with Robowars, where teams battle their custom robots.</p>
                <p>In Robo Soccer, participants demonstrate their skills as robots compete for goals.</p>
                <p>A captivating drones competition introduces aerial challenges,</p>
                <p>while a hackathon fosters collaboration among everyone on innovative projects.</p>
                <p>The atmosphere is electric, with fans passionately supporting their favorites.</p>
                <p>This event promises to be a celebration of</p>
                <p>creativity, teamwork, and the future of technology.</p>
            </div>
            <div className="slideshow-container">
                <div className="slides">
                    <div className="slide">
                        <img src={images[currentIndex].src} alt={images[currentIndex].alt} width="800" height="480" />
                    </div>
                </div>
            </div>
            <div className="sath">
                <p>Gain more insights into our college.</p>
                <div>
                <a href="https://www.sathyabama.ac.in/" className="button">
                  CLICK HERE!
                </a>
                </div>
            </div>
        </div>
    );
};

export default About;