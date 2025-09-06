import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Helper function to encode form data for Netlify
  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  // 3. Updated handleSubmit function for Netlify AJAX forms
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
        setStatusMessage("An error occurred. Please try again.");
        console.error("Form submission error:", error);
    });
  };

  return (
    <section id="contact" className="fade-in">
      <h2>Contact Me</h2>
      {/* 1. Add Netlify attributes to the form tag */}
      <form 
        id="contactForm" 
        name="contact" 
        method="POST" 
        data-netlify="true" 
        onSubmit={handleSubmit}
      >
        {/* This hidden input is required by Netlify for AJAX submissions */}
        <input type="hidden" name="form-name" value="contact" />
        
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