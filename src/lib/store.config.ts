import { configureStore } from "@reduxjs/toolkit";
import  authJwtToken  from "./reduxSlices/authJwtTokenSlice";
import userDetails  from "@/lib/reduxSlices/setUser";


export const store = configureStore({
  reducer: {
    authJwtToken,
    userDetails,
  },
});

export type RootState = ReturnType<typeof store.getState>;


