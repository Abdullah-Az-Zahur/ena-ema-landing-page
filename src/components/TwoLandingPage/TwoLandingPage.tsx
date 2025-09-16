"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import SizeDefault from "../../../public/image/SizeDefault.png";
import SizeDefault2 from "../../../public/image/SizeDefault2.png";
import SizeMobile from "../../../public/image/SizeMobile.png";
import SizeMobile2 from "../../../public/image/SizeMobile2.png";

const TwoLandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const defaultSlides = [SizeDefault, SizeDefault2];
  const mobileSlides = [SizeMobile, SizeMobile2];

  // Duplicate slides for looping on large screens
  const largeSlides = [...defaultSlides, ...defaultSlides];

  return (
    <div className="bg-[#151E1B] py-10 w-full flex justify-center">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        loop={true}
        speed={1000} // slide transition duration in ms
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
      >
        {isMobile
          ? mobileSlides.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Mobile Image ${index + 1}`}
                  width={382}
                  height={240}
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))
          : largeSlides.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt={`Image ${index + 1}`}
                  width={1280}
                  height={804}
                  className="w-full h-auto object-cover"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default TwoLandingPage;
