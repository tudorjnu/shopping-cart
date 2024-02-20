import { Link } from "react-router-dom";
import styles from "./products.module.scss";
import { useEffect, useState } from "react";

function Item({ title, price, image, id }) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.img} />
      </div>
      <p>{title}</p>
      <p>{price}</p>
      <Link to={`/products/${id}`}>Add to cart</Link>
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

function Products() {
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

import { useParams } from "react-router-dom";
import { getProduct } from "../lib/actions";

export function Product() {
  const { productId } = useParams();
  const { product, setProduct } = useState(null);

  useEffect(() => {
    getProduct(productId).then(setProduct);
  }, [productId]);

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={product.image} className={styles.img} />
      </div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Products;
