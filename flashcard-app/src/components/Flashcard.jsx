import React from 'react';
import { useDispatch } from 'react-redux';
import './Flashcard.css';

const Flashcard = ({ flashcard, isFlipped, onFlip }) => {
    const dispatch = useDispatch();

    const handleFlip = () => {
    
        onFlip(); 
    };

    return (
        <div
            className={`card text-center mb-4 ${isFlipped ? 'flipped' : ''}`}
            onClick={handleFlip}
            style={{ cursor: 'pointer' }}
        >
            <div className={`card-body ${isFlipped ? 'bg-secondary text-white' : 'bg-dark text-white'}`}>
                <h5 className="card-title">{isFlipped ? flashcard.answer : flashcard.question}</h5>
            </div>
            <div className="card-footer">
                <small className="text-muted">{isFlipped ? "Click to see question" : "Click to see answer"}</small>
            </div>
        </div>
    );
};

export default Flashcard;
