import classes from "./SProduct.module.css";
import { useRouteLoaderData } from "react-router-dom";
import ProductItem from "../home/ProductItem";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function SProduct() {
  const params = useParams();

  // const location = useLocation();
  // const path = location.pathname;
  // const firstPath = path.split("/")[1];
  // const secondPath = path.split("/")[2];
  // const thirdPath = path.split("/")[3];
  // console.log(firstPath, secondPath);

  const productsData = useRouteLoaderData("product-loader");
  // console.log(productsData);

  let products = [];
  if (!params.type) {
    products = productsData;
  } else {
    products = productsData.filter((el) => el.category === params.type);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className={classes.productList}>
      {products.map((el) => (
        <ProductItem key={el._id.$oid} product={el} />
      ))}
    </div>
  );
}
export default SProduct;
