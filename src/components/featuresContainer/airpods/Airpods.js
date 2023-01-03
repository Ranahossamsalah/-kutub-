import { useState } from "react";
import styles from "./Airpods.module.scss";

const Airpods = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={styles.airpodsContainer}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className={styles.airpods}>
        <section
          className={`${styles.airpodsLeft} ${
            isHovered ? styles.hoverLeft : ""
          }`}
        ></section>
        <section
          className={`${styles.airpodsRight} ${
            isHovered ? styles.hoverRight : ""
          }`}
        ></section>
      </div>
    </div>
  );
};
export default Airpods;
