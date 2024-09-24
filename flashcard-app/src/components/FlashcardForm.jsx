import React, { useState } from 'react';
import { useFlashcardContext , useFlashcardContextDispatcher} from '../context/FlashcardContext.jsx';
import './FlashcardForm.css';

const FlashcardForm = () => {
  console.log("FlashcardForm");
  const { dispatch } = useFlashcardContextDispatcher();
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddFlashcard = () => {
    if (question && answer) {
      const newFlashcard = { question, answer, status: null }; // No status initially
      dispatch({ type: 'ADD_FLASHCARD', payload: newFlashcard });
      setQuestion(''); // Clear inputs
      setAnswer('');
    }
  };

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
