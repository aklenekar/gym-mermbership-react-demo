import { useEffect, useState } from "react";
import PageHeader from "../pageHeader/PageHeader";
import MembershipPlansCard from "./membershipcards/MembershipPlansCard";
import "./PricingSection.css";
import { adminService } from "../../services/Services";

export default function PricingSection() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const response = await adminService.fetchPricingPlans();
        setPlans(response.pricing);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPricingPlans();
  }, []);

  let content = (
    <div className="pricing-grid">
      {plans.map((plan) => (
        <MembershipPlansCard
          key={plan.name}
          title={plan.name}
          price={plan.price}
          features={plan.features}
          mostFeatured={plan.mostFeatured}
        />
      ))}
    </div>
  );

  return (
    <>
      <PageHeader
        title="CHOOSE YOUR PLAN"
        subTitle="Flexible memberships designed for every goal and lifestyle"
      />
      <section className="pricing-section">
        <div className="container">{content}</div>
      </section>
    </>
  );
}
