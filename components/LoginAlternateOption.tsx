"use client";
import { signIn } from "next-auth/react";
const LoginAlternateOption = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="divider text-gray-600 mt-3 mb-0">Or</div>
      <h2 className="text-gray-700 text-center text-base font-semibold">
        Login with
      </h2>
      <div className="flex w-full justify-evenly">
        <div onClick={() => signIn("facebook")}>
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702501361/CarRental/Facebook_Logo_2023_seqnrv.png"
            alt="Google logo"
            className="h-[24px] cursor-pointer"
          />
        </div>
        <div onClick={() => signIn("google")}>
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702501933/CarRental/1200px-Google__22G_22_logo.svg_qo1yvp_ehbg8f.png"
            alt="Google logo"
            className="h-[24px] cursor-pointer"
          />
        </div>
        <div onClick={() => signIn("github")}>
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702501958/CarRental/25231_ej39nb_mzrsfx.png"
            alt="Google logo"
            className="h-[24px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginAlternateOption;
