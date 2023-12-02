import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
const Header = () => {
  return (
    <div className="flex justify-between p-5 items-center border-b-2 shadow-sm">
      <div>
        <Image src="/logo.svg" alt="Logo" width="100" height="10" />
      </div>
      <div
        className="hidden md:flex  w-max gap-6
      . cursor-pointer"
      >
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          Home
        </h2>
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          Booking
        </h2>
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          About
        </h2>
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          Contact Us
        </h2>
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          Privacy Policy
        </h2>
        <h2 className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600">
          Terms & Conditions
        </h2>
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Header;
