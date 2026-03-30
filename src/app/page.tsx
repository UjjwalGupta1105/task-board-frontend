"use client";
import { redirect } from "next/navigation";
import { useIsAuthenticated } from "@/utils/useIsAutheticated";
import { useEffect } from "react";
import { setUser } from "@/features/setUser/setUser";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      const data = await useIsAuthenticated();
      if (data) {
        const user: User = {
          id: data.id,
          fullName: data.fullName,
          email: data.email,
        };
        dispatch(setUser(user));
      }
    }

    checkAuth();
  }, []);

  redirect("/signup");
  return <div>Welcome to Task_Board</div>;
}
