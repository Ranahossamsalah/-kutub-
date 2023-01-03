import styles from "./LibraryFilterItem.module.scss";
import { useState } from "react";
const LibraryFilterItem = ({ bg, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick()}
      className={styles.option}
    >
      {isHovered && <span className={styles.text}>{title}</span>}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={styles.icon}
      ></div>
    </li>
  );
};
export default LibraryFilterItem;
