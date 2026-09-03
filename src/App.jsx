
import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import Developer from './component/Developer';
import About from './component/About';
import Projects from './component/Project';
import Skills from './component/Skill';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Toggle dark mode class on body
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Scroll listener for section highlighting
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)} 
        activeSection={activeSection}
      />
      <main>
        <Developer />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;