import { useEffect, useState } from "react";
import styles from "./Timer.module.scss";
import reset from "../../../../assets/icons/reset.png";
const Timer = ({ closed }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    let timeout;
    if (timerStarted) {
      timeout = setTimeout(() => {
        if (sec < 59) {
          setSec((prev) => prev + 1);
        } else if (sec >= 59) {
          setSec(0);
          setMin((prev) => prev + 1);
          if (min >= 59) {
            setMin(0);
            setHr((prev) => prev + 1);
          }
        }
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [timerStarted, sec, min, hr]);

  const toggleContainerOnClickHandler = () => {
    setTimerStarted((prev) => !prev);
  };
  const resetHandler = () => {
    setSec(0);
    setMin(0);
    setHr(0);
    setTimerStarted(false);
  };
  return (
    <>
      {!closed ? (
        <>
          <span className={styles.readingTime}>Reading Time :</span>
          <div className={styles.readingTimer}>
            <div
              onClick={toggleContainerOnClickHandler}
              className={styles.toggleContainer}
            >
              <span className={styles.timeText}>{`${hr < 10 ? "0" + hr : hr}:${
                min < 10 ? "0" + min : min
              }:${sec < 10 ? "0" + sec : sec}`}</span>
            </div>
          </div>
          <img
            onClick={resetHandler}
            className={styles.reset}
            src={reset}
            alt="reset"
          />
        </>
      ) : null}
    </>
  );
};
export default Timer;
