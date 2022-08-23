import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { loggedIn: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

export default authSlice.reducer
export const authActions = authSlice.actions;
