import { useTransition, animated } from "react-spring";
import styles from "./IntroComponentAnimation.module.scss";
const IntroComponentAnimation = (props) => {
  const transition = useTransition(props.isVisible, {
    from: { x: -40, y: 40, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 40, y: 40, opacity: 0 },
  });
  return transition((style, item) =>
    item ? (
      <animated.div style={style} className={styles.testDiv}>
        {props.children}
      </animated.div>
    ) : null
  );
};
export default IntroComponentAnimation;
