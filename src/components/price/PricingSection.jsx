import { useState } from "react";
import {
  eliteFeatures,
  proFeatures,
  starterFeatures,
} from "../../services/Prices";
import PageHeader from "../pageHeader/PageHeader";
import MembershipPlansCard from "./membershipcards/MembershipPlansCard";
import "./PricingSection.css";

export default function PricingSection() {
  const [plans, setPlans] = useState({
    starter: starterFeatures,
    pro: proFeatures,
    elite: eliteFeatures,
  });

  const handlePlanChange = (index) => {
    if (plans.index === index) {
      return;
    }
    setPlans({ ...plans, index });
  };

  let content = (
    <div className="pricing-grid">
      {Object.keys(plans).map((planName) => (
        <MembershipPlansCard
          key={planName}
          title={plans[planName].name}
          price={plans[planName].price}
          features={plans[planName].features}
          handlePlanChange={handlePlanChange}
          mostFeatured={plans[planName].mostFeatured}
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
