import React, { useState, useEffect } from 'react';
import TypingHeader from './TypingHeader';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 7400); // wait 4 seconds (or however long your typing takes)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-wrapper">
      <video
        className="background-video"
        src="/assets/homepage.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-container">
        <div className="hero-content">
          <TypingHeader />
          {showArrow && <div className="scroll-arrow">↓</div>}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
