import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Smart Traffic Control</h3>
          <p>A deep learning project to automate traffic signals using the YOLO algorithm for real-time vehicle detection. The user interface was built with Python's Tkinter library.</p>
        </div>
        <div className="project-card">
          <h3>Sign Language Translator</h3>
          <p>An AI-powered computer vision tool to convert sign language gestures into speech in real-time, aimed at supporting the deaf-mute community.</p>
        </div>
        <div className="project-card">
          <h3>Weather Web App</h3>
          <p>A responsive front-end application built with React that connects to the OpenWeather API to display live weather conditions for any city.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
