import styles from "./Wrapper.module.scss";
const CardHoverWrapper = ({ children, onClick, text }) => {
  return (
    <div
      className={styles.container}
      onClick={() => {
        onClick();
      }}
    >
      <div className={styles.tiltBoxWrap}>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <span className={styles.t_over}></span>
        <div className={styles.tiltBox}>
          {children}
          <h1 className={styles.title}>{text}</h1>
        </div>
      </div>
    </div>
  );
};
export default CardHoverWrapper;
