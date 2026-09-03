// src/components/Footer.js
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="mt-2">Creating beautiful digital experiences</p>
          </div>
          
          <div className="flex space-x-6">
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;