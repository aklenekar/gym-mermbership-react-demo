export default function ClassesCard() {
  return (
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
  );
}
