import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./Classes.css";
import ClassesFilter from "./ClassesFilter";
import { getAuthToken } from "../../util/auth";
import { API_BASE_URL } from "../../util/constants";
import ClassesCard from "./ClassesCard";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";

const categories = [
  {
    name: "All Categories",
    value: "all",
  },
  {
    name: "Strength",
    value: "strength",
  },
  {
    name: "Cardio",
    value: "cardio",
  },
  {
    name: "Yoga",
    value: "yoga",
  },
  {
    name: "HIIT",
    value: "hiit",
  },
];
const instructors = [
  {
    name: "All Instructors",
    value: "all",
  },
  {
    name: "Coach Sarah",
    value: "sarah",
  },
  {
    name: "Coach Mike",
    value: "mike",
  },
  {
    name: "Coach Tom",
    value: "tom",
  },
];
const days = [
  {
    name: "All Days",
    value: "all",
  },
  {
    name: "Today",
    value: "today",
  },
  {
    name: "Tomorrow",
    value: "tomorrow",
  },
  {
    name: "This Week",
    value: "week",
  },
];

export default function Classes() {
  const token = getAuthToken();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchClasses() {
      const response = await fetch(`${API_BASE_URL}/classes`, {
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

    fetchClasses()
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
      <section className="classes-content">
        <div className="container">
          <div className="classes-grid">
            {data.map((fitnessClass) => {
              return <ClassesCard key={fitnessClass.id} fitnessClass={fitnessClass} />;
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHeader
        title="AVAILABLE CLASSES"
        subTitle="Book your spot in upcoming sessions"
      />

      {/* Filter Bar */}
      <section className="classes-filter">
        <div className="container">
          <div className="filter-bar">
            <ClassesFilter filters={categories} />
            <ClassesFilter filters={instructors} />
            <ClassesFilter filters={days} />
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      {content}
    </>
  );
}
