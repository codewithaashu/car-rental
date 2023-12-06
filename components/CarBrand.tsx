"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CarBrand = () => {
  const [carBrands, setCarBrands] = useState<any>(null);
  useEffect(() => {
    getCarBrand();
  }, []);
  const getCarBrand = async () => {
    const { data } = await axios.get("/api/carBrands");
    setCarBrands(data?.carBrands);
  };
  return (
    <>
      <div className="flex flex-col gap-3 py-7 px-5 sm:px-10 md:px-20">
        <center>
          <h2 className="text-sm font-medium uppercase text-gray-500">
            Popular Car Brands
          </h2>
          <h2 className="text-xl font-semibold">
            Most popular car Brands deals
          </h2>
        </center>
        {carBrands ? (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-5 py-3">
            {carBrands?.slice(0, 6).map((curr: any, index: any) => {
              // if (!curr.featured) return;
              return (
                <div className="flex flex-col items-center gap-1" key={index}>
                  <img src={curr.imgSrc} alt="" className="w-[90px] h-[90px]" />
                  <h2 className="text-base font-medium">{curr.name}</h2>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex w-full justify-center py-3">
            <div className="flex flex-col gap-4 w-3/4 md:w-3/5">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarBrand;
