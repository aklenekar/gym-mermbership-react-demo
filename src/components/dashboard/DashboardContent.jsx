import { useEffect, useState } from "react";
import "./DashboardContent.css";
import GoalProgressCard from "./progresscards/GoalProgressCard";
import MembershipCard from "./progresscards/MembershipCard";
import QuickActionCard from "./progresscards/QuickActionCard";
import RecentActivityCard from "./progresscards/RecentActivityCard";
import StatsCard from "./progresscards/StatsCard";
import UpcomingClassesCard from "./progresscards/UpcomingClassesCard";
import ErrorPage from "../../routes/ErrorPage";
import LoadingIndicator from "../ui/LoadingIndicator";
import { getAuthToken } from "../../util/auth";
import { API_BASE_URL } from "../../util/constants";
import { classesService, dashboardService } from "../services/Services";

export default function DashboardContent() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchDashboard() {
    dashboardService
      .fetchDashboard()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchDashboard();
  }, []);

  const handleBookAppointment = (classId) => {
    setIsLoading(true);
    classesService
      .bookClass(classId)
      .then(fetchDashboard)
      .finally(setIsLoading(false));
  };

  const handleCancelAppointment = (bookingId) => {
    setIsLoading(true);
    classesService
      .cancelClass(bookingId)
      .then(fetchDashboard)
      .finally(setIsLoading(false));
  };

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = <ErrorPage />;
  }

  if (data) {
    content = (
      <div className="dashboard-grid">
        <MembershipCard memebership={data.membership} />
        <StatsCard stats={data.stats} />
        <UpcomingClassesCard
          upcomingClasses={data.upcomingClasses}
          bookClass={handleBookAppointment}
          cancelClass={handleCancelAppointment}
        />
        <QuickActionCard />
        <RecentActivityCard recentActivities={data.recentActivities} />
        <GoalProgressCard goals={data.goals} />
      </div>
    );
  }

  return (
    <section className="dashboard-content">
      <div className="container">{content}</div>
    </section>
  );
}
