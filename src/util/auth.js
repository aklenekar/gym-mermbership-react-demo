import { redirect } from "react-router-dom";

export function getTokenDudation() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDudation();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function getUserRole() {
  return localStorage.getItem("role");
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkUserAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
}

export function checkRoleLoader(requiredRole) {
  return () => {
    const token = getAuthToken();
    const role = getUserRole();

    // 1. Check if logged in
    if (!token || token === "EXPIRED") {
      return redirect("/auth");
    }

    // 2. Check if role matches
    if (role !== requiredRole) {
      return redirect("/"); // Redirect unauthorized users to home
    }

    return null;
  };
}
