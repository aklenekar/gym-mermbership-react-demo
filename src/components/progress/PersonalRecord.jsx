export default function PersonalRecords({ records }) {
  return records.map((record) => {
    return (
      <div className="pr-item">
        <div className="pr-exercise">
          <span className="pr-icon">{record.icon}</span>
          <span className="pr-name">{record.exercise}</span>
        </div>
        <div className="pr-value">{record.value}</div>
        <div className="pr-date">{record.date}</div>
      </div>
    );
  });
}
