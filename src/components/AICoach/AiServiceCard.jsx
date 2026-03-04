export default function AiServiceCard({
  icon,
  title,
  description,
  buttonName,
  onBtnClick,
}) {
  return (
    <div className="ai-service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="btn-service" onClick={onBtnClick}>
        {buttonName}
      </button>
    </div>
  );
}
