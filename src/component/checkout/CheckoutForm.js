import classes from "./CheckoutForm.module.css";
import { useSelector } from "react-redux";

function CheckoutForm() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>BILLING DETAILS</h2>
      <div className={classes.checkoutform}>
        <div className={classes.form}>
          <form>
            <label htmlFor="name">FULL NAME:</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Your Full Name Here!"
            />
            <label htmlFor="email">EMAIL:</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Your Email Here!"
            />
            <label htmlFor="phone">PHONE NUMBER:</label>
            <input
              id="phone"
              type="text"
              placeholder="Enter Your Phone Number Here!"
            />
            <label htmlFor="address">ADDRESS:</label>
            <input
              id="address"
              type="text"
              placeholder="Enter Your Address Here!"
            />
            <button>Place order</button>
          </form>
        </div>
        <div className={classes.orderContainer}>
          <div className={classes.order}>
            <h2>YOUR ORDER</h2>
            {cart.cart.map((el) => (
              <div key={el.id} className={classes.item}>
                <h4>{el.name}</h4>{" "}
                <span>
                  {Number(el.price).toLocaleString("en-US")} VND x {el.quantity}
                </span>
              </div>
            ))}
            <div className={classes.total}>
              <h3>TOTAL</h3>
              <h3 className={classes.totalPrice}>
                {Number(cart.totalPrice).toLocaleString("en-US")} VND
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CheckoutForm;
