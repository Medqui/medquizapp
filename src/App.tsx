import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import FlashCard from './components/FlashCard';
import StudyProgress from './components/StudyProgress';
import { initialFlashcards } from './data/flashcards';
import type { Flashcard, DeckStats } from './types';

function App() {
  const [flashcards, setFlashcards] = useState<Flashcard[]>(initialFlashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [stats, setStats] = useState<DeckStats>({
    total: initialFlashcards.length,
    mastered: 0,
    needsReview: initialFlashcards.length
  });

  const updateConfidence = (id: string, confidence: 'low' | 'medium' | 'high') => {
    setFlashcards(cards =>
      cards.map(card =>
        card.id === id
          ? { ...card, confidence, lastReviewed: new Date() }
          : card
      )
    );
  };

  useEffect(() => {
    const mastered = flashcards.filter(card => card.confidence === 'high').length;
    const needsReview = flashcards.filter(card => card.confidence !== 'high').length;
    setStats({
      total: flashcards.length,
      mastered,
      needsReview
    });
  }, [flashcards]);

  const nextCard = () => {
    setCurrentCardIndex(current =>
      current === flashcards.length - 1 ? 0 : current + 1
    );
  };

  const handleConfidenceUpdate = (id: string, confidence: 'low' | 'medium' | 'high') => {
    updateConfidence(id, confidence);
    setTimeout(nextCard, 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center mb-8">
          <GraduationCap className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">FlashMaster</h1>
        </div>

        <StudyProgress stats={stats} />

        <div className="flex flex-col items-center justify-center gap-8">
          <FlashCard
            card={flashcards[currentCardIndex]}
            onConfidenceUpdate={handleConfidenceUpdate}
          />

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentCardIndex(i => (i > 0 ? i - 1 : flashcards.length - 1))}
              className="px-6 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentCardIndex(i => (i < flashcards.length - 1 ? i + 1 : 0))}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;