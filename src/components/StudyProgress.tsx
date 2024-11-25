import React from 'react';
import { Brain, Trophy, RefreshCw } from 'lucide-react';
import type { DeckStats } from '../types';

export default function StudyProgress({ stats }: { stats: DeckStats }) {
  const progress = (stats.mastered / stats.total) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Study Progress</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-sm text-gray-600">Mastered: {stats.mastered}</span>
        </div>
        <div className="flex items-center gap-2">
          <Brain className="w-5 h-5 text-blue-500" />
          <span className="text-sm text-gray-600">Total Cards: {stats.total}</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-red-500" />
          <span className="text-sm text-gray-600">Need Review: {stats.needsReview}</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-green-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}