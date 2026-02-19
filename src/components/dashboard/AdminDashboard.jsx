import PageHeader from "../pageHeader/PageHeader";
import "./AdminDashboard.css";
import AdminStatsCard from "./progresscards/AdminStatsCard";
import RecentMembersCard from "./progresscards/RecentMembersCard";
import RecentClassesCard from "./progresscards/AdminClassesCard";
import AdminRevenueCard from "./progresscards/AdminRevenueCard";
import AdminMemebershipCard from "./progresscards/AdminMembershipCard";
import AdminTrainersCard from "./progresscards/AdminTrainersCard";
import AdminQuickActionCard from "./progresscards/AdminQuickActionCard";
import { useEffect, useState } from "react";
import { adminService } from "../../services/Services";

export default function AdminDashboard() {
  const [data, setData] = useState({
    quickStats: {
      totalMembers: 0,
      membersTrend: 0,
      monthlyRevenue: 0,
      revenueTrend: 0,
      classesThisWeek: 0,
      classesTrend: 0,
      activeTrainers: 0,
      trainersTrend: 0,
    },
    recentMembers: [],
    todayClasses: [],
    revenueChart: [],
    membershipDistribution: [],
    topTrainers: [],
  });

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function fetchDashboard() {
    adminService
      .fetchDashboard()
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }

  useEffect(() => {
    setIsLoading(true);
    fetchDashboard();
  }, []);

  return (
    <>
      <PageHeader
        subTitle="Manage your gym operations"
        title="ADMIN DASHBOARD"
      />
      <section className="admin-content">
        <div className="container">
          {/* Quick Stats */}
          <AdminStatsCard quickStats={data.quickStats} />

          <div className="admin-grid">
            {/* Recent Members */}
            <RecentMembersCard recentMembers={data.recentMembers} />

            {/* Upcoming Classes */}
            <RecentClassesCard todayClasses={data.todayClasses} />

            {/* Revenue Chart */}
            <AdminRevenueCard revenueChart={data.revenueChart}/>

            {/* Membership Distribution */}
            <AdminMemebershipCard membershipDistribution={data.membershipDistribution}/>

            {/* Top Trainers */}
            <AdminTrainersCard topTrainers={data.topTrainers} />

            {/* Quick Actions */}
            <AdminQuickActionCard />
          </div>
        </div>
      </section>
    </>
  );
}
