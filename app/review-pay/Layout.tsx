"use client";
import CostSummary from "@/components/CostSummary";
import RememberPoints from "@/components/RememberPoints";
import RentDetails from "@/components/RentDetails";
import { BookingContext } from "@/context/BookingContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";

const Layout = () => {
  const router = useRouter();
  const { bookingData } = useContext(BookingContext);

  const handleSubmit = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col px-5 sm:px-10 md:px-20 py-10 gap-5">
      {bookingData ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <RentDetails bookingData={bookingData} />
            <CostSummary bookingData={bookingData} />
          </div>
          <div>
            <RememberPoints />
          </div>
        </>
      ) : (
        <main className="flex min-w-full justify-center items-center">
          <div className="flex flex-col items-center pt-20">
            <img
              src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702110286/CarRental/9318694_hfwfbc.jpg"
              alt="Car Not Found"
              className="w-[180px]"
            />
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-2xl font-bold">Result Not Found</h2>
              <h2 className="text-base font-normal text-gray-500">
                Oops .... This information is not available for this moment. Try
                Again
              </h2>
              <button
                className="text-white text-base font-medium px-5 py-3 rounded-md bg-red-500 w-fit my-5"
                onClick={handleSubmit}
              >
                Go to Home
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default Layout;
