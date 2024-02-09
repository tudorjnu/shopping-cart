import styles from "./navigation-bar.module.scss";

function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <a href="#">Home</a>
      <a href="#">Shopping Cart</a>
    </div>
  );
}

export default NavigationBar;
