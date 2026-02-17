export default function Achievements({ achievements }) {
  return (
    <div className="card-body">
      {achievements.map((achievement) => {
        return (
          <div className="achievement-item">
            <div className="achievement-badge">{achievement.badge}</div>
            <div className="achievement-info">
              <div className="achievement-name">{achievement.name}</div>
              <div className="achievement-date">{achievement.unlockedDate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
