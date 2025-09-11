"use client";
import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ButtonSecondary from "@/components/ui/ButtonSecondary";

interface PlanCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  price,
  description,
  features,
  popular,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative bg-[#182420] p-6 md:p-8 rounded-xl shadow-md flex flex-col gap-4 ${
        popular ? "border-2 border-foreground" : ""
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-4 bg-[#151E1B] border-2 border-foreground  font-bold px-3 py-1 rounded-full text-sm shadow-lg z-10 ">
          Most Popular
        </div>
      )}

      <div className="flex justify-between">
        <div className="">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400 ">{description}</p>
        </div>
        <p className="text-3xl font-bold ">{price}</p>
      </div>
      <hr className="border-gray-600 my-4" />
      <ul className="flex flex-col gap-2 mt-4">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-400 ">
            <span className="text-foreground text-xl">•</span>{" "}
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {popular ? (
        <ButtonPrimary text="Start my project" />
      ) : (
        <ButtonSecondary text="Start my project" />
      )}
    </motion.div>
  );
};

export default PlanCard;
