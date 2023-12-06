import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="hidden md:flex justify-between p-5 items-center border-b-2 shadow-sm">
        <div>
          <Image src="/logo.svg" alt="Logo" width="100" height="10" />
        </div>
        <div
          className="flex  w-max gap-6
      . cursor-pointer"
        >
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/booking"
          >
            Booking
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/about"
          >
            About
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/contact-us"
          >
            Contact Us
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black hover:border-b-[3px] border-red-600"
            href="/terms-conditions"
          >
            Terms & Conditions
          </Link>
        </div>
        <div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="navbar bg-base-100 md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/booking"
                >
                  Booking
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-base text-gray-600 font-semibold cursor-pointer hover:text-black "
                  href="/terms-conditions"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <Image src="/logo.svg" alt="Logo" width="100" height="10" />
          </a>
        </div>
        <div className="navbar-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </>
  );
};

export default Header;
