// components/Pricing.tsx
import React from "react";
import PlanCard from "./PlanCard/PlanCard";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      price: "$10/mo",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Standard",
      price: "$25/mo",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      popular: true,
    },
    {
      title: "Premium",
      price: "$50/mo",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-20">
      <div className="mb-10 ">
        <h2 className="text-white text-2xl md:text-4xl font-bold">
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
    </div>
  );
};

export default Pricing;
