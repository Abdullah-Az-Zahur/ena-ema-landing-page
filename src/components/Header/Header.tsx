// Header.jsx
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="relative flex justify-center pt-5 md:pt-10">
      {/* Just Logo */}
      <Image
        src="/image/logo/Logo.svg"
        alt="Logo"
        width={240}
        height={54}
        className="relative z-10"
      />
    </header>
  );
};

export default Header;
