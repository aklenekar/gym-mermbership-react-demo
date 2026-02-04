import "./MapSection.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <div className="map-placeholder">
        <div className="map-overlay">
          <div className="map-content">
            <h3>📍 APEX GYM Location</h3>
            <p>123 Fitness Avenue, New York, NY 10001</p>
            <a href="https://maps.google.com" target="_blank" className="btn-map">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
