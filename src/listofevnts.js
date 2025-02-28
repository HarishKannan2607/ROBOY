 import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Events.css";

const Events = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <h1 className="animate-text primary-text">HACK THE PRESENT. BUILD THE FUTURE.</h1>
      </header>

      <div className="canvas">
        {/* Event 1 - Robowars */}
        <div className="container" onClick={() => navigate("/robowars")}>
          <div id="card" style={{ backgroundImage: "url(robowars.png)" }}>
            <div className="title">Robowars</div>
            <div className="subtitle">
              Battle for supremacy! Compete with robots in combat and showcase your engineering skills in an intense arena battle.
            </div>
          </div>
        </div>

        {/* Event 2 - RoboSoccer */}
        <div className="container" onClick={() => navigate("/robosoccer")}>
          <div id="card" style={{ backgroundImage: "url(/robosoccer.png)" }}>
            <div className="title">RoboSoccer</div>
            <div className="subtitle">
              Robots in action on the soccer field. Design and control robots to score goals in an electrifying soccer match.
            </div>
          </div>
        </div>

        {/* Other Events */}
        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robot-drone.png)" }}>
            <div className="title">Drone Derby</div>
            <div className="subtitle">Race through obstacles to win! Navigate high-speed drones in a thrilling aerial race.</div>
          </div>
        </div>

        <div className="container">
          <div id="card" style={{ backgroundImage: "url(/robot-searching.png)" }}>
            <div className="title">Maze Dash</div>
            <div className="subtitle">Navigate through the maze autonomously. Test your robot's ability to find its way.</div>
          </div>
        </div>

        {/* Event 5 - RC Racing */}
       <div className="container">
              <div id="card" style={{ backgroundImage: "url(/robot-car.png)" }}>
                <div className="title">Formula RC</div>
                <div className="subtitle">
                  Speed and precision in every race. Race remote-controlled cars
                  and fine-tune your design for maximum performance.
                </div>
              </div>
            </div>

            {/* Event 6 - HackAIthon */}
            <div className="container">
              <div
                id="card"
                style={{ backgroundImage: "url(/robot-laptop.png)" }}
              >
                <div className="title">Hack-AI-thon</div>
                <div className="subtitle">
                  AI tools to solve mini-project challenges. Innovate using AI
                  technologies to develop solutions for real-world problems in
                  just 24 hours.
                </div>
              </div>
            </div>

      </div>
    </div>
  );
};

export default Events;