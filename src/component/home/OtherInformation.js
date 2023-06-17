import classes from "./OtherInformation.module.css";

function OtherInformation() {
  return (
    <div className={classes.container}>
      <div className={classes.information}>
        <div className={classes.ship}>
          <h2>FREE SHIPPING</h2>
          <p>Free shipping worlwide</p>
        </div>
        <div className={classes.service}>
          <h2>24 X 7 SERVICE</h2>
          <p>Free shipping worlwide</p>
        </div>
        <div className={classes.festival}>
          <h2>FESTIVAL OFFER</h2>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className={classes.subscibe}>
        <div className={classes.lable}>
          <h1>LES'T BE FRIEND!</h1>
          <p>Nisi nisi tempo consequat laboris nise</p>
        </div>
        <div className={classes.form}>
          <form>
            <input type="email" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default OtherInformation;
