"use client";

import React from "react";
import image26 from "../../../public/image/image26.png";
import image27 from "../../../public/image/image27.png";
import image28 from "../../../public/image/image28.png";
import CardCase from "./CardCase/CardCase";
import ButtonPrimary from "../ui/ButtonPrimary";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
    <div className="mx-auto py-10 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-white text-2xl md:text-4xl font-semibold">
          Case Studies
        </h2>
        <p className="text-gray-400">See the designs that delivered results</p>
      </div>

      {/* Mobile view */}
      <div className="flex flex-col gap-6 px-4 md:hidden">
        {caseStudiesData.map((item, index) => (
          <CardCase
            key={index}
            image={item.image}
            title={item.title}
            features={item.features}
          />
        ))}
      </div>

      {/* Desktop view with Swiper auto slider */}
      <div className="hidden md:block px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={2} // show 2 slides side by side
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {caseStudiesData.map((item, index) => (
            <SwiperSlide key={index}>
              <CardCase
                image={item.image}
                title={item.title}
                features={item.features}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-fit md:w-1/4 mx-auto mt-10">
        <ButtonPrimary text="I want similar results" />
      </div>
    </div>
  );
};

export default CaseStudies;
