import classes from "./ShopList.module.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function ShopList() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div className={classes.nav}>
      <div className={`${classes.apple} ${classes.header}`}>APPLE</div>

      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop"}
          end
        >
          All
        </NavLink>
      </div>

      <div className={classes.header}>IPHONE & MAC</div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/iphone"}
        >
          IPhone
        </NavLink>
      </div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/ipad"}
        >
          IPad
        </NavLink>
      </div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/macbook"}
        >
          Macbook
        </NavLink>
      </div>
      <div className={classes.header}>WIRELESS</div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/airpod"}
        >
          Airpod
        </NavLink>
      </div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/watch"}
        >
          Watch
        </NavLink>
      </div>
      <div className={classes.header}>OTHER</div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/mouse"}
        >
          Mouse
        </NavLink>
      </div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/keyboard"}
        >
          Keyboard
        </NavLink>
      </div>
      <div className={classes.navEl}>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : undefined)}
          to={"/shop/other"}
        >
          Other
        </NavLink>
      </div>
    </div>
  );
}
export default ShopList;
