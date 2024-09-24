import React from 'react';
import Flashcard from './Flashcard';
import { useFlashcardContext } from '../context/FlashcardContext';
import './FlashcardList.css';

const FlashcardList = () => {
  const { state, dispatch } = useFlashcardContext();
  const { flashcards, currentIndex } = state;

  if (flashcards.length === 0) {
    return <div>No flashcards available.</div>;
  }

  const currentFlashcard = flashcards[currentIndex];

  const handleMarkKnown = () => {
    dispatch({ type: 'MARK_KNOWN' });
  };

  const handleMarkUnknown = () => {
    dispatch({ type: 'MARK_UNKNOWN' });
  };

  return (
    <div>
      <Flashcard flashcard={currentFlashcard} />
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
