import styles from "./RatContainer.module.scss";
import rat from "../../../assets/imgs/rat.png";
const RatContainer = () => {
  return (
    <div className={styles.physicalBooksContainer}>
      <figure className={styles.physicalBooksFigure}>
        <img className={styles.imgRat} src={rat} alt="" />
        <span className={styles.physicalBooksText}>Physical books</span>
      </figure>
    </div>
  );
};
export default RatContainer;
