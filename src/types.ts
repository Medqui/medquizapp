export interface Flashcard {
  id: string;
  front: string;
  back: string;
  lastReviewed?: Date;
  confidence: 'low' | 'medium' | 'high';
}

export interface DeckStats {
  total: number;
  mastered: number;
  needsReview: number;
}