import { Link } from 'react-router-dom';
import './AboutUs.css';

const badges = ['Fresh Ingredients', 'Made with Love', 'Vegan Options', 'Homemade Cakes'];

const promises = [
  {
    emoji: '🌸',
    title: 'Fresh & Homemade',
    desc: 'Everything we serve is made fresh, from our brunch dishes and wraps to our cakes and pastries. We believe in quality ingredients and homemade goodness.',
  },
  {
    emoji: '🤝',
    title: 'Community Spirit',
    desc: 'Sweet Willow is more than a café — it\'s a gathering place for the Dorking community. A warm space to meet friends, catch up, or just enjoy a quiet moment with a great cup of coffee.',
  },
  {
    emoji: '💕',
    title: 'Warm Welcome',
    desc: 'Our customers say it best: "so welcoming", "really sweet staff", "the lady who runs it is so friendly." We put our heart into making everyone feel at home.',
  },
];

export default function AboutUs() {
  return (
    <div className="about-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>About Us</h1>
          <p>A warm and welcoming café in the heart of Dorking</p>
        </div>
      </div>

      {/* About section */}
      <section className="about-section">
        <div className="container about-inner">
          <div className="about-img-wrap">
            <div className="about-img-placeholder">
              <span>🌸</span>
            </div>
          </div>
          <div className="about-content">
            <span className="section-badge">New in Dorking</span>
            <h2 className="section-heading">Our Story</h2>
            <p className="about-sub">Made with Heart</p>
            <p className="about-body">
              Welcome to Sweet Willow — a lovely new café at 297 High St, Dorking. We opened our doors to fill a gap the community was feeling, and we've been overwhelmed by the warmth and support from locals.
            </p>
            <p className="about-body" style={{ marginTop: '16px' }}>
              From our vegan waffles with berries and manuka honey, to our brilliant chicken and halloumi wraps, to what one customer called "the best coffee and walnut cake I've ever tasted" — we pour love into everything we make.
            </p>
            <p className="about-body" style={{ marginTop: '16px' }}>
              Whether you're popping in for a quick coffee, settling in for brunch, or treating yourself to a slice of cake, we're here to make your day a little sweeter.
            </p>
            <div className="about-badges">
              {badges.map(b => (
                <span key={b} className="about-badge">{b}</span>
              ))}
            </div>
            <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
          </div>
        </div>
      </section>

      {/* Promise section */}
      <section className="promise-section">
        <div className="container">
          <div className="promise-quote">
            <blockquote>
              "Really lovely place, beautifully decorated. The lady who runs it is so friendly and makes great food!"
            </blockquote>
          </div>
          <div className="promise-header">
            <h2 className="section-heading">What We're About</h2>
          </div>
          <div className="promise-grid">
            {promises.map(({ emoji, title, desc }) => (
              <div key={title} className="promise-card">
                <div className="promise-emoji">{emoji}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
