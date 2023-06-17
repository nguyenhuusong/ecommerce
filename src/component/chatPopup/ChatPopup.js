import classes from "./ChatPopup.module.css";
import logo from "../../image/icons8-admin-48.png";
import { Fragment } from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./ChatPopup.css";

const animationTiming = {
  enter: 400,
  exit: 200,
};

function ChatPopup({ showChat }) {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={showChat}
      timeout={animationTiming}
      classNames={{
        enterActive: "openChat",
        exitActive: "closeChat",
      }}
    >
      <Fragment>
        <div className={classes.chatWindow}>
          <div className={classes.header}>
            <h3>Customer Support</h3>
            <button>Let's Chat App</button>
          </div>
          <div className={classes.content}>
            <div className={classes.rightSide}>
              <span>Xin chào</span> <br />
              <span>Làm thế nào để xem các sản phẩm</span>
            </div>
            <div className={classes.leftSide}>
              <p>
                <span className={classes.admin}>
                  <img src={logo} alt="iconAdmin" />
                </span>{" "}
                <span>ADMIN: Xin chào</span>
              </p>
              <p>
                <span className={classes.admin}>
                  <img alt="iconAdmin" src={logo} />
                </span>
                <span>ADMIN: Bạn có thể vào mục shop để xem các sản phẩm</span>
              </p>
            </div>
          </div>
          <div className={classes.inputArea}>
            <img alt="iconAdmin" src={logo} />
            <input type="text" placeholder="Enter Message!" />
            <span className={classes.groupIcon}>
              <i className="fa-solid fa-paperclip fa-lg"></i>
              <i className="fa-solid fa-face-smile fa-lg"></i>
              <i className="fa-solid fa-paper-plane fa-lg"></i>
            </span>
          </div>
        </div>
      </Fragment>
    </CSSTransition>
  );
}
export default ChatPopup;
