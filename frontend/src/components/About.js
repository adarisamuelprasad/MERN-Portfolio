import React, { useState, useEffect, useCallback } from 'react';

// This is the new Hero-style "About Me" section
const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  
  // Wrapped this in useCallback to prevent it from being recreated on every render
  const toRotate = useCallback([ "MERN Stack Developer", "AI & ML Enthusiast", "Software Developer" ], []);
  const period = 2000;

  // Wrapped the tick function in useCallback as it's a dependency of useEffect
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]); // Added 'delta' and 'tick' to the dependency array

  return (
    // The "about" section now has a new class for styling
    <section id="about" className="hero-section fade-in">
      <div className="hero-text">
        <h1>Hi, I'm Adari Samuel Prasad</h1>
        {/* This is where the dynamic typing animation will appear */}
        <p className="typing-text">{text}<span className="cursor"></span></p>
        <p className="hero-subtitle">
          A 2nd-year B.Tech student specializing in AI & Machine Learning with a hands-on passion for building and deploying full-stack web applications.
        </p>
      </div>
      <div className="hero-image">
        {/* THIS IS THE CORRECTED IMAGE PATH FOR A .PNG FILE */}
        <img 
          src="%PUBLIC_URL%/profile.png" 
          alt="Adari Samuel Prasad"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/2d2945/ff79c6?text=ASP'; }}
        />
      </div>
    </section>
  );
};

export default About;
