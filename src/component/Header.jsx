// src/components/Header.js
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      {/* <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          My Portfolio
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300'
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700">
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;