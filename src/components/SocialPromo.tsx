import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

interface SocialPromoProps {
  isVisible: boolean;
  onClose: () => void;
}

export const SocialPromo: React.FC<SocialPromoProps> = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-4 right-4 bg-white rounded-lg p-6 shadow-xl z-50"
        >
          <h3 className="text-xl font-bold mb-4 text-black">Follow the Developer! 🚀</h3>

          
          <div className="flex gap-4">
            <a
              href="https://instagram.com/epidoey"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-pink-600 hover:text-pink-700"
            >
              <Instagram /> @epidoey
            </a>
            <a
              href="https://linkedin.com/in/evid-wijaya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <Linkedin /> Evid Wijaya
            </a>
          </div>
          <button
            onClick={onClose}
            className="mt-4 text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};