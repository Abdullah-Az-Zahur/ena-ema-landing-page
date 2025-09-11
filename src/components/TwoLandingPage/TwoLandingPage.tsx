import React from "react";
import image22 from "../../../public/image/image22.png";
import image23 from "../../../public/image/image23.png";
import Image from "next/image";

const TwoLandingPage = () => {
  return (
    <div className="bg-[#151E1B] flex justify-center py-10">
      <div className="md:flex gap-5">
        <Image src={image22} alt="image" width={800} height={500} />
        <Image src={image23} alt="image" width={800} height={500} />
      </div>
    </div>
  );
};

export default TwoLandingPage;
