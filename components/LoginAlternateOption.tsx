"use client";
import { useSession, signIn, signOut } from "next-auth/react";
const LoginAlternateOption = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col gap-3">
      <div className="divider text-gray-600">Or</div>
      <div className="flex flex-col gap-5">
        <div className="bg-[#4267b2] text-white flex p-3 items-center justify-evenly rounded-md cursor-pointer text-base font-semibold">
          <i className="fa-brands fa-facebook" color="#0171d3"></i>
          <h2>Login with Facebook</h2>
        </div>
        <div
          className="border-[1px] bg-white border-[#CACACA] text-gray-700 flex p-3 items-center justify-evenly rounded-md cursor-pointer text-base font-semibold"
          onClick={() => signIn("google")}
        >
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702476682/1200px-Google__22G_22_logo.svg_qo1yvp.png"
            alt="Google logo"
            className="h-[24px]"
          />
          <h2>Login with Google</h2>
        </div>
        <div
          className="border-[1px] bg-white border-[#CACACA] text-gray-700 flex p-3 items-center justify-evenly rounded-md cursor-pointer text-base font-semibold"
          onClick={() => signIn()}
        >
          <img
            src="https://res.cloudinary.com/ddzlhdlda/image/upload/v1702477114/25231_ej39nb.png"
            alt="Google logo"
            className="h-[24px]"
          />
          <h2>Login with Github</h2>
        </div>
      </div>
    </div>
  );
};

export default LoginAlternateOption;
