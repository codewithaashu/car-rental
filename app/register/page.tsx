import RegisterForm from "@/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - CarLand",
  description:
    "Book the selected car effortlessly. Pay for Driving Only, Book the Car Now",
};
const page = () => {
  return (
    <>
      <div className="bg-[#F1F2F6] min-h-screen w-full flex justify-center items-center">
        <div className="p-7 flex flex-col gap-2 rounded-lg border-2 border-gray-200 shadow-lg bg-white w-11/12 md:w-1/4">
          <RegisterForm />
        </div>
      </div>
    </>
  );
};

export default page;
