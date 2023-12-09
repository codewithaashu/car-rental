"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SearchDataContext } from "@/context/SearchDataContext";
import { CarsContext } from "@/context/CarsContext";
import { CarsErrorMessageContext } from "@/context/CarsErrorMessageContext";
import { useState } from "react";
import { BookingContext } from "@/context/BookingContext";

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
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <SearchDataContext.Provider value={{ searchData, setSearchData }}>
            <CarsContext.Provider value={{ carsList, setCarsList }}>
              <CarsErrorMessageContext.Provider
                value={{ carsErrorMessasge, setCarsErrorMessage }}
              >
                <BookingContext.Provider
                  value={{ bookingData, setBookingData }}
                >
                  {children}
                </BookingContext.Provider>
              </CarsErrorMessageContext.Provider>
            </CarsContext.Provider>
          </SearchDataContext.Provider>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
