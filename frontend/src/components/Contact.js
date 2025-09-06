import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  // State to hold the form data (name, email, message)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // State to provide feedback to the user (e.g., "Sending...", "Message sent!")
  const [statusMessage, setStatusMessage] = useState('');

  // Update state whenever an input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    try {
      // Send a POST request to the backend API endpoint
      // FOR LOCAL DEVELOPMENT: 'http://localhost:5000/api/contact'
      // FOR DEPLOYMENT: 'https://your-render-backend-url.onrender.com/api/contact'
      const response = await axios.post('https://mern-portfolio-geff.onrender.com', formData);

      // Update status message with success response
      setStatusMessage(response.data.message);
      
      // Clear the form fields
      setFormData({ name: '', email: '', message: '' });

      // Optional: Hide the message after a few seconds
      setTimeout(() => setStatusMessage(''), 5000);

    } catch (error) {
      // If there's an error, show an error message
      const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
      setStatusMessage(errorMessage);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  return (
    <section id="contact">
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
        <a href="mailto:samuelprasadadari@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/adarisamuelprasad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
        <a href="tel:+919515237789" aria-label="Phone"><i className="fas fa-phone"></i></a>
      </div>
    </section>
  );
};

export default Contact;
