import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../component/helper/Banner";
import ShopList from "../component/shop/ShopList";
import classes from "./ShopPage.module.css";
import Search from "../component/shop/Search";

function ShopPage() {
  return (
    <Fragment>
      <Banner title="Shop" />
      <Search />
      <div className={classes.flex}>
        <ShopList />
        <Outlet />
      </div>
    </Fragment>
  );
}
export default ShopPage;
