"use client";
import { Outfit } from "next/font/google";
import "./globals.css";
import { SearchDataContext } from "@/context/SearchDataContext";
import { CarsContext } from "@/context/CarsContext";
import { CarsErrorMessageContext } from "@/context/CarsErrorMessageContext";
import { useState } from "react";
import { BookingContext } from "@/context/BookingContext";
import { ConfirmBookingContext } from "@/context/ConfirmBookingContext";
import Authprovider from "@/components/Authprovider";
import { LoginUserContext } from "@/context/LoginUserContext";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchData, setSearchData] = useState<any>({
    city: null,
    pickUpDate: null,
    dropOffDate: null,
  });
  const [carsList, setCarsList] = useState<any>(null);
  const [carsErrorMessasge, setCarsErrorMessage] = useState<any>(null);
  const [bookingData, setBookingData] = useState<any>(null);
  const [confirmBookingData, setConfirmBookingData] = useState<any>(null);
  const [loginUser, setLoginUser] = useState<any>(null);
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Authprovider>
          <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            <SearchDataContext.Provider value={{ searchData, setSearchData }}>
              <CarsContext.Provider value={{ carsList, setCarsList }}>
                <CarsErrorMessageContext.Provider
                  value={{ carsErrorMessasge, setCarsErrorMessage }}
                >
                  <BookingContext.Provider
                    value={{ bookingData, setBookingData }}
                  >
                    <ConfirmBookingContext.Provider
                      value={{ confirmBookingData, setConfirmBookingData }}
                    >
                      {children}
                    </ConfirmBookingContext.Provider>
                  </BookingContext.Provider>
                </CarsErrorMessageContext.Provider>
              </CarsContext.Provider>
            </SearchDataContext.Provider>
          </LoginUserContext.Provider>
        </Authprovider>
      </body>
    </html>
  );
}
