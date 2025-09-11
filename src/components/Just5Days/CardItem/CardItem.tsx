"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface CardItemProps {
  icon: StaticImageData;
  days: string;
  title: string;
  description: string;
}

const CardItem: React.FC<CardItemProps> = ({
  icon,
  days,
  title,
  description,
}) => {
  return (
    <motion.div
      className="relative bg-[#182420] p-6 rounded-2xl shadow-lg text-center flex flex-col items-center max-w-xs mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Floating Days Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <p className="bg-background text-foreground text-sm px-4 py-1 rounded-full shadow-md border border-foreground">
          {days}
        </p>
      </div>

      {/* Icon */}
      <div className=" mt-8 w-16 h-16 rounded-full bg-[#003D25] flex items-center justify-center shadow-md">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-semibold mt-4">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </motion.div>
  );
};

export default CardItem;
