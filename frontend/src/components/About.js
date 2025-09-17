import React, { useState, useEffect, useCallback } from 'react';

// This array is now a constant outside the component.
const toRotate = [ "MERN Stack Developer", "AI & ML Enthusiast", "Software Developer" ];
// EDITED: Reduced the pause time after a word is typed.
const period = 1000; // Was 2000ms

const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // EDITED: Reduced the initial typing speed for a faster effect.
  const [delta, setDelta] = useState(150 - Math.random() * 100); // Was 300

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
      setDelta(80); 
    }
  }, [isDeleting, loopNum, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, tick]);

  return (
    <section id="about" className="hero-section fade-in">
      <div className="hero-text">
        <h1>Hi, I'm Adari Samuel Prasad</h1>
        <p className="typing-text">{text}<span className="cursor"></span></p>
        <p className="hero-subtitle">
            B.Tech student specializing in Artificial Intelligence & Machine Learning, with a strong passion for creating innovative solutions and deploying scalable full-stack web applications.
        </p>

      </div>
      <div className="hero-image">
        <img 
          src="/profile.jpg" 
          alt="Adari Samuel Prasad"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/2d2945/ff79c6?text=ASP'; }}
        />
      </div>
    </section>
  );
};

export default About;

