import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categoryColors } from '../constants/categories';

interface CardProps {
  question: string;
  isOpen: boolean;
  onClose: () => void;
  category: string;
  type: 'truth' | 'dare';
}

export const Card: React.FC<CardProps> = ({ question, isOpen, onClose, category, type }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <motion.div
            className={`bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl`}
            style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{type.toUpperCase()}</h3>
              <p className="text-xl mb-6">{question}</p>
              <button
                onClick={onClose}
                className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};