import { useRouteLoaderData } from "react-router-dom";
import classes from "./Related.module.css";
import ProductItem from "../../home/ProductItem";
function Related({ product }) {
  const related = useRouteLoaderData("product-loader").filter(
    (el) => el.category === product.category
  );

  return (
    <div className={classes.related}>
      <h3>RELATED PRODUCTS</h3>
      <div className={classes.list}>
        {related.map((el) => (
          <ProductItem key={el._id.$oid} product={el} related={true} />
        ))}
      </div>
    </div>
  );
}
export default Related;
