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
    <div className="container mt-2 justify-content-center">
      <h1>Flashcard App</h1>
      <p className="text-center">
        This app is basically your digital cram session—perfect for memorizing and 
        "mugging up" those tricky terminologies like a pro! 🧠💡
      </p>
      <FlashcardForm />
      <FlashcardList />
      <Navigation />
      <ReviewSummary />
    </div>
  </FlashcardProvider>
  );
};

export default App;
