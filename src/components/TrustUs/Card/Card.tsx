import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  icon: string | StaticImageData; // ✅ Accept both string and StaticImageData
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#182420] p-5 rounded-lg hover:shadow-lg hover:shadow-foreground/20 transition-all duration-300">
      <Image
        src={icon}
        alt={title}
        width={48}
        height={48}
        className="mb-4 md:mb-7"
      />
      <p className="text-white text-lg font-semibold">{title}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
