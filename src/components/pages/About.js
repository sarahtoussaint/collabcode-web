import React from 'react';
import AboutFeatures from './AboutFeatures'; // if you added Features
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About CollabCode</h1>
      <div className="about-text">
        <p>
        CollabCode is a Visual Studio Code extension deployed on the marketplace, built for creators, developers, and teams who want to build, chat, and create together seamlessly.
        </p>
        <p>
        Whether you're brainstorming ideas, coding side-by-side, or building the next big thing — CollabCode is designed to make teamwork feel natural, not forced.
        </p>
        <p>
        Below we have descriptions of three of our key features used to enhance your coding experience. 
        </p>
      </div>

      <AboutFeatures />
    </div>
  );
}

// ✅ This line is CRITICAL:
export default About;
