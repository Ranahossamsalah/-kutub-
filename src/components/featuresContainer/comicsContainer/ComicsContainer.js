import { useState } from "react";
import styles from "./ComicsContainer.module.scss";
const ComicsContainer = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.comicsContainer}>
      <figure
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        className={styles.comicsFigure}
      >
        <div className={`${styles.comics} ${hover && styles.hover}`}></div>
        <span className={styles.comicsText}>Comics &amp; Manga</span>
      </figure>
    </div>
  );
};
export default ComicsContainer;
