import PageHeader from "../pageHeader/PageHeader";
import "./ContactContent.css";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactContent() {
  return (
    <>
      <PageHeader
        title="GET IN TOUCH"
        subTitle="We're here to help you start your fitness journey"
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
