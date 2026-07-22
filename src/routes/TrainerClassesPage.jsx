import { useEffect, useState } from "react";
import { API_BASE_URL } from "../util/constants";

export default function TrainerClassesPage() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadClasses() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_BASE_URL}/trainers/classes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unable to load classes");
        }

        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error(error);
        setClasses([]);
      } finally {
        setLoading(false);
      }
    }

    loadClasses();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>My Classes</h1>
      {loading ? (
        <p>Loading classes...</p>
      ) : classes.length === 0 ? (
        <p>No classes assigned yet.</p>
      ) : (
        <ul>
          {classes.map((cls) => (
            <li key={cls.id || cls.name} style={{ marginBottom: "1rem" }}>
              <strong>{cls.name || cls.className}</strong>
              {cls.schedule ? <div>Schedule: {cls.schedule}</div> : null}
              {cls.time ? <div>Time: {cls.time}</div> : null}
              {cls.capacity ? <div>Capacity: {cls.capacity}</div> : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
