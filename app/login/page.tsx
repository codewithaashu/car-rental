import LoginAlternateOption from "@/components/LoginAlternateOption";
import LoginForm from "@/components/LoginForm";

const page = () => {
  return (
    <div className="bg-[#F1F2F6] min-h-screen w-full flex justify-center items-center">
      <div className="py-7 px-5 flex flex-col gap-2 rounded-lg border-2 border-gray-200 shadow-lg bg-white w-1/2 md:w-1/4">
        <LoginForm />
        <LoginAlternateOption />
      </div>
    </div>
  );
};

export default page;
