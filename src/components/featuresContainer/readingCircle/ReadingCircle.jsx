import logo from "../../../assets/icons/logo.png";
import styles from "./ReadingCircle.module.scss";
const ReadingCircle = () => {
  return (
    <div className={styles.readingCircle}>
      <figure>
        <img src={logo} alt="logo" />
      </figure>
    </div>
  );
};
export default ReadingCircle;
