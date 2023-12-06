"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
const ExploreRentals = () => {
  const [rentalPlaces, setRentalPlaces] = useState<any>(null);
  const getRentalPlaces = async () => {
    const { data } = await axios.get("/api/rental-place");
    setRentalPlaces(data);
  };
  useEffect(() => {
    getRentalPlaces();
  }, []);
  return (
    <>
      <div className="flex flex-col py-7 items-center gap-5 bg-slate-50">
        <h2 className="text-xl md:text-2xl font-semibold">
          Explore Rentals in
        </h2>
        <div className="flex gap-5 p-3 w-full md:w-4/5 overflow-x-auto">
          {rentalPlaces ? (
            rentalPlaces
              .sort((r1: any, r2: any) => r1.order - r2.order)
              .map((curr: any, index: any) => {
                return (
                  <div className="flex flex-col gap-2 items-center" key={index}>
                    <img
                      src={curr.imgSrc}
                      alt={curr.placeName}
                      className="h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"
                    />
                    <h2 className="text-base font-medium">{curr.placeName}</h2>
                  </div>
                );
              })
          ) : (
            <>
              <center className="hidden md:flex gap-5 items-center">
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
              </center>
              <center className="flex md:hidden gap-5 items-center">
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
                <div className="skeleton h-[100px] md:h-[140px] rounded-md min-w-[150px] max-w-[155px]"></div>
              </center>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreRentals;
