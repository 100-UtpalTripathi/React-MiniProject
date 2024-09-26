import React, { useState, useCallback } from 'react';
import Flashcard from './Flashcard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { markKnown, markUnknown } from '../redux/flashcardSlice.js'; 
import './FlashcardList.css';

const FlashcardList = () => {
    const dispatch = useDispatch();
    const { flashcards, currentIndex } = useSelector((state) => state.flashcards);
    const [flippedIndex, setFlippedIndex] = useState(null); // Tracking flashcard flipped

    if (flashcards.length === 0) {
        return <div>No flashcards available.</div>;
    }

    const currentFlashcard = flashcards[currentIndex];

    // Memoizing event handlers to avoid re-creation on each render
    const handleMarkKnown = useCallback(() => {
        dispatch(markKnown());
    }, [dispatch]);

    const handleMarkUnknown = useCallback(() => {
        dispatch(markUnknown());
    }, [dispatch]);

    const handleFlip = useCallback(() => {
        setFlippedIndex(flippedIndex === currentIndex ? null : currentIndex); // Flip the current flashcard
    }, [flippedIndex, currentIndex]);

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
