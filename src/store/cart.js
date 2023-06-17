import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalPrice: 0,
    initial: true,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalPrice = action.payload.totalPrice;
      state.cart = action.payload.cart;
      state.initial = true;
    },
    addProduct(state, action) {
      state.initial = false;
      const newProduct = action.payload;
      state.totalPrice += newProduct.quantity * newProduct.price;
      const existProduct = state.cart.find((el) => el.id === newProduct.id);
      console.log(newProduct);

      if (existProduct) {
        existProduct.quantity += newProduct.quantity;
      } else {
        state.cart.push(newProduct);
        console.log(state.cart);
      }
    },
    decrementProduct(state, action) {
      state.initial = false;
      const product = action.payload;
      state.totalPrice -= product.price;
      const existProduct = state.cart.find((el) => el.id === product.id);
      if (existProduct.quantity === 1) {
        const updateCart = state.cart.filter((el) => el.id !== product.id);
        state.cart = updateCart;
      } else {
        existProduct.quantity--;
      }
    },
    remomveProduct(state, action) {
      state.initial = false;
      const product = action.payload;
      state.totalPrice -= product.price * product.quantity;
      const updateCart = state.cart.filter((el) => el.id !== product.id);
      state.cart = updateCart;
    },
  },
});
export default cartSlice;
export const cartAction = cartSlice.actions;
