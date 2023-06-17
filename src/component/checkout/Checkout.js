import CheckoutForm from "./CheckoutForm";
import Banner from "../helper/Banner";
import { Fragment } from "react";

function Checkout() {
  return (
    <Fragment>
      <Banner title="CHECKOUT" />
      <CheckoutForm />
    </Fragment>
  );
}
export default Checkout;
