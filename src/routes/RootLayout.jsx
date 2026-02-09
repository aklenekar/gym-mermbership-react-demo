import {
  Outlet,
  ScrollRestoration,
  useLoaderData,
  useSubmit,
} from "react-router-dom";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { getTokenDudation } from "../util/auth.js";
import Navbar from "../components/navigation/Navbar.jsx";

export default function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDudation();

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
