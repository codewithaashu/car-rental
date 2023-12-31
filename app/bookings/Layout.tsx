"use client";
import BookingCard from "@/components/BookingCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoginUserContext } from "@/context/LoginUserContext";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import Loader from "../Loader";

const Layout = () => {
  const router = useRouter();
  const { loginUser, setLoginUser } = useContext(LoginUserContext);
  const [allBookings, setAllBookings] = useState<any>(null);
  const handleSubmit = () => {
    router.push("/");
  };
  const getAllBookings = async () => {
    const { data } = await axios.post("/api/getBookings", {
      email: loginUser.email,
    });
    setAllBookings(data?.bookingIDs);
    console.log(data?.bookingIDs);
  };
  useEffect(() => {
    if (!loginUser?.email) {
      router.push("/");
      return;
    } else {
      getAllBookings();
    }
  }, []);
  return (
    <>
      {allBookings ? (
        <>
          <Header />
          <main className="min-h-screen ">
            <div className="px-5 sm:px-10 md:px-20">
              <center className="text-xl md:text-2xl font-semibold py-7">
                All Bookings
              </center>
              {allBookings.length === 0 ? (
                <main className="flex min-w-full justify-center items-center">
                  <div className="flex flex-col items-center pt-20">
                    <img
                      src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1701796475/CarRental/resetCarFilter_htbxnz.svg"
                      alt="Car Not Found"
                      className="w-[140px]"
                    />
                    <div className="flex flex-col items-center gap-1">
                      <h2 className="text-2xl font-bold">No Bookings Found</h2>
                      <h2 className="text-base font-normal text-gray-500">
                        Rent a car is affordable, flexible, convenient, and
                        hassle-free.
                      </h2>
                      <button
                        className="text-white text-base font-medium px-5 py-3 rounded-md bg-red-500 w-fit my-5"
                        onClick={handleSubmit}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </main>
              ) : (
                <div className="flex flex-col gap-5">
                  {allBookings.map((curr: any, index: any) => {
                    return <BookingCard key={index} details={curr} />;
                  })}
                </div>
              )}
            </div>
          </main>

          <Footer />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Layout;
