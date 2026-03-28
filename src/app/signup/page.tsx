"use client";

import SignupForm from "@/components/SignupForm/Signupform";
import TripleDotLoader from "@/components/TripleDotLoader/TripleDotLoader";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";

export default function SignUpPage() {
  return (
    <div className="font-poppins h-full w-full bg-white text-black">
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
      <div className="flex h-full w-full items-center justify-center p-2">
        <div className="flex h-[500px] w-[100%] items-center justify-center overflow-y-scroll rounded-2xl shadow-xs shadow-black sm:w-auto">
          <Suspense
            fallback={
              <div>
                <TripleDotLoader />
              </div>
            }
          >
            <SignupForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
