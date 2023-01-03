import { useState } from "react";
import ProfilePicture from "../../../assets/imgs/ProfilePicture.png";
import points from "../../../assets/icons/points.png";
import styles from "./ProfileSection.module.scss";
import Timer from "./timer/Timer";
const ProfileSection = () => {
  const [closed, setClosed] = useState(false);

  return (
    <section className={`${styles.profileSection} ${closed && styles.close}`}>
      <section className={styles.options}>
        <div
          onClick={() => setClosed((prev) => !prev)}
          className={`${styles.minimize} ${closed && styles.rotate}`}
        ></div>
      </section>
      {!closed ? (
        <>
          <div className={styles.ProfilePictureContainer}>
            <img src={ProfilePicture} alt="profilephoto" />
          </div>
          <span className={styles.name}>Akram Qabodan</span>
          <span className={styles.status}>new user</span>
          <div className={styles.pointsContainer}>
            <img className={styles.pointsIcon} src={points} alt="points" />
            <span className={styles.points}>Points: 780</span>
          </div>
          <Timer closed={closed} />
          <div className={styles.location}>
            <span>Alexandria City</span>
            <div className={styles.countryTime}>
              <span>Alexandria,Egypt</span>
              <span className={styles.gmt}>GMT+ 2</span>
            </div>
          </div>
        </>
      ) : null}
    </section>
  );
};
export default ProfileSection;
