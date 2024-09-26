import React, { useState, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';

// Define the component first
const ReviewSummary = () => {
    // Access the flashcards state from the Redux store
    const { flashcards } = useSelector((state) => state.flashcards);

    // Local state to handle the dropdown selection (default: 'unknown')
    const [filter, setFilter] = useState('unknown');

    // Memoize filtered flashcards to avoid recalculating on every render
    const filteredFlashcards = useMemo(() => {
        return flashcards.filter(flashcard => flashcard.status === filter);
    }, [flashcards, filter]);

    // Memoize the filter change handler to prevent re-creation on each render
    const handleFilterChange = useCallback((e) => {
        setFilter(e.target.value);
    }, []);

    if (filteredFlashcards.length === 0) {
        return <div className="mt-4">No flashcards marked as {filter}.</div>;
    }

    return (
        <div className="mt-4">
            <h3>Review {filter === 'unknown' ? 'Unknown' : 'Known'} Flashcards</h3>

            {/* Dropdown to select known or unknown flashcards */}
            <div className="form-group">
                <label htmlFor="flashcard-filter">Filtered Flashcards</label>
                <select
                    id="flashcard-filter"
                    className="form-control"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <option value="unknown">Unknown</option>
                    <option value="known">Known</option>
                </select>
            </div>

            <ul className="list-group mt-3">
                {filteredFlashcards.map((flashcard, index) => (
                    <li key={index} className="list-group-item">
                        {flashcard.question} - {flashcard.answer}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(ReviewSummary);
