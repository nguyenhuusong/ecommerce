import classes from "./MessengerIcon.module.css";

function MessengerIcon({ onToggle }) {
  return (
    <div onClick={onToggle} className={classes.messenger}>
      <i className="fa-brands fa-facebook-messenger fa-2xl"></i>
    </div>
  );
}
export default MessengerIcon;
