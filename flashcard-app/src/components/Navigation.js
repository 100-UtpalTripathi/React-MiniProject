import React from 'react';
import { useFlashcardContext } from '../context/FlashcardContext';

const Navigation = () => {
  const { state, dispatch } = useFlashcardContext();
  const { flashcards, currentIndex } = state;

  const handleNext = () => {
    dispatch({ type: 'NEXT_FLASHCARD' });
  };

  const handlePrev = () => {
    dispatch({ type: 'PREV_FLASHCARD' });
  };

  if (flashcards.length === 0) {
    return null;
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
