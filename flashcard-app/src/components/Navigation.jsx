import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextFlashcard, prevFlashcard } from '../redux/flashcardSlice.js'; // Adjust the path to your slice

// Define the Navigation component
const Navigation = () => {
    const dispatch = useDispatch();
    const { flashcards } = useSelector((state) => state.flashcards); // Access flashcards state

    // Memoize handleNext to avoid recreation on every render
    const handleNext = useCallback(() => {
        dispatch(nextFlashcard());
    }, [dispatch]);

    // Memoize handlePrev to avoid recreation on every render
    const handlePrev = useCallback(() => {
        dispatch(prevFlashcard());
    }, [dispatch]);

    // Return null if there are no flashcards
    if (flashcards.length === 0) {
        return null;
    }

    return (
        <div className="mt-3">
            <button className="btn btn-primary mr-2" onClick={handlePrev}>
                Previous
            </button>
            <button className="btn btn-primary" onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default React.memo(Navigation);
