import AboutUs from "@/components/AboutUs";
import ExploreRentals from "@/components/ExploreRentals";
import OurJourney from "@/components/OurJourney";
import Testinomial from "@/components/Testinomial";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <div className="py-5">
        <AboutUs />
        <ExploreRentals />
        <OurJourney />
        <Testinomial />
      </div>
    </>
  );
};

export default page;
