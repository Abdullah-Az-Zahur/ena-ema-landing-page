import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  features: string[];
}

const CardCase: React.FC<CardProps> = ({ image, title, features }) => {
  return (
    <div className="bg-[#151E1B] rounded-2xl shadow-lg p-4 flex flex-col  w-full">
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-contain" />
      </div>

      <div className="md:flex  justify-between">
        <h3 className="text-white text-lg">{title}</h3>
        <ul className="text-gray-400 text-sm mt-2 space-y-1 ">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className=" bg-[#003D25] flex gap-2 rounded-xl py-1 px-2 text-center w-fit md:ml-auto"
            >
              <Image
                src={"/image/icon/Check.png"}
                alt="check"
                width={16}
                height={16}
              />{" "}
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardCase;
