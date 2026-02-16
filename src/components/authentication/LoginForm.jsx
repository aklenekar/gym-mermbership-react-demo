import { Form, Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div className="login-form-section">
      <div className="form-wrapper">
        <div className="form-header">
          <h1>Welcome Back</h1>
          <p>Login to access your account</p>
        </div>

        <Form method="post" className="login-form" id="loginForm">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" id="remember" />
              <span>Remember me</span>
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button className="btn-login">Login</button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="social-login">
            <button type="button" className="btn-social btn-google">
              <span>🔍</span> Continue with Google
            </button>
            <button type="button" className="btn-social btn-facebook">
              <span>👍</span> Continue with Facebook
            </button>
          </div>
        </Form>

        <div className="form-footer">
          <p>
            Don't have an account? <Link to="/signUp">Sign Up</Link>
          </p>
          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
