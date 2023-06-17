import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { productAction } from "../../store/index";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function ProductItem({ product, onShowModal, related }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const imgRef = useRef();
  const productRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const path = location.pathname;
  const firstPath = path.split("/")[1];

  useEffect(() => {
    imgRef.current.addEventListener("load", showPage, true);
    function showPage() {
      setIsLoading(false);
    }
  });

  function onClickHandler() {
    dispatch(productAction.productReplace(product));
    if (firstPath === "") {
      onShowModal();
    } else {
      navigate(`/detail/${product._id.$oid}`);
    }
  }
  return (
    <div
      ref={productRef}
      onClick={onClickHandler}
      className={`${classes.productItem} ${
        firstPath === "shop" ? classes.aniShow : undefined
      } ${isLoading ? classes.loading : undefined}`}
    >
      <img
        ref={imgRef}
        src={product.img1}
        className={classes.img}
        alt={product.name}
      ></img>
      <div className={classes.descript}>
        <h3
          style={{
            fontSize: related ? "0.875rem" : "1.17rem",
            lineHeight: related ? "1.25rem" : "1.8rem",
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: related ? "0.875rem" : "1rem" }}>
          {Number(product.price).toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}
export default ProductItem;
