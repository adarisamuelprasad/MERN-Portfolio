import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Sending...');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => {
        setIsSending(false);
        setStatusMessage("✅ Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
    })
    .catch(error => {
        setIsSending(false);
        setStatusMessage("❌ An error occurred. Please try again.");
        console.error("Form submission error:", error);
    });
  };

  return (
    <section id="contact" className="fade-in">
      <div className="section-title-container">
          <h2>Contact Me</h2>
      </div>

      {/* This is a standard React form with an onSubmit handler. */}
      <form id="contactForm" name="contact" onSubmit={handleSubmit}>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {statusMessage && (
        <p style={{ marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>
          {statusMessage}
        </p>
      )}

      <div className="socials">
        <a href="mailto:samuelprasadadari@gmail.com"><i className="fas fa-envelope"></i></a>
        <a href="https://www.linkedin.com/in/adarisamuelprasad" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="tel:+919515237789"><i className="fas fa-phone"></i></a>
      </div>
    </section>
  );
};

export default Contact;