import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gallery</h1>
      <ul>
        <li><Link to="/gallery/Makroholic">Makroholic</Link></li>
        <li><Link to="/gallery/MotionAndEmotion">Motion And Emotion</Link></li>
        <li><Link to="/gallery/UltimateDrivingMachine">Ultimate Driving Machine</Link></li>
      </ul>
    </div>
  );
};

export default Gallery;
