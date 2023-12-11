import Available from "@/components/Available";
import MapBox from "@/components/MapBox";
import WriteToUs from "@/components/WriteToUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <div className="flex justify-center py-10 w-full">
        <div className="flex flex-col gap-5 w-full items-center  ">
          <WriteToUs />
          <div className="flex flex-col gap-5 ">
            <h2 className=" divider text-xl font-semibold text-gray-500 px-5 sm:px-10 md:px-20">
              Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5  px-5 sm:px-10 md:px-20 py-5">
              <Available />
              <MapBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
