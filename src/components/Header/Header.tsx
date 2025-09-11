// Header.jsx
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="relative flex justify-center pt-5 md:pt-10">
      <div className="w-1/3 md:w-full justify-center flex">
        <Image
        src="/image/logo/Logo.svg"
        alt="Logo"
        width={240}
        height={54}
        className="relative z-10"
      />
      </div>
    </header>
  );
};

export default Header;
