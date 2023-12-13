"use client";
import Available from "@/components/Available";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MapBox from "@/components/MapBox";
import WriteToUs from "@/components/WriteToUs";
import { LoginUserContext } from "@/context/LoginUserContext";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
const Layout = () => {
  const router = useRouter();
  const { loginUser } = useContext(LoginUserContext);
  if (!loginUser) {
    router.push("/");
    return;
  }
  return (
    <>
      <Header />
      <div className="flex justify-center py-10 w-full">
        <div className="flex flex-col gap-5 w-full items-center  ">
          <WriteToUs />
          <div className="flex flex-col gap-5 ">
            <h2 className=" divider text-xl font-semibold text-gray-500 px-5 sm:px-10 md:px-20">
              Address
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5  px-5 sm:px-10 md:px-20 py-5">
              <Available />
              <MapBox />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
