import React, { useState } from 'react';
import { RotateCw } from 'lucide-react';
import type { Flashcard } from '../types';

interface FlashCardProps {
  card: Flashcard;
  onConfidenceUpdate: (id: string, confidence: 'low' | 'medium' | 'high') => void;
}

export default function FlashCard({ card, onConfidenceUpdate }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-2xl perspective-1000">
      <div
        className={`relative w-full h-80 cursor-pointer transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500">Front</span>
              <RotateCw className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-2xl font-medium text-gray-800">{card.front}</p>
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full bg-white rounded-xl shadow-lg p-8 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500">Back</span>
              <RotateCw className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-2xl font-medium text-gray-800">{card.back}</p>
              </div>
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onConfidenceUpdate(card.id, 'low');
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200"
                >
                  Need Practice
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onConfidenceUpdate(card.id, 'medium');
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                >
                  Almost There
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onConfidenceUpdate(card.id, 'high');
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 hover:bg-green-200"
                >
                  Got It!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}