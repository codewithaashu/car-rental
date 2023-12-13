import { Metadata } from "next";
import RenderPage from "./RenderPage";
export const metadata: Metadata = {
  title: "CarLand - Rental Car",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
export default function Home() {
  return <RenderPage />;
}
