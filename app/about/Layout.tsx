"use client";

import AboutUs from "@/components/AboutUs";
import ExploreRentals from "@/components/ExploreRentals";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OurJourney from "@/components/OurJourney";
import Testinomial from "@/components/Testinomial";
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
      <div className="py-5">
        <AboutUs />
        <ExploreRentals />
        <OurJourney />
        <Testinomial />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
