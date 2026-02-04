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

export default function DashboardContent() {
  const token = getAuthToken();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchDashboard() {
      const response = await fetch("http://localhost:8080/api/dashboard", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (!response.ok) {
        const error = new Error("An error occurred while fetching the events");
        error.code = response.status;
        error.info = await response.json();
        throw error;
      }

      const details = await response.json();
      return details;
    }

    fetchDashboard()
      .then((details) => {
        setData(details);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
        <UpcomingClassesCard upcomingClasses={data.upcomingClasses} />
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
