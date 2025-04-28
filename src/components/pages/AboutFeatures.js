import React, { useState } from 'react';
import '../Cards.css'; // reuse existing styles
import CardItem from '../CardItem';

function AboutFeatures() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo('');
  };

  // ✨ Modal component inside AboutFeatures
  const Modal = ({ videoSrc, isOpen, onClose }) => {
    if (!isOpen) return null;

    const isYouTubeLink = videoSrc.includes('youtube.com') || videoSrc.includes('youtu.be');

    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {isYouTubeLink ? (
            <iframe
              width="800"
              height="450"
              src={videoSrc.replace('watch?v=', 'embed/')} // embed YouTube videos properly
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video width="800" height="450" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
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
              src="/images/chat-feature.jpg"
              text="Instant messaging directly in your workspace."
              label="Real-Time Chat"
              onClick={() => openModal('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
            />
            <CardItem
              src="/images/collab-feature.jpg"
              text="Code together with live editing and shared cursors."
              label="Live Collaboration"
              onClick={() => openModal('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
            />
            <CardItem
              src="/images/team-feature.jpg"
              text="Manage your teams effortlessly with organized spaces."
              label="Team Spaces"
              onClick={() => openModal('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}
            />
          </ul>
        </div>
      </div>

      {/* Render Modal at the bottom */}
      <Modal videoSrc={selectedVideo} isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default AboutFeatures;
