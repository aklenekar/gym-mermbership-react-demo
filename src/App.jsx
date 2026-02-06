import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
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
import TrainersPage, { trainersLoader } from "./routes/TrainersPage.jsx";
import ClassesPage from "./routes/ClassesPage.jsx";
import WorkoutsPage from "./routes/WorkoutsPage.jsx";
import ProgressPage from "./routes/ProgressPage.jsx";

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
      { path: "/features", element: <FeaturesPage /> },
      { path: "/price", element: <PricePage /> },
      { path: "/trainers", element: <TrainersPage />, loader: trainersLoader },
      { path: "/contact", element: <ContactPage /> },
      { path: "logout", action: logoutAction },
      { path: "/classes", element: <ClassesPage /> },
      { path: "/workouts", element: <WorkoutsPage /> },
      { path: "/progress", element: <ProgressPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}

export default App;
