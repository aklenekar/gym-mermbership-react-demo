// src/components/navigation/AdminSidebar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { adminNavBar } from "../../services/Navigations";
import "./AdminSidebar.css";

export const AdminSidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* Mobile Hamburger Toggle */}
      <button 
        className="admin-sidebar-mobile-toggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        {isMobileOpen ? "✕" : "☰"}
      </button>

      {/* Backdrop overlay for mobile drawer */}
      {isMobileOpen && (
        <div 
          className="admin-sidebar-backdrop" 
          onClick={() => setIsMobileOpen(false)} 
        />
      )}

      <aside className={`admin-sidebar ${isMobileOpen ? "mobile-open" : ""}`}>
        <nav className="admin-sidebar-nav">
          {adminNavBar.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={({ isActive }) =>
                `admin-sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="admin-sidebar-icon">{item.icon}</span>
              <span className="admin-sidebar-label">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};