"use client";
import CarBrand from "@/components/CarBrand";
import ChooseUs from "@/components/ChooseUs";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Search from "@/components/Search";
import Testinomial from "@/components/Testinomial";
import LoginAlternateOption from "@/components/LoginAlternateOption";
import LoginForm from "@/components/LoginForm";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { LoginUserContext } from "@/context/LoginUserContext";
import Footer from "@/components/Footer";
import axios from "axios";
import Loader from "./Loader";

const RenderPage = () => {
  const { loginUser, setLoginUser } = useContext(LoginUserContext);
  const { data, status } = useSession();

  const registerAuthenticateUser = async () => {
    try {
      const { name, email, image }: any = data?.user;
      const res = await axios.post("/api/login", { email });
      if (res.data) {
        return;
      } else {
        const registerUser = await axios.post("/api/register", {
          name,
          email,
          image,
        });
      }
    } catch (err) {
      throw err;
    }
  };
  //stored data of user who has login by oauth
  useEffect(() => {
    if (status === "authenticated") {
      registerAuthenticateUser();
    }
    if (data) {
      setLoginUser(data?.user);
    }
  }, [status]);
  // setLoginUser(data?.user);
  //user try to login by login button
  if (loginUser) {
    return (
      <>
        <main className="min-h-screen ">
          <div className="my-7">
            <Hero />
            <Search />
            <CarBrand />
            <HowWorks />
            <ChooseUs />
            <Testinomial />
          </div>
        </main>
        <Footer />
      </>
    );
  }
  //user try to login by oauth
  if (status === "loading") {
    return <Loader />;
  } else if (status === "unauthenticated") {
    return (
      <div className="bg-[#F1F2F6] min-h-screen w-full flex justify-center items-center">
        <div className="p-7 flex flex-col gap-2 rounded-lg border-2 border-gray-200 shadow-lg bg-white w-11/12 md:w-1/4">
          <LoginForm setLoginUser={setLoginUser} />
          <LoginAlternateOption />
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen ">
        <div className="my-7">
          <Hero />
          <Search />
          <CarBrand />
          <HowWorks />
          <ChooseUs />
          <Testinomial />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RenderPage;
