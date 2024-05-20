import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "authSlice",
    initialState : {
        token : localStorage.getItem('token')
    },
    reducers : {
        setToken : (state,action) => {
            state.token = action.payload
        },
        logout: (state) => {
            state.token = null
        }
    }
});

export const {setToken , logout} = authSlice.actions;
export default authSlice.reducer;