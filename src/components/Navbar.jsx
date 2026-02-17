import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Events', to: '/events' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-icon">🌸</span>
          <span className="navbar-logo-text">Sweet Willow</span>
        </Link>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setOpen(false)}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
