// Banner.jsx
import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import GetForm from "../GetForm/GetForm";

const Banner = () => {
  return (
    <div className="relative bg-[radial-gradient(circle_at_top_center,#2D3333_0%,#151E1B_60%)]">
      <div className="max-w-[1440px] mx-auto ">
        <Header />

        <div className="max-w-6xl py-10 md:py-30 text-center justify-center mx-auto px-5 md:px-0">
          <div className="bg-[#151E1B] rounded-2xl border-t border-foreground flex gap-2 mx-auto justify-center py-1 w-fit px-5 ">
            <Image
              src="/image/banner/Sparkle.png"
              alt="Star"
              width={15}
              height={15}
              className="w-4 h-4 my-auto"
            />
            <p className="text-gray-400">
              Trusted by 30+ startups & entrepreneurs worldwide
            </p>
          </div>

          <p className="text-4xl md:text-7xl font-semibold text-white mt-5">
            Strategic Landing Pages That Convert From Just{" "}
            <span className="text-foreground">$200</span>
          </p>
          <p className="text-gray-400 my-5">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
    <GetForm/>

        </div>
      </div>
    </div>
  );
};

export default Banner;
