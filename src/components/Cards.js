import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Learn more about CollabCode</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              emoji="👩🏾‍💻👨🏻‍💻"
              text="See what CollabCode has to offer."
              label="About Us"
              path="/about"
            />
            <CardItem
              emoji="👋"
              text="Meet the team behind CollabCode."
              label="Our Team"
              path="/team"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

