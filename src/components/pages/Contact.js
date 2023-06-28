import React, { useState } from 'react';
import '../../styles/Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault(); // Prevent form submission

  // Validate fields
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    setError('All fields are required');
    return;
  }

  // Validate email using regex
  const emailRegex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
  if (!emailRegex.test(email)) {
    setError('Invalid email address');
    return;
  }

  // Clear error
  setError('');

  // Prepare email data
  const subject = encodeURIComponent("I'm Contacting you for");
  const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  const mailtoLink = `mailto:gabetuason24@gmail.com?subject=${subject}&body=${emailBody}`;

  // Open default email client
  window.open(mailtoLink);

  // Reset form fields
  setName('');
  setEmail('');
  setMessage('');
};

  return (
    <section id="contact" className="contact-section">
      <h1 className="text-center mb-5">Contact Me</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Your Email address:
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="address@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            name="body"
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary glow-button">
          Send
        </button>

      <div className="contact-info">
        <p>Cell: 647-864-3488</p>
        <p>Email: gabetuason24@gmail.com</p>
      </div>
      </form>
    </section>
  );
}