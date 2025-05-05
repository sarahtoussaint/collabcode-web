import React, { useState } from 'react';
import '../Cards.css'; // Make sure this CSS file has modal styles
import CardItem from '../CardItem';

function AboutFeatures() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <video width="800" height="450" controls autoPlay>
            <source src="/assets/working Collab.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>
      </div>
    );
  };

  return (
    <div className="cards">
      <h1>Learn more about CollabCode</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              emoji="💬"
              text="Instant messaging directly in your workspace."
              label="Real-Time Chat"
              onClick={openModal}
            />
            <CardItem
              emoji="🤝"
              text="Code together with live editing and shared cursors."
              label="Live Collaboration"
              onClick={openModal}
            />
            <CardItem
              emoji="📝"
              text="Manage your teams effortlessly with organized spaces."
              label="Team Spaces"
              onClick={openModal}
            />
          </ul>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default AboutFeatures;
