import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../types/game';
import { categoryColors, categoryEmojis } from '../constants/categories';

interface CategoryGridProps {
  onSelect: (category: Category) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelect }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {Object.entries(categoryEmojis).map(([cat, emoji]) => (
      <motion.button
        key={cat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect(cat as Category)}
        className="p-6 rounded-lg text-center"
        style={{ backgroundColor: categoryColors[cat as Category] }}
      >
        <span className="text-4xl mb-2">{emoji}</span>
        <p className="text-xl capitalize">{cat}</p>
      </motion.button>
    ))}
  </div>
);