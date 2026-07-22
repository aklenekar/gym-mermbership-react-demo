import { useEffect, useState } from "react";
import { API_BASE_URL } from "../util/constants";

export default function TrainerCandidatesPage() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCandidates() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${API_BASE_URL}/trainers/candidates`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Unable to load candidates");
        }

        const data = await response.json();
        const candidateList = Array.isArray(data?.candidates)
          ? data.candidates
          : Array.isArray(data)
            ? data
            : [];

        setCandidates(candidateList);
      } catch (error) {
        console.error(error);
        setCandidates([]);
      } finally {
        setLoading(false);
      }
    }

    loadCandidates();
  }, []);

  return (
    <div style={{ padding: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>My Candidates</h1>
      {loading ? (
        <p>Loading candidates...</p>
      ) : candidates.length === 0 ? (
        <p>No candidates assigned yet.</p>
      ) : (
        <div>
          <p>
            Showing {candidates.length} candidate{candidates.length === 1 ? "" : "s"}.
          </p>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {candidates.map((candidate) => {
              const fullName = [candidate.firstName, candidate.lastName]
                .filter(Boolean)
                .join(" ");

              return (
                <li
                  key={candidate.userId || candidate.id || candidate.email}
                  style={{
                    marginBottom: "1rem",
                    padding: "1rem",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                  }}
                >
                  <strong>
                    {fullName || candidate.name || candidate.fullName || candidate.email}
                  </strong>
                  {candidate.email ? <div>Email: {candidate.email}</div> : null}
                  {candidate.phone ? <div>Phone: {candidate.phone}</div> : null}
                  {candidate.membershipPlan ? <div>Plan: {candidate.membershipPlan}</div> : null}
                  {candidate.membershipStatus ? <div>Status: {candidate.membershipStatus}</div> : null}
                  {candidate.memberSince ? <div>Member Since: {candidate.memberSince}</div> : null}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
