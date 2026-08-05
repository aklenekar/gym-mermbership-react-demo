import { Form, NavLink, useLoaderData } from "react-router-dom";
import "./Navbar.css";
import Logo from "../ui/Logo";
import { useState } from "react";
import {
  adminNavBar,
  guestNavBar,
  trainerNavBar,
  userNavBar,
} from "../../services/Navigations";
import { getUserRole } from "../../util/auth";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const token = useLoaderData();
  const role = getUserRole();

  const isAdmin = token && role === "ADMIN";

  const navBar = token
    ? role === "ADMIN"
      ? adminNavBar
      : role === "TRAINER"
        ? trainerNavBar
        : role === "USER"
          ? userNavBar
          : guestNavBar
    : guestNavBar;

  const isProfile = role === "USER" || role === "TRAINER";

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />

        {/* Hide horizontal nav links & mobile menu items for ADMIN role */}
        {!isAdmin && (
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            {navBar.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.link}
                  className="nav-link"
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            {token ? (
              <>
                {isProfile && (
                  <li className="mobile-cta">
                    <NavLink
                      to="/profile"
                      className="btn-secondary"
                      onClick={toggleMenu}
                    >
                      Profile
                    </NavLink>
                  </li>
                )}
                <li className="mobile-cta">
                  <Form
                    action="/logout"
                    method="post"
                    className="inline-form"
                    onClick={toggleMenu}
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
                    onClick={toggleMenu}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="mobile-cta">
                  <NavLink
                    to="/signup"
                    className="btn-primary"
                    onClick={toggleMenu}
                  >
                    Join Now
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        )}

        {/* Desktop Controls (ThemeToggle + Auth CTA Buttons) */}
        <div className="desktop-cta">
          <ThemeToggle />
          {token ? (
            <>
              {isProfile && (
                <NavLink to="/profile" className="btn-secondary">
                  Profile
                </NavLink>
              )}
              <Form action="/logout" method="post" className="inline-form">
                <button className="btn-primary">Logout</button>
              </Form>
            </>
          ) : (
            <>
              <NavLink to="/auth" className="btn-secondary">
                Login
              </NavLink>
              <NavLink to="/signUp" className="btn-primary">
                Join Now
              </NavLink>
            </>
          )}
        </div>

        {/* Hide header hamburger toggle for ADMIN (handled by AdminSidebar) */}
        {!isAdmin && (
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </nav>
  );
}