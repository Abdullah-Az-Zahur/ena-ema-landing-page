"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import StarFull from "../.././../../public/image/icon/StarFull.png";
import StarEmpty from "../.././../../public/image/icon/StarEmpty.png";

interface ReviewCardProps {
  image: StaticImageData;
  rating: number;
  name: string;
  designation: string;
  review: string;
  delay?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  image,
  rating,
  name,
  designation,
  review,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="bg-[#182420] p-6 rounded-2xl shadow-lg flex flex-col gap-4"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src={i < rating ? StarFull : StarEmpty}
            alt="star"
            width={20}
            height={20}
          />
        ))}
      </div>

      {/* Review with double quotes */}
      <p className="text-gray-300 text-sm italic md:w-fit w-[314px]">“{review}”</p>

      {/* User Info */}
      <div className="flex items-center gap-4 mt-4">
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
