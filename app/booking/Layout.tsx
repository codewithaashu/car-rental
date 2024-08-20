"use client";
import CarsCatalog from "@/components/CarsCatalog";
import Footer from "@/components/Footer";
import React from "react";

const Layout = () => {
  return (
    <>
      <main className="min-h-screen ">
        <div className="px-5 sm:px-10 md:px-20">
          <CarsCatalog />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
