export default function ClassesCard({ fitnessClass, bookClass }) {
  return (
    <div className="class-card">
      <div className="class-header">
        <div className="class-category">{fitnessClass.category}</div>
        <div className="class-spots">{fitnessClass.spotsInfo}</div>
      </div>
      <h3 className="class-name">{fitnessClass.name}</h3>
      <div className="class-info">
        <div className="info-item">
          <span className="info-icon">👤</span>
          <span>{fitnessClass.instructor}</span>
        </div>
        <div className="info-item">
          <span className="info-icon">📍</span>
          <span>{fitnessClass.location}</span>
        </div>
        <div className="info-item">
          <span className="info-icon">📅</span>
          <span>Today, 6:00 PM</span>
        </div>
        <div className="info-item">
          <span className="info-icon">⏱️</span>
          <span>{fitnessClass.durationMin} min</span>
        </div>
      </div>
      {fitnessClass.isBooked ? (
        <button className="btn-booked" disabled>
          ✓ Booked
        </button>
      ) : (
        <button className="btn-book" onClick={() => bookClass(fitnessClass.id)}>
          Book Class
        </button>
      )}
    </div>
  );
}
