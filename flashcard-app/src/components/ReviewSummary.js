import React from 'react';
import { useFlashcardContext } from '../context/FlashcardContext';

const ReviewSummary = () => {
  const { state } = useFlashcardContext();
  const { flashcards } = state;

  const unknownFlashcards = flashcards.filter(flashcard => flashcard.status === 'unknown');

  if (unknownFlashcards.length === 0) {
    return <div className="mt-4">No flashcards marked as unknown.</div>;
  }

  return (
    <div className="mt-4">
      <h3>Review Unknown Flashcards</h3>
      <ul className="list-group">
        {unknownFlashcards.map((flashcard, index) => (
          <li key={index} className="list-group-item">
            {flashcard.question} - {flashcard.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSummary;
