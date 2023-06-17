import classes from "./Search.module.css";
function Search() {
  return (
    <div className={classes.search}>
      <h2>CATEGORIES</h2>
      <input type="text" placeholder="Enter Search Here!"></input>
      <select>
        <option>Default sorting</option>
      </select>
    </div>
  );
}
export default Search;
