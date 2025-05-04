import React from 'react';
import './Team.css';


function Team() {
  const teamMembers = [
    {
      name: 'Sarah Toussaint',
      role: 'Sophomore, Computer Science and Business',
      image: '/assets/sarah3.png', 
    },
    { 
      name: 'Lorrie',
      role: 'Junior, Computer Science, Minor in Data Science',
      image: '/assets/lorrie3.png',
    },
    {
      name: 'Lily',
      role: 'Junior, Computer Science, Minoring in Math and Game Design',
      image: '/assets/lily.png',
    },
    
  ];

  return (
    <div className="team-container">
      <h1>Meet the Team</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
