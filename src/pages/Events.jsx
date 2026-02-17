import { Link } from 'react-router-dom';
import './Events.css';

const eventTypes = [
  {
    icon: '🎂',
    title: 'Birthday Parties',
    desc: 'Celebrate in style with our beautifully decorated space, custom cake options, and a dedicated menu. We handle the details so you can enjoy the day.',
    capacity: 'Up to 30 guests',
  },
  {
    icon: '👶',
    title: 'Baby Showers',
    desc: 'A warm, intimate setting with stunning décor and a tailored afternoon tea or brunch spread. The perfect backdrop for your special celebration.',
    capacity: 'Up to 25 guests',
  },
  {
    icon: '🥂',
    title: 'Private Hire',
    desc: 'Book the entire café for your event — whether it\'s an engagement party, retirement celebration, or a get-together with friends. Exclusively yours.',
    capacity: 'Up to 40 guests',
  },
  {
    icon: '🤝',
    title: 'Corporate Events',
    desc: 'Team lunches, client meetings, or creative away-days. We offer a professional yet relaxed setting with catering packages to suit your needs.',
    capacity: 'Up to 30 guests',
  },
  {
    icon: '🫖',
    title: 'Afternoon Tea Parties',
    desc: 'Tiered stands of homemade cakes, finger sandwiches, and scones with clotted cream — served with a selection of our finest teas and coffees.',
    capacity: 'Up to 20 guests',
  },
  {
    icon: '🎄',
    title: 'Seasonal Celebrations',
    desc: 'From Christmas parties to Easter brunches, we create seasonal menus and themed décor to make your gathering truly memorable.',
    capacity: 'Up to 40 guests',
  },
];

const packages = [
  {
    name: 'The Willow',
    price: '£15',
    per: 'per person',
    features: [
      'Selection of finger sandwiches',
      'Two homemade cakes',
      'Tea & coffee',
      'Table decorations included',
    ],
  },
  {
    name: 'The Blossom',
    price: '£22',
    per: 'per person',
    popular: true,
    features: [
      'Full afternoon tea with tiered stand',
      'Three homemade cakes & scones',
      'Tea, coffee & soft drinks',
      'Custom table settings & flowers',
      'Dedicated event host',
    ],
  },
  {
    name: 'The Garden',
    price: '£30',
    per: 'per person',
    features: [
      'Brunch or lunch menu of your choice',
      'Welcome drinks on arrival',
      'Unlimited tea, coffee & soft drinks',
      'Full venue styling & decorations',
      'Dedicated event host',
      'Custom cake included',
    ],
  },
];

const testimonials = [
  {
    text: 'We hosted my mum\'s 60th at Sweet Willow and it was absolutely perfect. The food was incredible, the space looked stunning, and the staff went above and beyond.',
    name: 'Rebecca T.',
  },
  {
    text: 'Booked the café for our team Christmas lunch — everyone loved it. The meze platter and waffles were a huge hit. Already planning our next one!',
    name: 'James H.',
  },
  {
    text: 'The afternoon tea for my baby shower was beautiful. Everything was homemade and the presentation was gorgeous. Could not recommend enough!',
    name: 'Sophie L.',
  },
];

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'We recommend booking at least 2 weeks in advance for smaller gatherings, and 4–6 weeks for full private hire or larger events.',
  },
  {
    q: 'Can you accommodate dietary requirements?',
    a: 'Absolutely. We cater for vegetarian, vegan, gluten-free and other dietary needs — just let us know when booking and we\'ll tailor the menu.',
  },
  {
    q: 'Is there a minimum spend for private hire?',
    a: 'For full private hire in the evenings or on Sundays, we ask for a minimum of 15 guests on any package. Daytime bookings are more flexible.',
  },
  {
    q: 'Can I bring my own cake or decorations?',
    a: 'Of course! You\'re welcome to bring your own cake and personal touches. We\'re happy to help set up on the day too.',
  },
  {
    q: 'Do you offer evening events?',
    a: 'Yes — for private hire we can extend our hours into the evening. Get in touch and we\'ll work out the best arrangement for you.',
  },
];

export default function Events() {
  return (
    <div className="events-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Events at Sweet Willow</h1>
          <p>Your celebration, our beautiful space — let's make it unforgettable</p>
        </div>
      </div>

      {/* Intro */}
      <section className="events-intro-section">
        <div className="container events-intro-inner">
          <h2 className="section-heading">Host Your Next Event With Us</h2>
          <p className="events-intro-text">
            Whether it's a milestone birthday, a baby shower, a corporate lunch, or simply an excuse to get everyone together — Sweet Willow is the perfect venue. Our beautifully decorated café in the heart of Dorking offers a warm, intimate setting with homemade food, dedicated service, and all the little touches that make an event truly special.
          </p>
          <div className="events-intro-highlights">
            <div className="intro-highlight">
              <span className="intro-highlight-num">40</span>
              <span className="intro-highlight-label">Max Guests</span>
            </div>
            <div className="intro-highlight">
              <span className="intro-highlight-num">3</span>
              <span className="intro-highlight-label">Packages</span>
            </div>
            <div className="intro-highlight">
              <span className="intro-highlight-num">100%</span>
              <span className="intro-highlight-label">Homemade</span>
            </div>
            <div className="intro-highlight">
              <span className="intro-highlight-num">7</span>
              <span className="intro-highlight-label">Days a Week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="event-types-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Events We Host</h2>
            <p className="section-subheading">From intimate gatherings to full private hire — we've got you covered</p>
          </div>
          <div className="event-types-grid">
            {eventTypes.map(({ icon, title, desc, capacity }) => (
              <div key={title} className="event-type-card">
                <div className="event-type-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="event-type-capacity">{capacity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Our Event Packages</h2>
            <p className="section-subheading">Choose a package or let us create something bespoke for your occasion</p>
          </div>
          <div className="packages-grid">
            {packages.map(({ name, price, per, features, popular }) => (
              <div key={name} className={`package-card${popular ? ' package-popular' : ''}`}>
                {popular && <span className="package-badge">Most Popular</span>}
                <h3>{name}</h3>
                <div className="package-price">
                  <span className="package-amount">{price}</span>
                  <span className="package-per">{per}</span>
                </div>
                <ul>
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className={popular ? 'btn-primary package-btn' : 'btn-secondary package-btn'}>
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>
          <p className="packages-note">All packages can be customised to suit your needs. Prices may vary for groups over 20.</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="event-testimonials-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">What Our Event Guests Say</h2>
            <p className="section-subheading">Don't just take our word for it</p>
          </div>
          <div className="event-testimonials-grid">
            {testimonials.map(({ text, name }) => (
              <div key={name} className="event-testimonial-card">
                <div className="event-testimonial-stars">★★★★★</div>
                <p className="event-testimonial-text">"{text}"</p>
                <span className="event-testimonial-name">— {name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="event-faq-section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">Everything you need to know about hosting an event with us</p>
          </div>
          <div className="faq-list">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item">
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="event-cta-section">
        <div className="container event-cta-inner">
          <h2>Ready to Plan Your Event?</h2>
          <p>Get in touch and we'll help you create something truly special. No event is too small — we'd love to hear from you.</p>
          <div className="event-cta-buttons">
            <Link to="/contact" className="btn-primary">Enquire Now</Link>
            <Link to="/menu" className="btn-secondary">View Our Menu</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
