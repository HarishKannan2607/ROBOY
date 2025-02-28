// src/MainEvent.js
import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS for styles

const MainEvent = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [currentEvent, setCurrentEvent] = useState(0);
    const totalSlides = document.querySelectorAll('.slide').length; // Adjust this if slides are dynamic
    const events = document.querySelectorAll('.event');

    useEffect(() => {
        const handleScroll = () => {
            const textContainer = document.getElementById('text-container');
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                textContainer.classList.add('visible');
            } else {
                textContainer.classList.remove('visible');
            }

            const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled
            const elementsToCheck = [
                '.listy', '.listy2', '.text-container', 
                '.chan', '.pat', '.conn', '.fac', '.std'
            ];

            elementsToCheck.forEach(selector => {
                const slides = document.querySelectorAll(selector);
                slides.forEach(slide => {
                    const slideTop = slide.getBoundingClientRect().top;
                    if (slideTop < triggerBottom) {
                        slide.classList.add('visible');
                    } else {
                        slide.classList.remove('visible');
                    }
                });
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex(prevIndex => (prevIndex + 1) % totalSlides);
        };

        const slideInterval = setInterval(showSlides, 3000); // Change image every 3 seconds
        return () => clearInterval(slideInterval);
    }, [totalSlides]);

    const showEvent = (index) => {
        events.forEach((event, i) => {
            event.classList.remove('active', 'prev', 'next');
            if (i === index) {
                event.classList.add('active');
            } else if (i === (index - 1 + events.length) % events.length) {
                event.classList.add('prev');
            } else if (i === (index + 1) % events.length) {
                event.classList.add('next');
            }
        });
    };

    const changeEvent = (direction) => {
        setCurrentEvent(prevEvent => {
            const newEvent = prevEvent + direction;
            if (newEvent < 0) return events.length - 1;
            if (newEvent >= events.length) return 0;
            return newEvent;
        });
    };

    useEffect(() => {
        showEvent(currentEvent);
        const eventInterval = setInterval(() => {
            changeEvent(1);
        }, 3000);
        return () => clearInterval(eventInterval);
    }, [currentEvent]);

    
};

export default MainEvent;