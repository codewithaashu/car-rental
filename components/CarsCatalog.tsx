"use client";
import React, { useContext, useEffect, useState } from "react";
import CarCard from "./CarCard";
import { CarsContext } from "@/context/CarsContext";

const CarsCatalog = () => {
  const { carsList } = useContext(CarsContext);
  const [carsCopyList, setCarsCopyList] = useState<any>(carsList);
  const [priceFilter, setPriceFilter] = useState<any>(null);
  const [manufactureFilter, setManufactureFilter] = useState<any>(null);
  useEffect(() => {
    setCarsCopyList(carsList);
  }, [carsList]);
  useEffect(() => {}, [priceFilter || manufactureFilter]);
  const handlePriceFilter = (e: any) => {
    const val = e.target.value;
    setPriceFilter(val);
    if (val === "-1") {
      setCarsCopyList(
        carsCopyList.sort((c1: any, c2: any) => c1.dailyPrice - c2.dailyPrice)
      );
    } else {
      setCarsCopyList(
        carsCopyList.sort((c1: any, c2: any) => c2.dailyPrice - c1.dailyPrice)
      );
    }
  };
  const handleManufactureFilter = (e: any) => {
    const val = e.target.value;
    setManufactureFilter(val);
    if (val === "All") {
      setCarsCopyList(carsList);
    } else {
      setCarsCopyList(
        carsList.filter((curr: any) => curr.manufactureCompany === val)
      );
    }
  };
  return (
    <div className="flex flex-col gap-4 py-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <div className="text-2xl font-bold">Cars Catalog</div>
          <div className="text-base font-medium">
            Explore our cars you might likes
          </div>
        </div>
        <div className="flex gap-2">
          <select
            className="select w-full max-w-xs bg-transparent text-base font-medium border-2 border-black focus:outline-none focus:border-black"
            onChange={handlePriceFilter}
          >
            <option
              disabled
              selected
              className="outline-none text-lg font-bold"
            >
              Price
            </option>
            <option className="text-base" value="-1">
              Low to High
            </option>
            <option className="text-base" value="1">
              High to Low
            </option>
          </select>
          <select
            className="select w-full max-w-xs bg-transparent text-base font-medium border-2 border-black focus:outline-none focus:border-black"
            onChange={handleManufactureFilter}
          >
            <option
              disabled
              selected
              className="outline-none text-lg font-bold"
            >
              Manufacture
            </option>
            <option className="text-base" value="All">
              All Car
            </option>
            <option className="text-base" value="Honda">
              Honda
            </option>
            <option className="text-base" value="Mazda">
              Mazda
            </option>
            <option className="text-base" value="BMW">
              BMW
            </option>
            <option className="text-base" value="Lexus">
              Lexus
            </option>
            <option className="text-base" value="Toyota">
              Toyota
            </option>
            <option className="text-base" value="Volvo">
              Volvo
            </option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-2 md:gap-5">
        {carsCopyList?.map((curr: any, index: any) => {
          return <CarCard car={curr} key={index} isModal={false} />;
        })}
      </div>
    </div>
  );
};

export default CarsCatalog;
