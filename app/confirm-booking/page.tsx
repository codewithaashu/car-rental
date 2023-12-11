import React from "react";
import Layout from "./Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confirm Booking - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default page;
