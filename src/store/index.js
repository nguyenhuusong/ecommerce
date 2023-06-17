import { createSlice, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import cartSlice from "./cart";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
  },
  reducers: {
    productReplace(state, action) {
      state.product = action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
});
export default store;
export const productAction = productSlice.actions;
