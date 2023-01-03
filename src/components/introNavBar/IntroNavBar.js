import styles from "./IntroNavBar.module.scss";
import { Link } from "react-router-dom";
const IntroNavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.options}>
        <li>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <button className={styles.button}>Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className={styles.button}>Sign up</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default IntroNavBar;
