import NavigationBar from "../components/navigation-bar/navigation-bar";
import { Outlet } from "react-router-dom";
import styles from "./root.module.scss";

export default function Root() {
  return (
    <>
      <NavigationBar />
      <div className={styles.mainContainer}>
        <Outlet />
      </div>
    </>
  );
}
