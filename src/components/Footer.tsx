import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="py-6 text-center bg-gray-800">
    <p className="mb-4">© Eugene Wijaya 2024</p>
    <div className="flex justify-center gap-4">
      <a
        href="https://instagram.com/epidoey"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-400 hover:text-pink-300"
      >
        <Instagram size={24} />
      </a>
      <a
        href="https://linkedin.com/in/evid-wijaya"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:enwcorp@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-gray-200"
      >
        <Mail size={24} />
      </a>
    </div>
  </footer>
);
