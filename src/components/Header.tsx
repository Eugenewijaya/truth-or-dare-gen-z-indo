import React from 'react';
import { motion } from 'framer-motion';

export const Header: React.FC = () => (
  <header className="py-8 text-center">
    <motion.h1
      animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
    >
      Truth or Dare: Gen Z Edition
    </motion.h1>
    <section className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center text-red-500">DISCLAIMER!</h2>
      <div className="text-sm text-gray-700">
        <p className="mb-4 text-center font-semibold text-blue-600">
          Game ini untuk umur <strong>15+</strong> & Min. 2 Pemain!
        </p>
      </div>
    </section>
  </header>
);
