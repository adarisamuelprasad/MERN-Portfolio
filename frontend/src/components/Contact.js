import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');
    try {
      // THIS IS THE FINAL FIX: Added the correct '/api/contact' endpoint
      const response = await axios.post('https://mern-portfolio-geff.onrender.com/api/contact', formData);
      setStatusMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      setStatusMessage('An error occurred. Please try again.');
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Contact Me</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      {statusMessage && <p style={{ marginTop: '15px', textAlign: 'center' }}>{statusMessage}</p>}
      <div className="socials">
        <a href="mailto:samuelprasadadari@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/adarisamuelprasad" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="tel:+919515237789"><i className="fas fa-phone"></i></a>
      </div>
    </section>
  );
};

export default Contact;

