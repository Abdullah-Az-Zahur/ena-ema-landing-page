// components/Pricing.tsx
import React from "react";
import PlanCard from "./PlanCard/PlanCard";
import SpecialOffer from "../SpecialOffer/SpecialOffer";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$200",
      description: "Perfect for solopreneurs",
      features: [
        "1 Landing Page (Design + Development)",
        "Hosting Deployment",
        "5-Day Delivery",
        "Basic Support",
      ],
    },
    {
      title: "Standard",
      price: "$300",
      description: "Best balance of value & features",
      features: [
        "Everything in Basic",
        "Extra Custom Section",
        "Free Hosting Setup",
        "Free Consultation Call",
        "Priority Support ",
      ],
      popular: true,
    },
    {
      title: "Premium",
      price: "$500",
      description: "For brands & agencies",
      features: [
        "Everything in Standard",
        "Advanced Animations",
        "Priority Delivery (3 Days)",
        "6 Months Free Support",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-20">
      <div className="mb-10 ">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Simple, Transparent Pricing —{" "}
          <span className="text-foreground">Choose Your Plan</span>
        </h2>
        <p className="text-gray-400 mt-4">
          No hidden fees, no surprises. Just premium landing pages at unbeatable
          prices.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <PlanCard key={plan.title} {...plan} />
        ))}
      </div>


        <SpecialOffer/>

    </div>
  );
};

export default Pricing;
