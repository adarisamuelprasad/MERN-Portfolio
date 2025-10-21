import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Toast for contact notifications
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Optional: AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // Theme default from localStorage
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    // Apply theme class to body
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme === 'light' ? 'light' : 'dark');
    localStorage.setItem('theme', theme);

    // Initialize AOS
    AOS.init({ duration: 900, once: true, offset: 120 });
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
