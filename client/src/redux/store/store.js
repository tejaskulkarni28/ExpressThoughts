import { configureStore } from "@reduxjs/toolkit";
import loginAuthReducer from "../slices/loginAuthSlice";

const store = configureStore({
        reducer:{
                loginAuthReducer: loginAuthReducer
        }
})

export default store;