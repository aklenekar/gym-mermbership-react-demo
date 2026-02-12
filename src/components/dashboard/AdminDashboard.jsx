import PageHeader from "../pageHeader/PageHeader";
import "./AdminDashboard.css";
import AdminStatsCard from "./progresscards/AdminStatsCard";
import RecentMembersCard from "./progresscards/RecentMembersCard";
import RecentClassesCard from "./progresscards/AdminClassesCard";
import AdminRevenueCard from "./progresscards/AdminRevenueCard";
import AdminMemebershipCard from "./progresscards/AdminMembershipCard";
import AdminTrainersCard from "./progresscards/AdminTrainersCard";
import AdminQuickActionCard from "./progresscards/AdminQuickActionCard";

export default function AdminDashboard() {
  return (
    <>
      <PageHeader
        subTitle="Manage your gym operations"
        title="ADMIN DASHBOARD"
      />
      <section className="admin-content">
        <div className="container">
          {/* Quick Stats */}
          <AdminStatsCard />

          <div className="admin-grid">
            {/* Recent Members */}
            <RecentMembersCard />

            {/* Upcoming Classes */}
            <RecentClassesCard />

            {/* Revenue Chart */}
            <AdminRevenueCard />

            {/* Membership Distribution */}
            <AdminMemebershipCard />

            {/* Top Trainers */}
            <AdminTrainersCard />

            {/* Quick Actions */}
            <AdminQuickActionCard />
          </div>
        </div>
      </section>
    </>
  );
}
