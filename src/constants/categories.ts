import { Category } from '../types/game';

export const categoryColors: Record<Category, string> = {
  friendship: '#FF6B6B',
  couples: '#FF85A1',
  careers: '#4ECDC4',
  teenagers: '#45B7D1',
  deeptalk: '#7B68EE',
  'self-development': '#A020F0',
  mix: '#FFB347'
};

export const categoryEmojis: Record<Category, string> = {
  friendship: '👥',
  couples: '💑',
  careers: '💼',
  teenagers: '🎭',
  deeptalk: '🤔',
  'self-development': '🌱',
  mix: '🎲'
};