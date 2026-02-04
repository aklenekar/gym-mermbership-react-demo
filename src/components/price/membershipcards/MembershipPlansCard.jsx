import "./MembershipPlansCard.css";

export default function MembershipPlansCard({
  title,
  price,
  features,
  mostFeatured,
}) {
  const trueCheck = <span className="check">✓</span>;
  const falseCheck = <span className="cross">✗</span>;
  return (
    <div
      className={mostFeatured ? `membership-card featured` : `membership-card`}
    >
      {mostFeatured && <div className="featured-badge">MOST POPULAR</div>}
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <div className="card-price">
          <span className="price-amount">${price}</span>
          <span className="price-period">/month</span>
        </div>
      </div>
      <div className="card-body">
        <ul className="features-list">
          {features.map((feature) => {
            return (
              <li key={feature.name} className="feature-included">
                <span className="check">
                  {feature.mark ? trueCheck : falseCheck}
                </span>
                <span>{feature.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="card-footer">
        <a
          href="dashboard.html"
          className={mostFeatured ? "btn-card btn-card-featured" : "btn-card"}
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
