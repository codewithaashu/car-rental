import { Metadata } from "next";
import React, { Suspense } from "react";
import Layout from "./Layout";

export const metadata: Metadata = {
  title: "Contact Us - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <Suspense>
      <Layout />
    </Suspense>
  );
};

export default page;
