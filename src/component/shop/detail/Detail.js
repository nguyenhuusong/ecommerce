import { useRouteLoaderData } from "react-router-dom";
import Descript1 from "./Descript1";
import Descript2 from "./Descript2";
import classes from "./Detail.module.css";
import Related from "./Related";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const params = useParams();

  const productsData = useRouteLoaderData("product-loader");

  const products = productsData.find((el) => el._id.$oid === params.productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.container}>
      <Descript1 product={products} />
      <Descript2 product={products} />
      <Related product={products} />
    </div>
  );
}
export default Detail;
