import classes from "./Quantity.module.css";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart";

function Quantity(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  const inputRef = useRef();
  function minusHandler() {
    inputRef.current.stepDown();
    if (props.type === "desc") props.setInput(inputRef.current.value);
    if (props.type === "cart") {
      dispatch(cartAction.decrementProduct(props.product));
    }
  }
  function plustHandler() {
    inputRef.current.stepUp();
    if (props.type === "desc") props.setInput(inputRef.current.value);
    if (props.type === "cart") {
      dispatch(cartAction.addProduct({ ...props.product, quantity: 1 }));
    }
  }
  useEffect(() => {
    if (props.type === "desc") {
      inputRef.current.value = 1;
    }
  }, [path]);
  useEffect(() => {
    if (props.type === "desc") props.setInput(inputRef.current.value);
  }, []);

  function onChangeHandler() {
    const a = inputRef.current.value.length;
    inputRef.current.style.width = `${a * 8 + 25}px`;
    props.setInput(inputRef.current.value);
  }

  return (
    <span className={classes.quantity}>
      <button onClick={minusHandler}>
        <i className="fa-solid fa-caret-left fa-lg"></i>
      </button>
      <input
        onChange={onChangeHandler}
        ref={inputRef}
        id="quantity"
        name="quantity"
        type="number"
        min="1"
        step="1"
        defaultValue={props.defaultValue}
        readOnly={props.type === "cart" ? true : false}
      />
      <button onClick={plustHandler}>
        <i className="fa-sharp fa-solid fa-caret-right fa-lg"></i>
      </button>
    </span>
  );
}
export default Quantity;
