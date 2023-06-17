import classes from "./Categories.module.css";
import { Link } from "react-router-dom";

function Categories() {
  return (
    <div className={classes.categories}>
      <div className={classes.header}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className={classes.product}>
        <Link
          to={"/shop/iphone"}
          className={`${classes.itemB1} ${classes.item}`}
        ></Link>
        <Link
          to={"/shop/macbook"}
          className={`${classes.itemB2} ${classes.item}`}
        ></Link>
        <Link
          to={"/shop/ipad"}
          className={`${classes.itemC1} ${classes.item}`}
        ></Link>
        <Link
          to={"/shop/watch"}
          className={`${classes.itemC2} ${classes.item}`}
        ></Link>
        <Link
          to={"/shop/airpod"}
          className={`${classes.itemC3} ${classes.item}`}
        ></Link>
      </div>
    </div>
  );
}
export default Categories;
