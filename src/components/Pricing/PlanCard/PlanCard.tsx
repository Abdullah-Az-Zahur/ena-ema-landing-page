"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";

interface PlanCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  features,
  popular,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative bg-[#182420] p-6 rounded-xl shadow-md flex flex-col gap-4 ${
        popular ? "border-2 border-foreground" : ""
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-4 bg-[#151E1B] border-2 border-foreground  font-bold px-3 py-1 rounded-full text-sm shadow-lg z-10 ">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-3xl font-extrabold text-white">{price}</p>
      <ul className="flex flex-col gap-2 mt-4">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300">
            • {feature}
          </li>
        ))}
      </ul>

      {popular ? (
        <div className="mt-auto px-4 py-2 rounded-lg">
          <ButtonPrimary text="Start my project" />
        </div>
      ) : (
        <ButtonSecondary text="Start my project" />
      )}
    </motion.div>
  );
};

export default PlanCard;
