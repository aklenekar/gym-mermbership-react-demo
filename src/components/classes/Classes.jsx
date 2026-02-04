import PageHeader from "../pageHeader/PageHeader";
import "./Classes.css";
import ClassesFilter from "./ClassesFilter";

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
      <section className="classes-content">
        <div className="container">
          <div className="classes-grid">
            <div className="class-card">
              <div className="class-header">
                <div className="class-category">HIIT</div>
                <div className="class-spots">12/20 spots</div>
              </div>
              <h3 className="class-name">HIIT Bootcamp</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach Sarah</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Studio A</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Today, 6:00 PM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>60 min</span>
                </div>
              </div>
              <button className="btn-book">Book Class</button>
            </div>

            <div className="class-card">
              <div className="class-header">
                <div className="class-category">Yoga</div>
                <div className="class-spots">8/15 spots</div>
              </div>
              <h3 className="class-name">Yoga Flow</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach Emma</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Studio B</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Tomorrow, 7:30 AM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>60 min</span>
                </div>
              </div>
              <button className="btn-book">Book Class</button>
            </div>

            <div className="class-card">
              <div className="class-header">
                <div className="class-category">Strength</div>
                <div className="class-spots">5/12 spots</div>
              </div>
              <h3 className="class-name">Strength & Conditioning</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach Tom</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Main Floor</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Tomorrow, 6:00 PM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>75 min</span>
                </div>
              </div>
              <button className="btn-book">Book Class</button>
            </div>

            <div className="class-card booked">
              <div className="class-header">
                <div className="class-category">Cardio</div>
                <div className="class-spots">18/20 spots</div>
              </div>
              <h3 className="class-name">Cycling Endurance</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach Mike</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Spin Studio</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Friday, 5:30 PM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>45 min</span>
                </div>
              </div>
              <button className="btn-booked" disabled>
                ✓ Booked
              </button>
            </div>

            <div className="class-card">
              <div className="class-header">
                <div className="class-category">Boxing</div>
                <div className="class-spots">10/15 spots</div>
              </div>
              <h3 className="class-name">Boxing Fundamentals</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach David</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Combat Zone</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Saturday, 10:00 AM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>60 min</span>
                </div>
              </div>
              <button className="btn-book">Book Class</button>
            </div>

            <div className="class-card">
              <div className="class-header">
                <div className="class-category">Pilates</div>
                <div className="class-spots">6/10 spots</div>
              </div>
              <h3 className="class-name">Core Pilates</h3>
              <div className="class-info">
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <span>Coach Jessica</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <span>Studio C</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">📅</span>
                  <span>Sunday, 9:00 AM</span>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏱️</span>
                  <span>50 min</span>
                </div>
              </div>
              <button className="btn-book">Book Class</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
