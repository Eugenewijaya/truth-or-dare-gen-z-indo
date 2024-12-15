import React from 'react';
import { motion } from 'framer-motion';

interface StartButtonProps {
  onClick: () => void;
}

export const StartButton: React.FC<StartButtonProps> = ({ onClick }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    onClick={onClick}
    className="block mx-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-2xl font-bold shadow-lg"
  >
    Gas Mulai Gamenya!
  </motion.button>
);