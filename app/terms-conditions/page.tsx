import { Metadata } from "next";
import React from "react";
import Terms from "./Terms";

export const metadata: Metadata = {
  title: "Terms & Conditions - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <Terms />
    </>
  );
};

export default page;
