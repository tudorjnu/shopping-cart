import styles from "./navigation-bar.module.scss";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/cart">Shopping Cart</Link>
    </div>
  );
}

export default NavigationBar;
