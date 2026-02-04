import "./LoginSection.css";
import LoginBranding from "./LoginBranding";
import LoginForm from "./LoginForm";

export default function LoginSection() {
  return (
    <div className="container">
      <div className="login-container">
        {/*Left Side - Branding*/}
        <LoginBranding />

        {/* Right Side - Login Form */}
        <LoginForm />
      </div>
    </div>
  );
}
