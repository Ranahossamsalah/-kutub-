/** @format */

import styles from "./ProfileNav.module.scss";
import logo from "../../../assets/icons/logo.png";
import library from "../../../assets/icons/books-stack-of-three.png";
import options from "../../../assets/icons/settings.png";
import record from "../../../assets/icons/microphone.png";
import calendar from "../../../assets/icons/calendar.png";
import connections from "../../../assets/icons/connections.png";
import cart from "../../../assets/icons/shopping-cart.png";
import ProfileListItem from "../../../common/ProfileListItem/ProfileListItem";
import { Link } from "react-router-dom";
const ProfileNav = () => {
  return (
    <nav className={styles.nav}>
      <figure className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
      </figure>
      <ul className={styles.options}>
        <ProfileListItem bg={library} />
        <ProfileListItem bg={record} />
        <ProfileListItem bg={calendar} />
        <ProfileListItem bg={connections} />
        <ProfileListItem bg={cart} />
        <ProfileListItem bg={options} />
      </ul>
    </nav>
  );
};
export default ProfileNav;
