// src/Events.js
import React, { useState, useEffect } from 'react';
import robo from './robo.png'; // Adjust the path as necessary
import robosoc from './robosoc.png'; // Adjust the path as necessary
import drone from './drone.png'; // Adjust the path as necessary
import rc from './rc.png'; // Adjust the path as necessary
import maze from './maze.png'; // Adjust the path as necessary
import ai from './ai.png'; // Adjust the path as necessary

const Events = () => {
    const [currentEvent, setCurrentEvent] = useState(0);
    const events = [
        { src: robo, alt: 'Event 1' },
        { src: robosoc, alt: 'Event 2' },
        { src: drone, alt: 'Event 3' },
        { src: rc, alt: 'Event 4' },
        { src: maze, alt: 'Event 5' },
        { src: ai, alt: 'Event 6' },
    ];

    const changeEvent = (direction) => {
        setCurrentEvent((prevEvent) => {
            const newEvent = prevEvent + direction;
            if (newEvent < 0) return events.length - 1; // Wrap to last event
            if (newEvent >= events.length) return 0; // Wrap to first event
            return newEvent;
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeEvent(1); // Automatically change event every 3 seconds
        }, 3000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="coord">
            <h1>INVENTORY OF EVENTS</h1>
            <div className="events-container">
                <div className="events">
                    {events.map((event, index) => (
                        <img
                            key={index}
                            src={event.src}
                            className={`event ${index === currentEvent ? 'active' : ''}`}
                            alt={event.alt}
                            style={{ display: index === currentEvent ? 'block' : 'none' }} // Show only the current event
                        />
                    ))}
                </div>
                <div className="nav">
                    <span className="prev" onClick={() => changeEvent(-1)}>&#10094;</span>
                    <span className="next" onClick={() => changeEvent(1)}>&#10095;</span>
                </div>
            </div>
            <div className="listy">
                <h2>ROBOWARS <br /><br />
                    ROBOSOCCER <br /><br />
                    MAZEDASH</h2>
            </div>
            <div className="listy2">
                <h2>FORMULA RC <br /><br />
                    DRONE DERBY <br /><br />
                    HACK-AI-THON</h2>
            </div>
            <div>
                <a href="#">
                    <button className="button1"><span></span>REGISTER</button>
                </a>
            </div>
            <h3>ORGANIZERS</h3>
        </div>
    );
};

export default Events;