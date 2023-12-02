"use client";
import CarsCatalog from "@/components/CarsCatalog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import { CarsContext } from "@/context/CarsContext";
import { CarsErrorMessageContext } from "@/context/CarsErrorMessageContext";
import { SearchDataContext } from "@/context/SearchDataContext";
import { useState } from "react";

export default function Home() {
  const [searchData, setSearchData] = useState<any>({
    city: null,
    pickUpDate: null,
    dropOffDate: null,
  });
  const [carsList, setCarsList] = useState<any>(null);
  const [carsErrorMessasge, setCarsErrorMessage] = useState<any>(null);
  return (
    <main className="min-h-screen ">
      <Header />
      <SearchDataContext.Provider value={{ searchData, setSearchData }}>
        <CarsContext.Provider value={{ carsList, setCarsList }}>
          <CarsErrorMessageContext.Provider
            value={{ carsErrorMessasge, setCarsErrorMessage }}
          >
            <div className="px-5 sm:px-10 md:px-20">
              <Hero />
              <Search />
              <CarsCatalog />
            </div>
          </CarsErrorMessageContext.Provider>
        </CarsContext.Provider>
      </SearchDataContext.Provider>
      <Footer />
    </main>
  );
}
