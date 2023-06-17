import { Fragment } from "react";
import classes from "./ModalOverlay.module.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function Modal(props) {
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.product);

  function onClickHandler() {
    navigate(`/detail/${product._id.$oid}`);
  }

  return (
    <Fragment>
      {product && (
        <div className={classes.modal}>
          <div onClick={props.onClick} className={classes.close}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className={classes.descriptionContainer}>
            <div className={classes.image}>
              <img src={product.img1} alt={product.name}></img>
            </div>
            <div className={classes.description}>
              <div className={classes.detail}>
                <h2>{product.name}</h2>
                <h3>{Number(product.price).toLocaleString("en-US")} VND</h3>
                <p>{product.short_desc}</p>
              </div>
              <div className={classes.btn}>
                <button onClick={onClickHandler}>
                  <i className="fa-solid fa-cart-flatbed fa-md"></i>View Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export function Overlay(props) {
  return <div onClick={props.onClick} className={classes.overlay}></div>;
}
