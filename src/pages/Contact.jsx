import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    // Placeholder — wire up to your own contact form backend
    await new Promise(r => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Contact</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-inner">
          {/* Info column */}
          <div className="contact-info-col">
            <h2>Get in touch</h2>
            <p className="contact-intro">
              Have a question, want to book a table, or just want to say hello? We're here for you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="cd-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>297 High St, Dorking RH4 1RE</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="cd-icon">🕐</span>
                <div>
                  <strong>Hours</strong>
                  <p>Every day: 8am–4pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="contact-form-col">
            {sent ? (
              <div className="contact-success">
                <div className="success-icon">✅</div>
                <h3>Message sent!</h3>
                <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a message</h2>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
