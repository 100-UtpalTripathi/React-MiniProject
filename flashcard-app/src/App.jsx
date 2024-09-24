import React from 'react';
import { FlashcardProvider } from './context/FlashcardContext.jsx';
import FlashcardForm from './components/FlashcardForm.jsx';
import FlashcardList from './components/FlashcardList.jsx';
import Navigation from './components/Navigation.jsx';
import ReviewSummary from './components/ReviewSummary.jsx';
import './App.css';

const App = () => {
  return (
    <FlashcardProvider>
      <div className="container mt-2">
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
