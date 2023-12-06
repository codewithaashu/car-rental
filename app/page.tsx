import CarBrand from "@/components/CarBrand";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Search from "@/components/Search";
import Testinomial from "@/components/Testinomial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarLand - Rental Car",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="my-7">
        <Hero />
        <Search />
        <CarBrand />
        <HowWorks />
        <ChooseUs />
        <Testinomial />
      </div>
    </main>
  );
}
