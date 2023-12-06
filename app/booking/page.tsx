import CarsCatalog from "@/components/CarsCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <main className="min-h-screen ">
      <div className="px-5 sm:px-10 md:px-20">
        <CarsCatalog />
      </div>
    </main>
  );
};

export default page;
