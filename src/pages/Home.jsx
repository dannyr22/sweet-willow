import { Link } from 'react-router-dom';
import './Home.css';

const marqueeText = 'Café & Brunch in Dorking | Willows Waffles | Halloumi Wraps | Turkish Breakfast | Meze Platters | Jacket Potatoes | Paninis & Baguettes';

const features = [
  {
    icon: '☕',
    title: 'Great Coffee',
    desc: 'Cappuccinos, flat whites, lattes, mochas and more — plus caramel, vanilla and chai lattes for something special.',
  },
  {
    icon: '🧇',
    title: 'Willows Waffles',
    desc: 'Savoury, protein or sweet treat — our signature waffles are a must-try. Ask for our full Waffles Menu!',
  },
  {
    icon: '🍳',
    title: 'Breakfast & Brunch',
    desc: 'Full English, Turkish breakfast, avocado & smoked salmon on sourdough, Greek yogurt bowls and more.',
  },
  {
    icon: '🥙',
    title: 'Wraps, Paninis & More',
    desc: 'Chicken & halloumi wraps, coronation chicken sandwiches, meze platters, jacket potatoes — something for everyone.',
  },
];

const reviews = [
  {
    name: 'Alannah B.',
    text: 'Great new addition to Dorking! I got the vegan waffle with berries, bananas and manuka honey. It was so good!',
    stars: 5,
  },
  {
    name: 'Nick F.',
    text: 'Lovely place and great service. We had tea, coffee and Victoria Sponge: all very tasty and the staff were lovely.',
    stars: 5,
  },
  {
    name: 'Gloris A.',
    text: 'Great experience, very reasonable prices, wonderful ambience. The chicken and halloumi wrap was brilliant!',
    stars: 5,
  },
  {
    name: 'Simon',
    text: 'So welcoming — and the best coffee and walnut cake I\'ve ever tasted!',
    stars: 5,
  },
  {
    name: 'Grace M.',
    text: 'Really lovely place, beautifully decorated. The lady who runs it is so friendly and makes great food!',
    stars: 5,
  },
  {
    name: 'Chris C.',
    text: 'Lovely new café. Coffee and cake is very good. Vegan options available.',
    stars: 5,
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 className="hero-heading">Welcome to Sweet Willow</h1>
          <p className="hero-subheading">Dorking's Lovely New Café</p>
          <p className="hero-body">
            Beautifully decorated, wonderfully welcoming. Brunch, coffee, cakes, wraps, and so much more — all made with love.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn-primary">Explore Our Menu</Link>
            <Link to="/contact" className="btn-outline-light">Find Us</Link>
          </div>
          <div className="hero-badges">
            <span>Open 7 Days</span>
            <span>Vegan Options</span>
            <span>Made with Love</span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="marquee-text">{marqueeText}&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="features-section">
        <div className="container features-inner">
          <div className="features-header">
            <h2 className="section-heading">What Makes Sweet Willow Special</h2>
            <p className="section-subheading">
              A warm and welcoming space with wonderful food, reasonable prices, and the friendliest staff in Dorking.
            </p>
          </div>
          <div className="features-grid">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="features-cta">
            <Link to="/menu" className="btn-primary">View Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container story-inner">
          <div className="story-img-wrap">
            <div className="story-img-placeholder">
              <span>🌸</span>
            </div>
          </div>
          <div className="story-content">
            <span className="section-badge">New in Dorking</span>
            <h2 className="section-heading">Our Story</h2>
            <p className="story-sub">A Café Made with Heart</p>
            <p className="story-body">
              Sweet Willow was born from a love of good food, great coffee, and bringing people together. After the loss of a beloved local spot, Dorking needed a new place to gather for brunch — and we're so glad to be here.
            </p>
            <div className="story-stats">
              <div className="stat">
                <span className="stat-num">5★</span>
                <span className="stat-label">Google Rating</span>
              </div>
              <div className="stat">
                <span className="stat-num">30+</span>
                <span className="stat-label">Menu Items</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Love</span>
              </div>
            </div>
            <Link to="/about-us" className="btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">What Our Customers Say</h2>
            <p className="section-subheading">Don't just take our word for it — hear from the people who visit us</p>
          </div>
          <div className="reviews-grid">
            {reviews.map(({ name, text, stars }) => (
              <div key={name} className="review-card">
                <div className="review-stars">{'★'.repeat(stars)}</div>
                <p className="review-text">"{text}"</p>
                <span className="review-name">— {name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="visit-cta-section">
        <div className="container visit-cta-inner">
          <h2>Visit Us Today</h2>
          <p>Come and see what everyone's talking about. We're ready to welcome you with great food and a warm smile.</p>
          <div className="visit-cta-buttons">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/menu" className="btn-secondary">See Our Menu</Link>
          </div>

          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-icon">🕐</div>
              <h4>Hours</h4>
              <p>Every day: 8am–4pm</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h4>Location</h4>
              <p>297 High St, Dorking</p>
              <p>RH4 1RE</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🌸</div>
              <h4>Vibe</h4>
              <p>Dine-in & Takeaway</p>
              <p>Warm & welcoming</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
