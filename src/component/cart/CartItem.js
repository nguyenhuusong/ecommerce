import classes from "./CartItem.module.css";
import Quantity from "../helper/Quantity";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

function CartItem({ product }) {
  const dispatch = useDispatch();

  function onDeleteHandler(product) {
    dispatch(cartAction.remomveProduct(product));
  }

  return (
    <tr className={classes.cartItem}>
      <td className={classes.image}>
        <img src={product.image} alt={product.name} />
      </td>
      <td className={classes.name}>
        <h3>{product.name}</h3>
      </td>
      <td className={classes.gray}>
        {Number(product.price).toLocaleString("en-US")} <br /> VND
      </td>
      <td>
        {
          <Quantity
            defaultValue={product.quantity}
            type="cart"
            product={product}
          />
        }
      </td>
      <td className={classes.gray}>
        {Number(product.price * product.quantity).toLocaleString("en-US")}{" "}
        <br />
        VND
      </td>
      <td className={classes.gray}>
        <span className={classes.trashCan}>
          <i
            onClick={onDeleteHandler.bind(null, product)}
            className="fa-regular fa-trash-can fa-lg"
          ></i>
        </span>
      </td>
    </tr>
  );
}
export default CartItem;
