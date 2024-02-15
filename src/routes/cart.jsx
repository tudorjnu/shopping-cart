import styles from "./cart.module.scss";
import { useEffect, useState } from "react";

function Item({ title, price, image }) {
  console.log(title);
  console.log(price);
  return (
    <div className={styles.productCard}>
      <p>{title}</p>
      <p>{price}</p>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.img} />
      </div>
    </div>
  );
}

function useProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  return { products, error, loading };
}

function Cart() {
  const { products, error, loading } = useProducts();

  if (error) return <p>an error has been encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="productsContainer">
      <Item {...products[0]} />
    </div>
  );
}

export default Cart;
