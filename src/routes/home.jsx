import styles from "./home.module.scss";

function Home() {
  return (
    <div className={styles.main}>
      <h1>Welcome to the store!</h1>
      <button className={styles.button}>Click me</button>
    </div>
  );
}

export default Home;
