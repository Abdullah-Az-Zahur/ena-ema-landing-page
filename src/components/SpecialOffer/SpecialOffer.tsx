import Image from "next/image";
import React from "react";
import Lightning from "../../../public/image/icon/Lightning.png";
import ButtonPrimary from "../ui/ButtonPrimary";

const SpecialOffer = () => {
  return (
    <div className="">
      <div className="mb-10 flex items-center gap-4 my-10">
        <div>
          <Image src={Lightning} alt="Lightning icon" width={36} height={36} />
        </div>
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold">
            Limited Availability
          </h2>
          <p className="text-gray-400 ">
            We only onboard 5 new clients per month. 2 spots left for this month
            — secure yours today.
          </p>
        </div>
      </div>

      <div className="bg-[#182420] p-6 md:p-8 rounded-xl shadow-md flex flex-col justify-between items-center gap-4">
        <div className="text-center my-5 mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            Special Offer For Early Clients
          </h2>
          <p className="text-gray-400">
            Get 10% OFF + Free Hosting Setup when you book this week.
          </p>
        </div>
        <div className="w-1/2 md:w-1/4 mx-auto mb-5">
          <ButtonPrimary text="Claim my 10% discount" />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
