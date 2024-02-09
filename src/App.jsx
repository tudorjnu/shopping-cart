import NavigationBar from "./components/navigation-bar";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <NavigationBar />
      <div className={styles.main}>Main Things go here</div>
    </>
  );
}

export default App;
