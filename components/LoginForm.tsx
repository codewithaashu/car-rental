"use client";
import axios from "axios";
import React, { useState } from "react";

const LoginForm = ({ setIsRefresh, setLoginUser }: any) => {
  const [formValue, setFormValue] = useState<any>({ email: "", password: "" });
  const handleInput = (e: any) => {
    const inputValue = e.target.value;
    setFormValue({ ...formValue, [e.target.name]: inputValue });
  };
  const getData = async (email: any) => {
    const { data } = await axios.post("/api/login", { email });
    return data;
  };
  const handleSubmit = async () => {
    const { email, password } = formValue;
    if (!email || !password) {
      alert("Please fill all the fields");
      return;
    }
    //api call
    const apiData = await getData(email);
    console.log(
      password,
      apiData.password,
      apiData.password === password,
      apiData
    );

    if (apiData.password !== password) {
      alert("Invalid login crediantial");
      return;
    }
    setLoginUser(apiData);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-xl font-semibold pb-7">Login</h2>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-3 w-full">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input text-sm font-normal placeholder-gray-600 input-bordered w-full focus:outline-none"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input text-sm font-normal placeholder-gray-600 input-bordered w-full focus:outline-none "
              name="password"
              onChange={handleInput}
            />
          </div>
          <h2 className="text-sm font-medium text-red-400 text-center">
            Forgot Password?
          </h2>
        </div>
        <button
          className="px-5 py-3 rounded-md border-2 border-red-400 bg-red-500 text-white text-base font-semibold"
          onClick={handleSubmit}
        >
          Login
        </button>
        <h2 className="text-sm font-medium text-gray-400 text-center">
          Don't have an account?{" "}
          <span className="text-red-400">Register Now</span>
        </h2>
      </div>
    </div>
  );
};

export default LoginForm;
