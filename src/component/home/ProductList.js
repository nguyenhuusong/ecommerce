import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";
import { useRouteLoaderData } from "react-router-dom";
import { productAction } from "../../store";
import { useDispatch } from "react-redux";

function ProductList({ onShowModal }) {
  const dispatch = useDispatch();
  const products = useRouteLoaderData("product-loader");

  return (
    <div className={classes.container}>
      <p className={classes.title}>MADE THE HARD WAY</p>
      <h2>TOP TRENDING PRODUCTS</h2>
      <div className={classes.product}>
        {products.map((el) => (
          <ProductItem
            onShowModal={onShowModal}
            key={el._id.$oid}
            product={el}
          />
        ))}
      </div>
    </div>
  );
}
export default ProductList;
