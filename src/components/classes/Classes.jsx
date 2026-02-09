import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import "./Classes.css";
import ClassesFilter from "./ClassesFilter";
import ClassesCard from "./ClassesCard";
import LoadingIndicator from "../ui/LoadingIndicator";
import ErrorPage from "../../routes/ErrorPage";
import { classesService } from "../services/Services";

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
    value: "Coach Sarah",
  },
  {
    name: "Coach Mike",
    value: "Coach Mike",
  },
  {
    name: "Coach Tom",
    value: "Coach Tom",
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
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [filters, setFilters] = useState({
    category: "",
    instructor: "",
    day: "",
  });

  function fetchClasses() {
    classesService
      .fetchClasses(filters)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchClasses();
  }, [filters]);

  const handleBookAppointment = (classId) => {
    setIsLoading(true);
    classesService
      .bookClass(classId)
      .then(fetchClasses)
      .finally(setIsLoading(false));
  };

  const handleCancelAppointment = (bookingId) => {
    setIsLoading(true);
    classesService
      .cancelClass(bookingId)
      .then(fetchClasses)
      .finally(setIsLoading(false));
  };

  let content;

  if (isLoading) {
    content = <LoadingIndicator />;
  }

  if (error) {
    content = <ErrorPage />;
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (data?.length === 0) {
    content = <div>No records found</div>;
  }

  if (data) {
    content = (
      <div className="classes-grid">
        {data.map((fitnessClass) => {
          return (
            <ClassesCard
              key={fitnessClass.id}
              fitnessClass={fitnessClass}
              bookClass={handleBookAppointment}
              cancelClass={handleCancelAppointment}
            />
          );
        })}
      </div>
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
            <ClassesFilter
              name="category"
              filters={categories}
              handleFilterChange={handleFilterChange}
            />
            <ClassesFilter
              name="instructor"
              filters={instructors}
              handleFilterChange={handleFilterChange}
            />
            <ClassesFilter
              name="day"
              filters={days}
              handleFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="classes-content">
        <div className="container">{content}</div>
      </section>
    </>
  );
}
