export default function MySessionsList({ sessions, onCancel }) {
  const upcoming = sessions.filter((s) => s.status === "SCHEDULED");

  if (upcoming.length === 0) return null;

  return (
    <div className="my-pt-sessions">
      <h2 className="section-title">My Upcoming Sessions</h2>
      <div className="my-pt-sessions-list">
        {upcoming.map((s) => (
          <div key={s.id} className="my-pt-session-item">
            <div className="my-pt-session-time">
              {new Date(s.scheduledAt).toLocaleString()}
            </div>
            <div className="my-pt-session-trainer">with {s.trainerName}</div>
            {s.goalFocus && <div className="my-pt-session-goal">{s.goalFocus}</div>}
            <button className="btn-cancel-pt" onClick={() => onCancel(s.id)}>
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}