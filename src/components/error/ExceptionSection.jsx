import { Link } from "react-router-dom";
import './ExceptionSection.css';

export default function ExceptionSection() {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-code">404</div>
        <h1 className="error-title">PAGE NOT FOUND</h1>
        <p className="error-message">
          Looks like you've wandered off the path. This page doesn't exist.
        </p>

        <div className="error-actions">
          <Link href="/" className="btn-home">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-contact">
            Contact Support
          </Link>
        </div>
      </div>

      <div className="error-decoration">
        <div className="deco-circle"></div>
        <div className="deco-circle"></div>
        <div className="deco-circle"></div>
      </div>
    </div>
  );
}
