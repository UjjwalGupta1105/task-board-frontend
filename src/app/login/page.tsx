import LogInForm from "@/components/LoginForm/loginForm";
import TripleDotLoader from "@/components/TripleDotLoader/TripleDotLoader";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export default function Page() {
  return (
    <div className=" text-black bg-white font-poppins h-full w-full ">
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <div className="flex w-full h-full p-2 justify-center items-center">
        <div className=" w-[100%] h-[350px] sm:w-auto flex items-center justify-center rounded-2xl shadow-xs shadow-black overflow-y-scroll">
          <Suspense
            fallback={
              <div>
                <TripleDotLoader />
              </div>
            }
          >
            <LogInForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
