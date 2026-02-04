import "./ContactFaqSection.css";

export default function ContactFaqSection() {
  return (
    <section className="contact-faq-section">
      <div className="container">
        <h2 className="section-title">QUICK ANSWERS</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I schedule a tour?</h3>
            <p>
              Call us at (555) 123-4567 or fill out the contact form above. We
              offer tours daily from 8am-8pm.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer day passes?</h3>
            <p>
              Yes! Day passes are $25 and can be purchased at the front desk or
              through our mobile app.
            </p>
          </div>
          <div className="faq-item">
            <h3>Can I freeze my membership?</h3>
            <p>
              Members can freeze their membership for up to 3 months per year.
              Contact us for details.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you have parking?</h3>
            <p>
              Yes, we have free parking for all members in our underground
              garage with 24/7 access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
