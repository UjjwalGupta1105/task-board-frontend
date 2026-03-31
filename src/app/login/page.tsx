"use client";

import LogInForm from "@/components/LoginForm/loginForm";
import TripleDotLoader from "@/components/TripleDotLoader/TripleDotLoader";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store.config";

export default function LoginPage() {
  const user = useSelector((state: RootState) => state.userDetails.user);

  return (
    <div className="font-poppins h-full w-full bg-white text-black">
      <div className="flex h-full w-full items-center justify-center p-2">
        <div className="flex h-[350px] w-[100%] items-center justify-center overflow-y-scroll rounded-2xl shadow-xs shadow-black sm:w-auto">
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
