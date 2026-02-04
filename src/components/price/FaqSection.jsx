import './FaqSection.css';

export default function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">FREQUENTLY ASKED</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Can I cancel anytime?</h3>
            <p>
              Yes! All memberships are month-to-month with no long-term
              contracts. Cancel anytime with 30 days notice.
            </p>
          </div>
          <div className="faq-item">
            <h3>Is there a joining fee?</h3>
            <p>
              New members pay a one-time $50 activation fee that includes your
              welcome pack and orientation session.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I upgrade my plan?</h3>
            <p>
              Absolutely! Upgrade anytime and we'll prorate the difference for
              the current billing period.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer student discounts?</h3>
            <p>
              Yes! Students receive 20% off any membership with valid student
              ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
