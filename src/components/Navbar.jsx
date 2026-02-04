import {
  Form,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const token = useLoaderData();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-apex">APEX</span>
          <span className="logo-gym">GYM</span>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/features" className="link">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="/price" className="link">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink to="/trainers" className="link">
              Trainers
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="link">
              Contact
            </NavLink>
          </li>
          {token && (
            <li>
              <NavLink to="/dashboard" className="link">
                Dashboard
              </NavLink>
            </li>
          )}
        </ul>
        <div className="cta">
          {!token ? (
            <NavLink to="/auth" className="btn-secondary">
              Login
            </NavLink>
          ) : (
            <NavLink to="/profile" className="btn-secondary">
              Profile
            </NavLink>
          )}

          {!token ? (
            <NavLink to="/signup" className="btn-primary">
              Join Now
            </NavLink>
          ) : (
            <Form action="/logout" method="post">
              <button className="btn-primary">Logout</button>
            </Form>
          )}
        </div>
      </div>
    </nav>
  );
}
