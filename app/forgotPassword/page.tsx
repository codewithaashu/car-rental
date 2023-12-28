import ForgetPasswordForm from "@/components/ForgetPasswordForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Forgot Password - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <div className="bg-[#F1F2F6] min-h-screen w-full flex justify-center items-center">
        <div className="px-7 py-10 flex flex-col gap-2 rounded-lg border-2 border-gray-200 shadow-lg bg-white w-11/12 md:w-1/4">
          <ForgetPasswordForm />
        </div>
      </div>
    </>
  );
};

export default page;
