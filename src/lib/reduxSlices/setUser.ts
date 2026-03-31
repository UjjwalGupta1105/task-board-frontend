import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from "@/types/User"

type InitialState={
  user: User | null,
};
const initialState: InitialState = {
  user: null,
};


const setUserSlice=createSlice({
    name: "userDetails",
     initialState, 
     reducers:{
         setUser: (state, action: PayloadAction<User>)=>{
            state.user =  action.payload;
        }
     }
})

export const {setUser}=setUserSlice.actions
export default setUserSlice.reducer