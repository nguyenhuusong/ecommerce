import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div>
          <h2>CUSTOMER SERVICES</h2>
          <ul>
            <li>
              <a href="#">Help & Contact Us</a>
            </li>
            <li>
              <a href="#">Returns & Refunds</a>
            </li>
            <li>
              <a href="#">Online Stores</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>COMPANY</h2>
          <ul>
            <li>
              <a href="#">What We Do</a>
            </li>
            <li>
              <a href="#">Available Services</a>
            </li>
            <li>
              <a href="#">Lastest Posts</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h2>SOCIAL MEIDA</h2>
          <ul>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Footer;
