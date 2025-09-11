import React from "react";
import User from "../../../public/image/icon/User.png";
import Palette from "../../../public/image/icon/Palette.png";
import RocketLaunch from "../../../public/image/icon/RocketLaunch.png";
import CardItem from "./CardItem/CardItem";

const Just5Days = () => {
  const cardData = [
    {
      icon: User,
      days: "Day 1",
      title: "User Research",
      description: "Understand your users and define the problem clearly.",
    },
    {
      icon: Palette,
      days: "Day 2 - 4",
      title: "Design & Prototype",
      description: "Build interactive prototypes and test your ideas fast.",
    },
    {
      icon: RocketLaunch,
      days: "Day 5",
      title: "Launch & Validate",
      description: "Release your product and validate with real users.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 py-20 grid gap-8 md:grid-cols-3 py-10 md:py-30">
      {cardData.map((item, index) => (
        <CardItem
          key={index}
          icon={item.icon}
          days={item.days}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Just5Days;
