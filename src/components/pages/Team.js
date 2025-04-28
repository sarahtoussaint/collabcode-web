import React from 'react';
import './Team.css';


function Team() {
  const teamMembers = [
    {
      name: 'Sarah Toussaint',
      role: 'Sophomore, Computer Science and Business',
      image: '/assets/sarah.jpg', 
    },
    /*{
      name: 'Lily',
      role: 'add',
      image: '/images/lily.jpg',
    },
    {
      name: 'Lorrie',
      role: 'add',
      image: '/images/lorrie.jpg',
    },
    */
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
