import classes from "./Descript1.module.css";
import Quantity from "../../helper/Quantity";
import { useEffect, useState } from "react";
import { cartAction } from "../../../store/cart";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Descript1({ product }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const [addToCart, setAddToCart] = useState(false);

  useEffect(() => {
    setAddToCart(false);
  }, [location]);

  function setInputValueHandler(value) {
    setInputValue(value);
  }

  function addToCartHandler() {
    const newProduct = {
      id: product._id.$oid,
      image: product.img1,
      name: product.name,
      price: product.price,
      quantity: +inputValue,
    };

    dispatch(cartAction.addProduct(newProduct));
    setAddToCart(true);
  }

  return (
    <div className={classes.des1}>
      <div className={classes.img}>
        <img src={product.img4} alt={product.name} />
      </div>
      <div className={classes.descript1}>
        <h1>{product.name}</h1>
        <h2>{Number(product.price).toLocaleString("en-US")} VND</h2>
        <p>{product.short_desc}</p>
        <p className={classes.category}>
          <span>CATEGORY:</span> watchs
        </p>
        <div className={classes.quantity}>
          <span className={classes.borderCtn}>
            <label htmlFor="quantity">QUANTITY </label>
            {
              <Quantity
                setInput={setInputValueHandler}
                defaultValue={1}
                type="desc"
              />
            }
          </span>
          <button onClick={addToCartHandler} className={classes.btn}>
            Add to cart
          </button>
        </div>
        {addToCart && (
          <p className={classes.added}>
            Added product to cart... <Link to={"/cart"}>go to cart</Link>
          </p>
        )}
      </div>
    </div>
  );
}
export default Descript1;
