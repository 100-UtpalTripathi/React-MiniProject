import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addFlashcard } from '../redux/flashcardSlice'; // Adjust the import path as necessary
import './FlashcardForm.css';

const FlashcardForm = () => {
  console.log("FlashcardForm");

  const dispatch = useDispatch();

  // Local state for the flashcard question and answer
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  // Memoize handleAddFlashcard to prevent re-creation on every render
  const handleAddFlashcard = useCallback(() => {
    if (question && answer) {
      const newFlashcard = { question, answer, status: null }; // No status initially
      dispatch(addFlashcard(newFlashcard)); // Dispatch the action to add a new flashcard
      setQuestion(''); // Clear inputs
      setAnswer('');
    }
  }, [question, answer, dispatch]); // Only re-create if question or answer or dispatch changes

  return (
    <div className="flashcard-form mt-4">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddFlashcard}>
        Add New Flashcard
      </button>
    </div>
  );
};

export default React.memo(FlashcardForm);
