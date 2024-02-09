import NavigationBar from "../components/navigation-bar";
import styles from "./home.module.scss";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className={styles.main}>
        <h1>Welcome to the store!</h1>
        <button className={styles.button}>Click me</button>
      </div>
    </>
  );
}

export default Home;
