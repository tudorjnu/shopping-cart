import styles from "./home.module.scss";
import NavigationBar from "../components/navigation-bar/navigation-bar";
import { Outlet } from "react-router-dom";
import { getProducts } from "../lib/actions";

function Item({ title, price }) {
  console.log(title);
  console.log(price);
  return (
    <>
      <div>{title}</div>
      <div>{price}</div>
    </>
  );
}

const Cart = () => {
  const products = getProducts();
  console.log(products[0]);

  return (
    <>
      <NavigationBar />
      Hello from the Cart Page
      <Item {...products[0]} />
    </>
  );
};

export default Cart;
