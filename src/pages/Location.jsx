import './Location.css';

const hours = [
  { day: 'Monday', time: '8am – 4pm' },
  { day: 'Tuesday', time: '8am – 4pm' },
  { day: 'Wednesday', time: '8am – 4pm' },
  { day: 'Thursday', time: '8am – 4pm' },
  { day: 'Friday', time: '8am – 4pm' },
  { day: 'Saturday', time: '8am – 4pm' },
  { day: 'Sunday', time: '8am – 4pm' },
];

const today = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

export default function Location() {
  return (
    <div className="location-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Find Us</h1>
          <p>Visit us in the heart of Dorking</p>
        </div>
      </div>

      {/* Main content */}
      <section className="location-section">
        <div className="container location-inner">
          {/* Left: Info */}
          <div className="location-info">
            <div className="loc-card">
              <div className="loc-card-icon">📍</div>
              <h3>Address</h3>
              <p>297 High St</p>
              <p>Dorking, RH4 1RE</p>
              <p>Surrey, England</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sweet+Willow+297+High+St+Dorking+RH4+1RE"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary loc-btn"
              >
                Get Directions
              </a>
            </div>

            <div className="loc-card hours-card">
              <div className="loc-card-icon">🕐</div>
              <h3>Opening Hours</h3>
              <table className="hours-table">
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day} className={day === today ? 'today-row' : ''}>
                      <td className="hours-day">{day}</td>
                      <td className="hours-time">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="loc-card">
              <div className="loc-card-icon">🌸</div>
              <h3>About</h3>
              <p>Dine-in & Takeaway available</p>
              <p>Beautifully decorated, warm & welcoming</p>
              <p>Vegan options available</p>
            </div>
          </div>

          {/* Right: Map */}
          <div className="location-visual">
            <div className="map-embed">
              <iframe
                title="Sweet Willow location map"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=297+High+St,+Dorking+RH4+1RE,+UK&zoom=16"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
