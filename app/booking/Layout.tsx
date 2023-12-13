"use client";
import CarsCatalog from "@/components/CarsCatalog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
