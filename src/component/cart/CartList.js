import classes from "./CartList.module.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function CartList() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className={classes.cartContainer}>
      <h2>SHOPPING CART</h2>
      <div className={classes.cart}>
        <div className={classes.cartList}>
          {cart.cart.length !== 0 && (
            <table cellSpacing="0">
              <thead>
                <tr>
                  <th>IMAGE</th>
                  <th className={classes.proCol}>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {cart.cart.map((el) => (
                  <CartItem key={el.id} product={el} />
                ))}
              </tbody>
            </table>
          )}
          {cart.cart.length === 0 && (
            <h1 className={classes.empty}>CART IS EMPTY</h1>
          )}
          <div className={classes.footer}>
            <Link to={"/shop"}>
              <i className="fa-solid fa-arrow-left-long"></i>
              Countinue shopping
            </Link>
            <Link to={"/checkout"} className={classes.gtcheckout}>
              Proceed to checkout
              <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
        <div className={classes.cartTotal}>
          <div className={classes.cartTotalContainer}>
            <h2>CART TOTAL</h2>
            <div className={classes.subtotal}>
              <h3>SUBTOTAL</h3>
              <p>{Number(cart.totalPrice).toLocaleString("en-US")} VND</p>
            </div>
            <div className={classes.total}>
              <h3>TOTAL</h3>
              <h3 className={classes.h3light}>
                {Number(cart.totalPrice).toLocaleString("en-US")} VND
              </h3>
            </div>
            <form>
              <input placeholder="Enter your coupon"></input>
              <button type="button">
                <i className="fa-sharp fa-solid fa-gift"></i> Apply coupon
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartList;
