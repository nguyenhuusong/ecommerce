import { cartAction } from "./cart";

export function fretchCart() {
  return async (dispatch) => {
    const cartData = await localStorage.getItem("cart");
    const cart = await JSON.parse(cartData);

    dispatch(
      cartAction.replaceCart({
        cart: cart?.cart || [],
        totalPrice: cart?.totalPrice || 0,
      })
    );
  };
}
