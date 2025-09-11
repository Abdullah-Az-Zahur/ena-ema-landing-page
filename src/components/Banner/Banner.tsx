// Banner.jsx
import React from "react";
import Header from "../Header/Header";

const Banner = () => {
  return (
    <div className="relative bg-[#151E1B]">
      {/* Glow Effect - ABOVE background */}
      <div
        className="absolute -z-0 w-full h-[300px] bg-[radial-gradient(ellipse_at_center,_#1FFFA5_0%,_transparent_40%)] blur-3xl opacity-70 -top-20 left-1/2 -translate-x-1/2"
      />
      
      <Header />

      <div >

      </div>
    </div>
  );
};

export default Banner;
