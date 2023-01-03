import ProfileSection from "../../components/profile/profileSection/ProfileSection";
import styles from "./Profile.module.scss";
import ProfileNav from "../../components/profile/profileNav/ProfileNav";
import IntroComponentAnimation from "../../common/containers/animation/intro-animation/IntroComponentAnimation";
import Calendar from "../../components/profile/main/calendar/Calendar";
import Library from "../../components/profile/main/library/Library";
import SettingForm from "../../components/profile/main/settings/settingForm/SettingForm";
import { useState } from "react";

const ProfilePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <ProfileNav />
        <IntroComponentAnimation isVisible={true}>
          <main className={styles.main}>
            <Library />
            {/* <SettingForm /> */}
            {/* <Calendar /> */}
            {/* <SettingForm /> */}
          </main>
        </IntroComponentAnimation>
        <ProfileSection />
      </div>
    </div>
  );
};
export default ProfilePage;
