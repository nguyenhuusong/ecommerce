import classes from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={classes.banner}>
      <div className={classes.description}>
        <p className={classes.title}>NEW INSPIRATION 2020</p>
        <h1 className={classes.saleoff}>20% OFF ON NEW SEASON</h1>
        <div className={classes.btn}>
          <button onClick={props.onClickFunction}> Browse collections</button>
        </div>
      </div>
    </div>
  );
}
export default Banner;
