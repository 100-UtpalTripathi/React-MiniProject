import React, { useState } from 'react';
import Flashcard from './Flashcard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
    markKnown,
    markUnknown
} from '../redux/flashcardSlice.js'; 
import './FlashcardList.css';

const FlashcardList = () => {
    const dispatch = useDispatch();
    const { flashcards, currentIndex } = useSelector((state) => state.flashcards);
    const [flippedIndex, setFlippedIndex] = useState(null); // Tracking flashcard flipped

    if (flashcards.length === 0) {
        return <div>No flashcards available.</div>;
    }

    const currentFlashcard = flashcards[currentIndex];

    const handleMarkKnown = () => {
        dispatch(markKnown());
    };

    const handleMarkUnknown = () => {
        dispatch(markUnknown());
    };

    const handleFlip = () => {
        setFlippedIndex(flippedIndex === currentIndex ? null : currentIndex); // Flip the current flashcard
    };

    return (
        <div>
            <Flashcard 
                flashcard={currentFlashcard} 
                isFlipped={flippedIndex === currentIndex} 
                onFlip={handleFlip} 
            />
            <div className="mt-2">
                <button className="btn btn-success mr-2" onClick={handleMarkKnown}>
                    Known
                </button>
                <button className="btn btn-danger" onClick={handleMarkUnknown}>
                    Unknown
                </button>
            </div>
        </div>
    );
};

export default FlashcardList;
