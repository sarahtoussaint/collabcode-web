import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './TypingHeader.css'; // if you have one

function TypingHeader() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hey, we found a new way to collab.",
        "Curious? Scroll down to find out.",
        "Collaborate in Real Time.",
        "More collab, less chaos. (Hopefully)",
        "Build. Chat. Create." 
      ],
      typeSpeed: 60,   // Slower typing speed
      backSpeed: 40,   // Slower backspacing
      startDelay: 500, // Delay before typing starts
      backDelay: 1500, // Pause before deleting
      loop: true,
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing-header">
      <h1><span ref={typedRef}></span></h1>
    </div>
  );
}

export default TypingHeader;
