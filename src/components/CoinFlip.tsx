import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CoinFlipProps {
  isFlipping: boolean;
  result: 'truth' | 'dare' | null;
  onAnimationComplete: () => void;
}

export const CoinFlip: React.FC<CoinFlipProps> = ({ isFlipping, result, onAnimationComplete }) => {
  return (
    <AnimatePresence>
      {isFlipping && (
        <motion.div
          className="relative w-40 h-40"
          animate={{
            rotateY: [0, 1800],
            rotateX: [0, 1800],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          onAnimationComplete={onAnimationComplete}
        >
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            {result === 'truth' ? 'TRUTH' : 'DARE'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};