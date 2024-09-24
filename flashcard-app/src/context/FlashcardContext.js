import React, { createContext, useReducer, useEffect } from 'react';


// defining the initial state for the session
const initialState = {
    flashcards: JSON.parse(localStorage.getItem('flashcards')) || [],
    currentIndex: 0,
    knownCount: 0,
    unknownCount: 0,
};

// defining the reducer function
const flashcardReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_FLASHCARD':
        const updatedFlashcards = [...state.flashcards, action.payload];
        localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards));
        return { ...state, flashcards: updatedFlashcards };
        
      case 'EDIT_FLASHCARD':
        const editedFlashcards = state.flashcards.map((flashcard, index) =>
          index === action.payload.index ? action.payload.card : flashcard
        );
        localStorage.setItem('flashcards', JSON.stringify(editedFlashcards));
        return { ...state, flashcards: editedFlashcards };
        
      case 'DELETE_FLASHCARD':
        const filteredFlashcards = state.flashcards.filter((_, index) => index !== action.payload);
        localStorage.setItem('flashcards', JSON.stringify(filteredFlashcards));
        return { ...state, flashcards: filteredFlashcards, currentIndex: 0 };
        
      case 'SHUFFLE_FLASHCARDS':
        const shuffledFlashcards = [...state.flashcards].sort(() => Math.random() - 0.5);
        localStorage.setItem('flashcards', JSON.stringify(shuffledFlashcards));
        return { ...state, flashcards: shuffledFlashcards };
        
      case 'MARK_KNOWN':
        const updatedFlashcardsKnown = state.flashcards.map((flashcard, index) =>
          index === state.currentIndex ? { ...flashcard, status: 'known' } : flashcard
        );
        localStorage.setItem('flashcards', JSON.stringify(updatedFlashcardsKnown));
        return {
          ...state,
          knownCount: state.knownCount + 1,
          flashcards: updatedFlashcardsKnown,
          currentIndex: (state.currentIndex + 1) % state.flashcards.length,
        };
        
      case 'MARK_UNKNOWN':
        const updatedFlashcardsUnknown = state.flashcards.map((flashcard, index) =>
          index === state.currentIndex ? { ...flashcard, status: 'unknown' } : flashcard
        );
        localStorage.setItem('flashcards', JSON.stringify(updatedFlashcardsUnknown));
        return {
          ...state,
          unknownCount: state.unknownCount + 1,
          flashcards: updatedFlashcardsUnknown,
          currentIndex: (state.currentIndex + 1) % state.flashcards.length,
        };
        
      case 'NEXT_FLASHCARD':
        return { ...state, currentIndex: (state.currentIndex + 1) % state.flashcards.length };
        
      case 'PREV_FLASHCARD':
        return { 
          ...state, 
          currentIndex: (state.currentIndex - 1 + state.flashcards.length) % state.flashcards.length 
        };
        
      default:
        return state;
    }
  };

export const FlashcardContext = createContext();

export const FlashcardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(flashcardReducer, initialState);

  return (
    <FlashcardContext.Provider value={{ state, dispatch }}>
      {children}
    </FlashcardContext.Provider>
  );
};

// Custom hook for easier access to the context
export const useFlashcardContext = () => {
  return React.useContext(FlashcardContext);
};



  
  
