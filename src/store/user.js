import { createSlice, configureStore } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    replaceUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice;
