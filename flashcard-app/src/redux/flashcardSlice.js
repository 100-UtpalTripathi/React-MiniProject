// flashcardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    flashcards: JSON.parse(localStorage.getItem('flashcards')) || [],
    currentIndex: 0,
    knownCount: 0,
    unknownCount: 0,
};

const flashcardSlice = createSlice({
    name: 'flashcards',
    initialState,
    reducers: {
        addFlashcard(state, action) {
            const updatedFlashcards = [...state.flashcards, action.payload];
            localStorage.setItem('flashcards', JSON.stringify(updatedFlashcards));
            state.flashcards = updatedFlashcards;
        },
        editFlashcard(state, action) {
            const editedFlashcards = state.flashcards.map((flashcard, index) =>
                index === action.payload.index ? action.payload.card : flashcard
            );
            localStorage.setItem('flashcards', JSON.stringify(editedFlashcards));
            state.flashcards = editedFlashcards;
        },
        deleteFlashcard(state, action) {
            const filteredFlashcards = state.flashcards.filter((_, index) => index !== action.payload);
            localStorage.setItem('flashcards', JSON.stringify(filteredFlashcards));
            state.flashcards = filteredFlashcards;
            state.currentIndex = 0;
        },
        shuffleFlashcards(state) {
            const shuffledFlashcards = [...state.flashcards].sort(() => Math.random() - 0.5);
            localStorage.setItem('flashcards', JSON.stringify(shuffledFlashcards));
            state.flashcards = shuffledFlashcards;
        },
        markKnown(state) {
            state.flashcards[state.currentIndex].status = 'known';
            localStorage.setItem('flashcards', JSON.stringify(state.flashcards));
            state.knownCount += 1;
            state.currentIndex = (state.currentIndex + 1) % state.flashcards.length;
        },
        markUnknown(state) {
            state.flashcards[state.currentIndex].status = 'unknown';
            localStorage.setItem('flashcards', JSON.stringify(state.flashcards));
            state.unknownCount += 1;
            state.currentIndex = (state.currentIndex + 1) % state.flashcards.length;
        },
        nextFlashcard(state) {
            state.currentIndex = (state.currentIndex + 1) % state.flashcards.length;
        },
        prevFlashcard(state) {
            state.currentIndex = (state.currentIndex - 1 + state.flashcards.length) % state.flashcards.length;
        },
    },
});

// Export actions for use in components
export const {
    addFlashcard,
    editFlashcard,
    deleteFlashcard,
    shuffleFlashcards,
    markKnown,
    markUnknown,
    nextFlashcard,
    prevFlashcard,
} = flashcardSlice.actions;

// Export the reducer to be used in the store
export default flashcardSlice.reducer;
