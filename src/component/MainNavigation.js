import classes from "./MainNavigation.module.css";
import { NavLink, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userAction } from "../store/user";

function MainNavigation() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  function logoutHandler() {
    localStorage.removeItem("login");
    dispatch(userAction.replaceUser(null));
  }
  return (
    <nav className={classes.nav}>
      <div className={classes.link}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          Shop
        </NavLink>
      </div>
      <h2 className={classes.title}>BOUTIQUE</h2>
      <div className={classes.userContainer}>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <div className={classes.cart}>
            <i className="fa-solid fa-cart-flatbed fa-sm"></i>
            <p>Cart</p>
          </div>
        </NavLink>
        {user && (
          <div className={classes.user}>
            <i className="fa-solid fa-user fa-sm"></i>
            <p>{user.name}</p>
            <i className="fa-solid fa-caret-down fa-sm"></i>
          </div>
        )}
        {!user && (
          <Link to={"/auth?module=login"} className={classes.logout}>
            Login
          </Link>
        )}
        {user && (
          <div onClick={logoutHandler} className={classes.logout}>
            (Logout)
          </div>
        )}
      </div>
    </nav>
  );
}
export default MainNavigation;
