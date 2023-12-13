"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PrintPage from "@/components/PrintPage";
import { ConfirmBookingContext } from "@/context/ConfirmBookingContext";
import React, { useContext, useRef } from "react";
import ReactToPrint from "react-to-print";
import { LoginUserContext } from "@/context/LoginUserContext";
import { useRouter } from "next/navigation";
const Layout = () => {
  const ref: any = useRef<HTMLDivElement>();
  const { confirmBookingData, setConfirmBookingData } = useContext(
    ConfirmBookingContext
  );
  const router = useRouter();
  const { loginUser } = useContext(LoginUserContext);
  if (!loginUser) {
    router.push("/");
    return;
  }
  return (
    <>
      <Header />
      <main className="flex min-w-full justify-center items-center my-10">
        <div className="flex flex-col items-center rounded-md border-2 border-gray-100 shadow-md p-5 w-11/12 md:w-3/4">
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702212959/CarRental/15589499_5631866_kbmfd1.svg"
            alt="Confirm Booking"
            className="w-[180px]"
          />
          <div className="flex flex-col items-center gap-1">
            <h2 className="text-2xl font-bold">Booking Confirmed</h2>
            <h2 className=" text-green-600 text-base font-medium w-fit text-center pt-2">
              Cogratulations, Your booking is successfully placed.
            </h2>
            <ReactToPrint
              bodyClass="print-agreement"
              content={() => ref.current}
              trigger={() => (
                <button className="text-white text-base font-medium px-5 py-3 rounded-md bg-red-500 w-fit my-5 flex gap-2">
                  Print Reciept{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                      />
                    </svg>
                  </span>
                </button>
              )}
            />
          </div>
        </div>
      </main>
      <div style={{ display: "none" }}>
        <div ref={ref}>{confirmBookingData && <PrintPage />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
