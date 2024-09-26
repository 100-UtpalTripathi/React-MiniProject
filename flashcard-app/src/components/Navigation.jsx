import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    nextFlashcard,
    prevFlashcard
} from '../redux/flashcardSlice.js'; // Adjust the path to your slice

const Navigation = () => {
    const dispatch = useDispatch();
    const { flashcards } = useSelector((state) => state.flashcards); // Access flashcards state

    const handleNext = () => {
        dispatch(nextFlashcard()); // Dispatch action to go to the next flashcard
    };

    const handlePrev = () => {
        dispatch(prevFlashcard()); // Dispatch action to go to the previous flashcard
    };

    if (flashcards.length === 0) {
        return null; // Return null if there are no flashcards
    }

    return (
        <div className="mt-3">
            <button className="btn btn-primary mr-2" onClick={handlePrev} disabled={flashcards.length === 0}>
                Previous
            </button>
            <button className="btn btn-primary" onClick={handleNext} disabled={flashcards.length === 0}>
                Next
            </button>
        </div>
    );
};

export default Navigation;
