import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userSession: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userSession.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
