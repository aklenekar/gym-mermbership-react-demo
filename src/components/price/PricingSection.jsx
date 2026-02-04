import PageHeader from "../pageHeader/PageHeader";
import MembershipPlansCard from "./membershipcards/MembershipPlansCard";
import "./PricingSection.css";

const starterFeatures = [
  {
    mark: true,
    name: "Full gym access",
  },
  {
    mark: true,
    name: "Locker room facilities",
  },
  {
    mark: true,
    name: "Free fitness assessment",
  },
  {
    mark: false,
    name: "Group classes",
  },
  {
    mark: false,
    name: "Personal training",
  },
  {
    mark: false,
    name: "Recovery zone access",
  },
];

const proFeatures = [
  {
    mark: true,
    name: "24/7 gym access",
  },
  {
    mark: true,
    name: "Unlimited group classes",
  },
  {
    mark: true,
    name: "Recovery zone access",
  },
  {
    mark: true,
    name: "Nutrition consultation",
  },
  {
    mark: true,
    name: "Guest passes (2/month)",
  },
  {
    mark: false,
    name: "Personal training",
  },
];

const eliteFeatures = [
  {
    mark: true,
    name: "Everything in Pro",
  },
  {
    mark: true,
    name: "4 personal training sessions",
  },
  {
    mark: true,
    name: "Priority class booking",
  },
  {
    mark: true,
    name: "Unlimited guest passes",
  },
  {
    mark: true,
    name: "Exclusive member events",
  },
  {
    mark: true,
    name: "Free merchandise",
  },
];

export default function PricingSection() {
  return (
    <>
      <PageHeader title="CHOOSE YOUR PLAN" subTitle="Flexible memberships designed for every goal and lifestyle" />
      <section className="pricing-section">
        <div className="container">
          <div className="pricing-grid">
            <MembershipPlansCard
              title="STARTER"
              price="29"
              features={starterFeatures}
            />
            <MembershipPlansCard
              title="PRO"
              price="59"
              features={proFeatures}
              mostFeatured
            />
            <MembershipPlansCard
              title="ELITE"
              price="99"
              features={eliteFeatures}
            />
          </div>
        </div>
      </section>
    </>
  );
}
