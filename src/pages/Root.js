import { Fragment, useState } from "react";
import MainNavigation from "../component/MainNavigation";
import { Outlet, json } from "react-router-dom";
import classes from "./Root.module.css";
import Footer from "../component/home/Footer";
import ChatPopup from "../component/chatPopup/ChatPopup";
import MessengerIcon from "../component/chatPopup/MessengerIcon";
import ReactDOM from "react-dom";

function Root() {
  const [showChat, setShowChat] = useState(false);
  function toggleChatwindow() {
    setShowChat((prev) => !prev);
  }

  return (
    <Fragment>
      <MainNavigation />
      {ReactDOM.createPortal(
        <ChatPopup showChat={showChat} />,
        document.getElementById("chatWindow")
      )}
      {ReactDOM.createPortal(
        <MessengerIcon onToggle={toggleChatwindow} />,
        document.getElementById("chatWindow")
      )}
      <main className={classes.main}>
        <Outlet></Outlet>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Root;
export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch data" }, { status: 500 });
  }

  return response;
}
