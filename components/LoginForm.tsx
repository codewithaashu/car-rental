import React from "react";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-xl font-semibold pb-7">Login</h2>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-3 w-full">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="input text-sm font-normal placeholder-gray-600 input-bordered w-full max-w-xs focus:outline-none"
              name="email"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input text-sm font-normal placeholder-gray-600 input-bordered w-full max-w-xs focus:outline-none "
              name="password"
            />
          </div>
          <h2 className="text-sm font-medium text-red-400 text-center">
            Forgot Password?
          </h2>
        </div>
        <button className="px-5 py-3 rounded-md border-2 border-red-400 bg-red-500 text-white text-base font-semibold">
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
