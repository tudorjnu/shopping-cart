import styles from "./cart.module.scss";
import { useEffect, useState } from "react";

function Item({ title, price, image }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.img} />
      </div>
      <p>{title}</p>
      <p>{price}</p>
      <div className={styles.buttonsContainer}>
        <input type="number" min="1" max="10" step="1" />
        <button>Add to cart</button>
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
    <div className={styles.productsContainer}>
      <Item {...products[0]} />
      <Item {...products[1]} />
      <Item {...products[2]} />
      <Item {...products[3]} />
      <Item {...products[4]} />
    </div>
  );
}

export default Cart;
