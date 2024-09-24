import React from 'react';
import Flashcard from './Flashcard';
import { useFlashcardContext } from '../context/FlashcardContext';
import './FlashcardList.css';

const FlashcardList = () => {
  const { state } = useFlashcardContext();
  const { flashcards, currentIndex } = state;

  if (flashcards.length === 0) {
    return <div>No flashcards available.</div>;
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div>
      <Flashcard flashcard={currentFlashcard} />
      {/* Additional buttons for navigation and actions will go here */}
    </div>
  );
};

export default FlashcardList;
