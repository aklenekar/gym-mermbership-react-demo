import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import HomePage from "./routes/HomePage.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import UserDashboard from "./routes/UserDashboard.jsx";
import PricePage from "./routes/PricePage.jsx";
import ContactPage from "./routes/ContactPage.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import LoginPage, { action as authAction } from "./routes/LoginPage.jsx";
import { tokenLoader, checkRoleLoader, getUserRole } from "./util/auth.js";
import { action as logoutAction } from "./routes/Logout.js";
import FeaturesPage from "./routes/Features.jsx";
import TrainersPage, { trainersLoader } from "./routes/TrainersPage.jsx";
import ClassesPage from "./routes/ClassesPage.jsx";
import WorkoutsPage from "./routes/WorkoutsPage.jsx";
import ProgressPage from "./routes/ProgressPage.jsx";
import AdminDashboardPage from "./routes/AdminDashboardPage.jsx";
import ManageReportPage from "./routes/ManageReportsPage.jsx";
import ManageTrainersPage from "./routes/ManageTrainersPage.jsx";
import ManageClassesPage from "./routes/ManageClassesPage.jsx";
import ManageSettingsPage from "./routes/ManageSettingsPage.jsx";
import ManageMemebersPage from "./routes/ManageMembersPage.jsx";
import SignUpPage from "./routes/SignUpPage.jsx";
import UserProfilePage from "./routes/UserProfilePage.jsx";
import AiCoachPage from "./routes/AiCoachPage.jsx";
import TrainerDashboardPage from "./routes/TrainerDashboardPage.jsx";
import TrainerClassesPage from "./routes/TrainerClassesPage.jsx";
import ClassRecommendationsPage from "./components/AICoach/ClassRecommendationsPage.jsx";
import WorkoutPlanPage from "./components/AICoach/WorkoutPlanPage.jsx";
import NutritionPlanPage from "./components/AICoach/NutritionPlanPage.jsx";
import ManageEquipmentPage from "./routes/ManageEquipmentPage.jsx";
import MaintenanceSchedule from "./components/equipment/MaintenanceSchedule.jsx";
import ManagePayrollPage from "./routes/ManagePayrollPage.jsx";
import TrainerPayrollPage from "./routes/TrainerPayrollPage.jsx";
import ChatPage from "./routes/ChatPage.jsx";

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
        path: "/messages",
        element: <ChatPage />,
        loader: () => {
          const role = getUserRole();
          if (role !== "USER" && role !== "TRAINER") return redirect("/");
          return null;
        },
      },
      {
        path: "",
        loader: checkRoleLoader("USER"),
        children: [
          { path: "/dashboard", element: <UserDashboard /> },
          { path: "/classes", element: <ClassesPage /> },
          { path: "/workouts", element: <WorkoutsPage /> },
          { path: "/progress", element: <ProgressPage /> },
          { path: "/profile", element: <UserProfilePage /> },
          { path: "/ai-coach", element: <AiCoachPage /> },
          { path: "/ai-coach/classes", element: <ClassRecommendationsPage /> },
          { path: "/ai-coach/workout", element: <WorkoutPlanPage /> },
          { path: "/ai-coach/nutrition", element: <NutritionPlanPage /> },
        ],
      },
      {
        path: "",
        loader: checkRoleLoader("ADMIN"),
        children: [
          { path: "/adminDashboard", element: <AdminDashboardPage /> },
          { path: "/manageMembers", element: <ManageMemebersPage /> },
          { path: "/manageTrainers", element: <ManageTrainersPage /> },
          { path: "/manageClasses", element: <ManageClassesPage /> },
          { path: "/manageReports", element: <ManageReportPage /> },
          { path: "/manageSettings", element: <ManageSettingsPage /> },
          { path: "/manageEquipment", element: <ManageEquipmentPage /> },
          { path: "/manageEquipment/maintenance", element: <MaintenanceSchedule /> },
          { path: "/managePayroll", element: <ManagePayrollPage /> },
        ],
      },
      {
        path: "",
        loader: checkRoleLoader("TRAINER"),
        children: [
          { path: "/trainerDashboard", element: <TrainerDashboardPage /> },
          { path: "/trainerClasses", element: <TrainerClassesPage /> },
          { path: "/trainerPayroll", element: <TrainerPayrollPage /> },
          { path: "/profile", element: <UserProfilePage /> },
        ],
      },
      { path: "/features", element: <FeaturesPage /> },
      { path: "/price", element: <PricePage /> },
      { path: "/trainers", element: <TrainersPage />, loader: trainersLoader },
      { path: "/contact", element: <ContactPage /> },
      { path: "/signUp", element: <SignUpPage /> },
      { path: "logout", action: logoutAction },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
