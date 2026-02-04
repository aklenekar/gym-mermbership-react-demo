import { Link } from 'react-router-dom';
import './CtaSection.css';

export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Ready to Transform?</h2>
        <p>Join thousands who've already started their journey</p>
        <Link to="/price" className="btn-cta">
          View Membership Plans
        </Link>
      </div>
    </section>
  );
}
