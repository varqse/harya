import React from 'react';
import './Gallery.css';

const images = Array.from({ length: 48 }, (_, index) => 
  require(`../assets/MotionAndEmotion/MotionAndEmotion (${index + 1}).jpg`)
);

const MotionAndEmotion = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Motion and Emotion</h1>
      <div className="grid-gallery">
        {images.map((src, index) => (
          <a key={index} className="grid-gallery__item" href={src} target="_blank" rel="noopener noreferrer">
            <img className="grid-gallery__image" src={src} alt={`Gallery item ${index + 1}`} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MotionAndEmotion;
