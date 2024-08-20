import { Metadata } from "next";
import Privacy from "./Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <Privacy />
    </>
  );
};

export default page;
