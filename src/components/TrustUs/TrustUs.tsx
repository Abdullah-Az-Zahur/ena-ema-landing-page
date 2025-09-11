import React from "react";

import RocketLaunch from "../../../public/image/icon/RocketLaunch.png";
import Palette from "../../../public/image/icon/Palette.png";
import Lightning from "../../../public/image/icon/Lightning.png";
import CurrencyDollar from "../../../public/image/icon/CurrencyDollar.png";
import ArrowsClockwise from "../../../public/image/icon/ArrowsClockwise.png";
import Trophy from "../../../public/image/icon/Trophy.png";
import Card from "./CardTrust/CardTrust";

const cardData = [
  {
    icon: RocketLaunch,
    title: "Proven Conversion Framework",
    description:
      "Designs based on 100+ tested layouts that actually convert visitors into customers.",
  },
  {
    icon: Palette,
    title: "Agency Level Design",
    description:
      "Modern, premium, and tailored for your brand - without the agency price tag.",
  },
  {
    icon: Lightning,
    title: "5-day Guaranteed Delivery",
    description:
      "With a highly professional team, we deliver on time, everytime.",
  },
  {
    icon: CurrencyDollar,
    title: "Transparent Pricing",
    description:
      "No hidden fees, just clear value. What you see is what you pay. ",
  },
  {
    icon: ArrowsClockwise,
    title: "Revisions Until You're Happy",
    description:
      "We keep working until it's right. Your satisfaction is guaranteed.",
  },
  {
    icon: Trophy,
    title: "Results That Speak",
    description:
      "Our pages consistently outperform industry averages for conversions.",
  },
];

const TrustUs = () => {
  return (
    <div className="bg-[#151E1B] ">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="text-center mb-10">
          <h2 className="text-white text-2xl md:text-4xl">
            Why Businesses <span className="text-foreground">Trust Us</span>{" "}
            With Their Designs
          </h2>
          <p className="text-gray-400">
            We combine proven conversion frameworks with agency-level design to
            deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
