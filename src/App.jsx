import NavigationBar from "./components/navigation-bar";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <NavigationBar />
      <div className={styles.main}>App</div>
    </>
  );
}

export default App;
