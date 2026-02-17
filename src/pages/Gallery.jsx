import './Gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-page">
      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <h1>Gallery</h1>
          <p>A peek inside Sweet Willow — follow us on Instagram for more</p>
        </div>
      </div>

      {/* Instagram feed */}
      <section className="gallery-instagram">
        <div className="container">
          <div className="elfsight-app-9f3d3f36-1737-414e-a419-c4802a2628f2" data-elfsight-app-lazy></div>
        </div>
      </section>
    </div>
  );
}
