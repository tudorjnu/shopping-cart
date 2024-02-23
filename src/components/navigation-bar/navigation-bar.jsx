import styles from "./navigation-bar.module.scss";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Shopping Cart</NavLink>
    </div>
  );
}

export default NavigationBar;
