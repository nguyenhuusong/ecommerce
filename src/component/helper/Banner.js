import { Fragment } from "react";
import classes from "./Banner.module.css";
import { NavLink } from "react-router-dom";

function Banner({ title }) {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1>{title}</h1>
        {title !== "CHECKOUT" && <p>{title}</p>}
        {title === "CHECKOUT" && (
          <div className={classes.link}>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/"}
            >
              HOME
            </NavLink>{" "}
            /{" "}
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/cart"}
            >
              CART
            </NavLink>{" "}
            /{" "}
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to={"/checkout"}
            >
              CHECKOUT
            </NavLink>
          </div>
        )}
      </div>
    </Fragment>
  );
}
export default Banner;
