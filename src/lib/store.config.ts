import { configureStore } from "@reduxjs/toolkit";
import  authJwtToken  from "../features/authJwtToken/authJwtTokenSlice";


export const store = configureStore({
  reducer: {
    authJwtToken: authJwtToken,
  },
});


