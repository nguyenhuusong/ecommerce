import classes from "./Descript2.module.css";

function Descript2({ product }) {
  const listDesc = product.long_desc.split("\n•");
  const listDescItem = product.long_desc
    .split("\n•")
    .slice(1)
    .map((el) => el.trim())
    .map((el) => "- " + el);

  return (
    <div className={classes.desc2}>
      <div className={classes.btn}>
        <button>DESCRIPTION</button>
      </div>
      <h3>PRODUCT DESCRIPTION</h3>
      <p>{listDesc[0]}</p>
      <ul>
        {listDescItem.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
export default Descript2;
