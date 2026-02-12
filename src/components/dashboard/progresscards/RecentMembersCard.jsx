import { Link } from "react-router-dom";

export default function RecentMembersCard() {
  return (
    <div className="admin-card">
      <div className="card-header">
        <h3>Recent Members</h3>
        <Link to="/manageMembers" className="view-link">
          View All
        </Link>
      </div>
      <div className="card-body">
        <div className="member-list">
          <div className="member-item">
            <div className="member-avatar">JD</div>
            <div className="member-info">
              <div className="member-name">John Doe</div>
              <div className="member-email">john@email.com</div>
            </div>
            <div className="member-plan">PRO</div>
            <div className="member-date">2 days ago</div>
          </div>
          <div className="member-item">
            <div className="member-avatar">SM</div>
            <div className="member-info">
              <div className="member-name">Sarah Miller</div>
              <div className="member-email">sarah@email.com</div>
            </div>
            <div className="member-plan">ELITE</div>
            <div className="member-date">3 days ago</div>
          </div>
          <div className="member-item">
            <div className="member-avatar">MJ</div>
            <div className="member-info">
              <div className="member-name">Mike Johnson</div>
              <div className="member-email">mike@email.com</div>
            </div>
            <div className="member-plan">STARTER</div>
            <div className="member-date">5 days ago</div>
          </div>
          <div className="member-item">
            <div className="member-avatar">EB</div>
            <div className="member-info">
              <div className="member-name">Emma Brown</div>
              <div className="member-email">emma@email.com</div>
            </div>
            <div className="member-plan">PRO</div>
            <div className="member-date">1 week ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}
