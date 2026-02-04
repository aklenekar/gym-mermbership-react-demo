import { useEffect, useState } from "react";
import { getAuthToken } from "../../util/auth";
import "./DashboardHeader.css";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";

export default function DashboardHeader() {
  const token = getAuthToken();
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchUserDetails() {
      const response = await fetch("http://localhost:8080/api/user", {
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

      const userDetails = await response.json();
      return userDetails;
    }

    fetchUserDetails()
      .then((userDetails) => {
        setUser(userDetails);
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

  if (user) {
    content = (
      <div className="welcome-section">
        <div className="welcome-text">
          <h1 className="dashboard-title">
            Welcome back,
            <span className="highlight-name">{user.firstName}</span>
          </h1>
          <p className="dashboard-subtitle">Ready to crush your goals today?</p>
        </div>
        <div className="user-avatar">
          <div className="avatar-circle">AM</div>
        </div>
      </div>
    );
  }

  return (
    <section className="dashboard-header">
      <div className="dashboard-container">
        {content}
      </div>
    </section>
  );
}
