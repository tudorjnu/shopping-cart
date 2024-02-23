import { Link } from "react-router-dom";
import styles from "./products.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../lib/actions";
import { useFormAction, Form } from "react-router-dom";

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

export function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(productId)
      .then((response) => setProduct(response))
      .catch((error) => setError(error))
      .finally(setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>an error has been encountered</p>;
  if (!product) return <p>Product not found</p>;

  const { title, price, image, id } = product;

  return (
    <div className={styles.productPage}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <h1>{title}</h1>
          <p>{price}</p>
          <div className={styles.buttonsContainer}>
            <Form method="post">
              <input type="number" min="1" max="10" step="1" placeholder="1" />
              <button>Add to cart</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
