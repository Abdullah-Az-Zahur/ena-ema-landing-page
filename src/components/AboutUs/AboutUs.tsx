"use client";

import { StaticImageData } from "next/image";
import user1 from "../../../public/image/user1.png";
import user2 from "../../../public/image/user2.png";
import user3 from "../../../public/image/user3.png";
import user4 from "../../../public/image/user4.png";
import ReviewCard from "./ReviewCard/ReviewCard";

interface Review {
  image: StaticImageData;
  rating: number;
  name: string;
  designation: string;
  review: string;
}

const reviews: Review[] = [
  {
    image: user1,
    rating: 5,
    name: "Sarah Johnson",
    designation: "SaaS Founder",
    review:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
  },
  {
    image: user2,
    rating: 4,
    name: "Mike Chen",
    designation: "Fitness Coach",
    review:
      "Fast, reliable, and professional. My conversions doubled and I'm getting more quality leads than ever before.",
  },
  {
    image: user3,
    rating: 5,
    name: "Amanda Rodriguez",
    designation: "E-Commerce Owner",
    review:
      "Best investment for my business. The ROI was immediate and substantial. Will definitely order again.",
  },
  {
    image: user4,
    rating: 4,
    name: "David Lee",
    designation: "SaaS Founder",
    review:
      "They delivered a landing page better than agencies charging 10x more. My conversion rate doubled within the first week!",
  },
];

const AboutUs = () => {
  return (
    <section className=" mx-auto px-5 md:px-0 py-16">
      <div className="md:text-center mb-10">
        <h2 className="text-white text-4xl font-semibold">
          What Our Clients Are Saying{" "}
          <span className="text-foreground">About Us</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Real feedback from real businesses who&apos;ve seen real results.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((item, index) => (
          <ReviewCard
            key={index}
            image={item.image}
            rating={item.rating}
            name={item.name}
            designation={item.designation}
            review={item.review}
          />
        ))}
      </div>

      {/* Mobile Scrollable Row */}
      <div className="md:hidden overflow-x-auto">
        <div className="flex gap-4 px-2 whitespace-nowrap">
          {reviews.map((item, index) => (
            <div
              key={index}
              className="inline-block min-w-[75%] flex-shrink-0"
            >
              <ReviewCard
                image={item.image}
                rating={item.rating}
                name={item.name}
                designation={item.designation}
                review={item.review}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
