import classes from "./Cart.module.css";
import Banner from "../helper/Banner";
import CartList from "./CartList";

function Cart() {
  return (
    <div className={classes.cart}>
      <Banner title="Cart" />
      <CartList />
    </div>
  );
}
export default Cart;
