import { Form, NavLink, useLoaderData } from "react-router-dom";
import "./Navbar.css";
import Logo from "../ui/Logo";
import { useState } from "react";
import {
  adminNavBar,
  guestNavBar,
  userNavBar,
} from "../../services/Navigations";
import { getUserRole } from "../../util/auth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = useLoaderData();
  const role = getUserRole();

  const navBar = token
    ? role === "ADMIN"
      ? adminNavBar
      : role === "USER"
        ? userNavBar
        : guestNavBar
    : guestNavBar;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          {navBar.map((item) => {
            return (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className="nav-link"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}

          {token ? (
            <>
              <li className="mobile-cta">
                <NavLink
                  to="/profile"
                  className="btn-secondary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Profile
                </NavLink>
              </li>
              <li className="mobile-cta">
                <Form
                  action="/logout"
                  method="post"
                  className="inline-form"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <button className="btn-primary">Logout</button>
                </Form>
              </li>
            </>
          ) : (
            <>
              <li className="mobile-cta">
                <NavLink
                  to="/auth"
                  className="btn-secondary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Login
                </NavLink>
              </li>
              <li className="mobile-cta">
                <NavLink
                  to="/signup"
                  className="btn-primary"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Join Now
                </NavLink>
              </li>
            </>
          )}
        </ul>
        <div className="desktop-cta">
          {token ? (
            <>
              <NavLink to="/profile" className="btn-secondary">
                Profile
              </NavLink>
              <Form action="/logout" method="post" className="inline-form">
                <button className="btn-primary">Logout</button>
              </Form>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="btn-secondary">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn-primary">
                Join Now
              </NavLink>
            </>
          )}
        </div>
        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
