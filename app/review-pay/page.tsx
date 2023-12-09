import Layout from "./Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review & Pay - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return <Layout />;
};

export default page;
