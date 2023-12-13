import { Metadata } from "next";
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
