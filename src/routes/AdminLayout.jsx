// src/routes/AdminLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../components/navigation/AdminSidebar";

export const AdminLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "2rem", overflowX: "auto" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;