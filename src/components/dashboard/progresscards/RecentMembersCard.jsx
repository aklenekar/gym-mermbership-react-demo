import { Link } from "react-router-dom";

export default function RecentMembersCard({ recentMembers }) {
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
          {recentMembers.map((member) => {
            return (
              <div className="member-item">
                <div className="member-avatar">{member.initials}</div>
                <div className="member-info">
                  <div className="member-name">{member.name}</div>
                  <div className="member-email">{member.email}</div>
                </div>
                <div className="member-plan">{member.plan}</div>
                <div className="member-date">{member.joinedDate}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
