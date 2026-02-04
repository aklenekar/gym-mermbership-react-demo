import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./routes/HomePage.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import UserDashboard from "./routes/UserDashboard.jsx";
import PricePage from "./routes/PricePage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import LoginPage, { action as authAction } from "./routes/LoginPage.jsx";
import { tokenLoader, checkAuthLoader } from "./util/auth.js";
import { action as logoutAction } from "./routes/Logout.js";
import FeaturesPage from "./routes/Features.jsx";
import TrainersPage from "./routes/TrainersPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/auth", element: <LoginPage />, action: authAction },
      {
        path: "/dashboard",
        element: <UserDashboard />,
        loader: checkAuthLoader,
      },
      { path: "/features", element: <FeaturesPage />},
      { path: "/price", element: <PricePage /> },
      { path: "/trainers", element: <TrainersPage /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <SpeedInsights />
    </>
  );
}

export default App;
