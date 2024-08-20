import { Metadata } from "next";
import Privacy from "./Privacy";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Privacy Policy - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <Suspense>
        <Privacy />
      </Suspense>
    </>
  );
};

export default page;
