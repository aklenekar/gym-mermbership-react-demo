import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="contact-form-wrapper">
      <h2 className="form-title">Send us a Message</h2>
      <form className="contact-form" id="contactForm">
        <div className="form-row">
          <div className="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
        </div>

        <div className="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        <div className="form-group">
          <label for="subject">Subject</label>
          <select id="subject" name="subject" required>
            <option value="">Select a topic</option>
            <option value="membership">Membership Inquiry</option>
            <option value="personal-training">Personal Training</option>
            <option value="classes">Group Classes</option>
            <option value="facilities">Facilities & Equipment</option>
            <option value="feedback">Feedback</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>

        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
