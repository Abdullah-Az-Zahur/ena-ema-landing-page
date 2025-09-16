import React from "react";
import GetForm from "../GetForm/GetForm";

const RealCustomers = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto my-10 mt-20 px-5 md:px-30 text-center">
        <p className="text-4xl md:text-7xl font-semibold text-white">
          Ready to Turn Visitors Into
          <span className="text-foreground"> Real Customers?</span>
        </p>
        <p className="text-gray-400 my-5 px-10 md:px-30">
          Stop wasting traffic on generic pages. We deliver premium,
          conversion-focused landing pages designed, developed, and launched in
          just 5 days.
        </p>
        <GetForm />
      </div>
    </div>
  );
};

export default RealCustomers;
