"use client";

import React from "react";
import image26 from "../../../public/image/image26.png";
import image27 from "../../../public/image/image27.png";
import image28 from "../../../public/image/image28.png";
import { motion } from "framer-motion";
import CardCase from "./CardCase/CardCase";
import ButtonPrimary from "../ui/ButtonPrimary";

const caseStudiesData = [
  {
    image: image26,
    title: "Flowpilot",
    features: ["Improved UX", "Boosted Conversion"],
  },
  {
    image: image27,
    title: "Flowpilot",
    features: ["Faster Checkout", "Better SEO"],
  },
  {
    image: image28,
    title: "GrowthSummit",
    features: ["Real-Time Analytics", "Dark Mode Support"],
  },
  {
    image: image27,
    title: "GrowthSummit",
    features: ["Interactive Animations", "SEO Optimized"],
  },
];

const CaseStudies = () => {
  return (
    <div className="py-10 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Case Studies
        </h2>
        <p className="text-gray-400">See the designs that delivered results</p>
      </div>

      <div className="flex flex-col gap-6 px-4 md:hidden">
        {caseStudiesData.map((item, index) => (
          <div key={index}>
            <CardCase
              image={item.image}
              title={item.title}
              features={item.features}
            />
          </div>
        ))}
      </div>

      <div className="hidden md:block overflow-hidden">
        <motion.div
          className="flex gap-6 px-4"
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
        >
          {caseStudiesData.map((item, index) => (
            <motion.div
              key={index}
              className="shrink-0 md:w-[50%] lg:w-[33%] cursor-grab active:cursor-grabbing"
            >
              <CardCase
                image={item.image}
                title={item.title}
                features={item.features}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-fit md:w-1/4 mx-auto mt-10">
        <ButtonPrimary text="I want similar results" />
      </div>
    </div>
  );
};

export default CaseStudies;
