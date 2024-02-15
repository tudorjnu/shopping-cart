import styles from "./home.module.scss";
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

function Cart() {
  const products = getProducts();
  console.log(products[0]);

  return (
    <>
      Hello from the Cart Page
      <Item {...products[0]} />
    </>
  );
}

export default Cart;
