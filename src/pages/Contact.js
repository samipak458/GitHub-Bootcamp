import React, { useState } from 'react';

// Contact page with a simple form
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {submitted ? (
        <div className="card">
          <h3>Thank you for contacting us!</h3>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form className="card" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button className="btn" type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
