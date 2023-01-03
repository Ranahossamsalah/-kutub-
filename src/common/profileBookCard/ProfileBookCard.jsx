import CardHoverWrapper from "../containers/animation/cardHoverWrapper/Wrapper";
import styles from "./ProfileBookCard.module.scss";
const ProfileBookCard = ({ bg, onClick }) => {
  return (
    <CardHoverWrapper onClick={() => {}} text={"Attack on Titan"}>
      <div
        onClick={() => onClick}
        style={{ backgroundImage: `url(${bg})` }}
        className={styles.Container}
      ></div>
    </CardHoverWrapper>
  );
};
export default ProfileBookCard;
