import {createSlice} from "@reduxjs/toolkit";

const loginAuthSlice = createSlice({
        name:'loginAuth',
        initialState: { isAuthenticated: false },
        reducers: {
                login(state){ // action 1 (functions, methods)
                        state.isAuthenticated = true;
                },
                logout(state){ // action 2 (functions, methods)
                        state.isAuthenticated = false;
                }
        }
})

export const {login, logout} = loginAuthSlice.actions;
export default loginAuthSlice.reducer;