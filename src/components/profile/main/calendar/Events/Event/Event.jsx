import CardHoverWrapper from "../../../../../../common/containers/animation/cardHoverWrapper/Wrapper";
import styles from "./Event.module.scss";
const Event = ({ date, text }) => {
  console.log(date, text);
  return (
    <CardHoverWrapper text={date}>
      <div className={styles.container}>{text}</div>
    </CardHoverWrapper>
  );
};
export default Event;
