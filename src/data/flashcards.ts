import type { Flashcard } from '../types';

export const initialFlashcards: Flashcard[] = [
  {
    id: '1',
    front: 'What is React?',
    back: 'A JavaScript library for building user interfaces',
    confidence: 'low'
  },
  {
    id: '2',
    front: 'What is JSX?',
    back: 'A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript',
    confidence: 'low'
  },
  {
    id: '3',
    front: 'What is a Component?',
    back: 'A reusable piece of UI that can contain its own content, logic, and styling',
    confidence: 'low'
  },
  {
    id: '4',
    front: 'What are Props?',
    back: 'Properties passed to components to configure their behavior and appearance',
    confidence: 'low'
  },
  {
    id: '5',
    front: 'What is State?',
    back: 'Internal data storage that determines a component\'s behavior and rendering',
    confidence: 'low'
  }
];