import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  // Use env variables for keys:
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      sent_at: new Date().toLocaleString()
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });
        toast.success("Got it! Thanks for reaching out. I'll be in touch shortly!");
      })
      .catch((error) => {
        setIsSending(false);
        console.error('EmailJS error:', error);
        toast.error("❌ Oops! Couldn't send. Try again later.");
      });
  };

  return (
    <section id="contact">
      <div className="section-title-container">
        <h2 data-aos="zoom-in">Contact Me</h2>
      </div>

      <form id="contactForm" onSubmit={handleSubmit} data-aos="fade-up">
        <label htmlFor="name">Name</label>
        <input name="name" id="name" type="text" placeholder="Your Name" required value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input name="email" id="email" type="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6" placeholder="Your Message" required value={formData.message} onChange={handleChange} />

        <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
      </form>
    </section>
  );
};

export default Contact;