import React from 'react';
import { FlashcardProvider } from './context/FlashcardContext';
import FlashcardForm from './components/FlashcardForm';
import FlashcardList from './components/FlashcardList';
import Navigation from './components/Navigation';
import ReviewSummary from './components/ReviewSummary';

const App = () => {
  return (
    <FlashcardProvider>
      <div className="container mt-4">
        <h1>Flashcard App</h1>
        <FlashcardForm />
        <FlashcardList />
        <Navigation />
        <ReviewSummary />
      </div>
    </FlashcardProvider>
  );
};

export default App;
