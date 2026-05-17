import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const lastSent = localStorage.getItem('last_message_sent');
    const now = Date.now();
    if (lastSent && now - parseInt(lastSent) < 60000) {
      setStatus('Please wait a minute before sending another message.');
      return;
    }

    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mqennwer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
        localStorage.setItem('last_message_sent', Date.now().toString());
      } else {
        setStatus('Failed to send. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <section className="py-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          {/* Left: info */}
          <div className="contact-info">
            <h2 className="font-display text-3xl font-semibold lg:text-4xl">Let's Build Something Together</h2>
            <p className="text-xl lg:text-2xl mt-4 text-gray-600">
              Have a project in mind? Looking for a developer who cares about both code and design? Let's talk.
            </p>

            <div className="contact-links mt-8 flex flex-col gap-4">
              <a href="mailto:krishsatasiya44@gmail.com" className="contact-link font-mono text-sm uppercase font-semibold flex items-center gap-3 hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                krishsatasiya44@gmail.com
              </a>
              <a href="https://linkedin.com/in/satasiyakrish1" target="_blank" rel="noopener noreferrer" className="contact-link font-mono text-sm uppercase font-semibold flex items-center gap-3 hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/satasiyakrish1
              </a>
              <a href="https://github.com/satasiyakrish1" target="_blank" rel="noopener noreferrer" className="contact-link font-mono text-sm uppercase font-semibold flex items-center gap-3 hover:text-primary transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.83-.26.83-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                github.com/satasiyakrish1
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form-wrapper border p-8">
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label font-mono text-xs uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input border border-black w-full px-4 py-3 text-base font-body mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Your name"
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label font-mono text-xs uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input border border-black w-full px-4 py-3 text-base font-body mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label font-mono text-xs uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-input border border-black w-full px-4 py-3 text-base font-body mt-1 focus:outline-none focus:ring-2 focus:ring-black resize-vertical"
                  placeholder="Tell me about your project..."
                />
              </div>
              {status && <p className="text-xs font-mono mb-4 text-primary">{status}</p>}
              <button
                onClick={handleSubmit}
                className="form-submit mt-6 w-full h-14 bg-black text-white font-mono font-semibold uppercase text-sm hover:bg-primary transition-colors"
              >
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
