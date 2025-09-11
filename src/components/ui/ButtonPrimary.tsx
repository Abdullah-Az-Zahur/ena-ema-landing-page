import React from "react";
import { motion } from "framer-motion";
import arrow from "../../../public/image/ArrowRight.png";
import Image from "next/image";

interface ButtonPrimaryProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  text,
  link,
  onClick,
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center w-full justify-center gap-2 mx-auto bg-foreground text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300"
      onClick={onClick}
    >
      {text}
      <Image
        src={arrow}
        alt="Arrow Right"
        width={16}
        height={16}
        className="items-center"
      />
    </motion.button>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ButtonPrimary;
