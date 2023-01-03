import Event from "./Event/Event";
import styles from "./Events.module.scss";
const Events = ({ date, text }) => {
  console.log(date, text);
  return (
    <div className={styles.container}>
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event date={date} text={text} />
      <Event />
    </div>
  );
};
export default Events;
