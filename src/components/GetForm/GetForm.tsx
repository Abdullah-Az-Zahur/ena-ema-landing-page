"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import Lock from "../../../public/image/icon/Lock.png";
import Check from "../../../public/image/icon/CheckBlack.png";
import Star from "../../../public/image/icon/Star.png";
const GetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const InputWithIcon = ({
    name,
    placeholder,
    value,
    iconPath,
    type = "text",
  }: {
    name: string;
    placeholder: string;
    value: string;
    iconPath: string; // path as string
    type?: string;
  }) => (
    <div className="relative flex-1 mb-2 md:mb-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Image src={iconPath} alt={`${name} icon`} width={20} height={20} />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full pl-10 px-4 py-3 rounded-md border border-gray-600 bg-[#1B2621] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        required
      />
    </div>
  );

  return (
    <div className="max-w-[800px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-[#151E1B] p-6 rounded-lg shadow shadow-foreground flex flex-col gap-4 "
      >
        <div className="flex flex-col md:flex-row md:gap-4">
          <InputWithIcon
            name="name"
            placeholder="Your Name"
            value={formData.name}
            iconPath="/image/icon/User.png"
          />
          <InputWithIcon
            name="email"
            placeholder="Email"
            value={formData.email}
            iconPath="/image/icon/EnvelopeSimpleOpen.png"
            type="email"
          />
          <InputWithIcon
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            iconPath="/image/icon/Phone.png"
            type="tel"
          />
        </div>

        <div className="mt-4 w-full">
          <ButtonPrimary text="Get my high-converting landing page" />
        </div>
      </form>
      <div className="grid grid-cols-3 justify-between my-4">
        <div className="items-center justify-center my-auto flex gap-2">
          <Image src={Lock} alt="Lock" width={16} height={16} className="" />
          <p className="text-gray-400 ">SSL secure</p>
        </div>
        <div className="items-center justify-center my-auto flex gap-2">
          <Image src={Check} alt="Lock" width={16} height={16} className="" />
          <p className="text-gray-400 ">Money-back guaranteed</p>
        </div>
        <div className="items-center justify-center my-auto flex gap-2">
          <Image src={Star} alt="Lock" width={16} height={16} className="" />
          <p className="text-gray-400 ">Satisfaction guaranteed</p>
        </div>
      </div>
    </div>
  );
};

export default GetForm;
