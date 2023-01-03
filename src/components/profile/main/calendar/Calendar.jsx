import { useRef, useState } from "react";
import styles from "./Calendar.module.scss";
import Events from "./Events/Events";

const Calendar = () => {
  const dateRef = useRef();
  const textRef = useRef();
  const [data, setData] = useState();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setData({ date: dateRef.current.value, text: textRef.current.value });

    dateRef.current.value = "";
    textRef.current.value = "";
  };
  console.log(data);

  return (
    <div className={styles.container}>
      <form onSubmit={onSubmitHandler} className={styles.form}>
        <span className={styles.addEvent}>Add Event</span>
        <input className={styles.about} type="text" ref={textRef} />
        <input className={styles.date} ref={dateRef} type="date" />
        <button className={styles.add} type="submit">
          Add
        </button>
      </form>
      <Events date={data?.date} text={data?.text} />
    </div>
  );
};
export default Calendar;
