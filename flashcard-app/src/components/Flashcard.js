import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card text-center mb-4" onClick={handleFlip} style={{ cursor: 'pointer' }}>
      <div className={`card-body ${flipped ? 'bg-secondary text-white' : 'bg-dark text-white'}`}>
        <h5 className="card-title">{flipped ? flashcard.answer : flashcard.question}</h5>
      </div>
      <div className="card-footer">
        <small className="text-muted">{flipped ? "Click to see question" : "Click to see answer"}</small>
      </div>
    </div>
  );
};

export default Flashcard;
