import styles from "./Record.module.scss";
const Record = () => {
  return (
    <div className={styles.recordAnimation}>
      <div className={styles.recordContainer}></div>
      <div className={styles.speedContainer}></div>
    </div>
  );
};
export default Record;
