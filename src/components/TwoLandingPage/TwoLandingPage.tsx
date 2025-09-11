import React from "react";
import image22 from "../../../public/image/image22.png";
import image23 from "../../../public/image/image23.png";
import Image from "next/image";

const TwoLandingPage = () => {
  return (
    <div className="py-10 flex justify-center">
      {/* Scrollable container */}
      <div className="overflow-x-auto">
        <div className="whitespace-nowrap inline-block">
          <Image
            src={image23}
            alt="image"
            width={800}
            height={500}
            className="inline-block w-[400px] h-[250px] mr-5 object-cover"
          />
          <Image
            src={image22}
            alt="image"
            width={800}
            height={500}
            className="inline-block w-[400px] h-[250px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoLandingPage;
