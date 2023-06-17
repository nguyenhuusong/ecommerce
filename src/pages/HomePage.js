import Home from "../component/home/Home";
import { useLoaderData } from "react-router-dom";
import { userAction } from "../store/user";
import { useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";

function HomePage() {
  const dispatch = useDispatch();
  const data = useLoaderData();
  useEffect(() => {
    dispatch(userAction.replaceUser(data));
  }, [data, dispatch]);
  return (
    <Fragment>
      <Home />
    </Fragment>
  );
}
export default HomePage;
export async function loader() {
  const userData = localStorage.getItem("login");
  const user = JSON.parse(userData);
  return user;
}
