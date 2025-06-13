import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

import yogaIcon from "../../assets/sidebar_icons/sidebar_icon_yoga.png";
import swimmingIcon from "../../assets/sidebar_icons/sidebar_icon_swimming.png";
import cyclingIcon from "../../assets/sidebar_icons/sidebar_icon_cycling.png";
import weightIcon from "../../assets/sidebar_icons/sidebar_icon_bodybuilding.png";

/**
 * Sidebar component displaying navigation icons linking to activity routes.
 *
 * @component
 * @returns {JSX.Element} The sidebar navigation with activity icons
 */
const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/yoga" className={styles.link}>
          <img src={yogaIcon} alt="Yoga" />
        </Link>
        <Link to="/natation" className={styles.link}>
          <img src={swimmingIcon} alt="Natation" />
        </Link>
        <Link to="/cyclisme" className={styles.link}>
          <img src={cyclingIcon} alt="Cyclisme" />
        </Link>
        <Link to="/musculation" className={styles.link}>
          <img src={weightIcon} alt="Musculation" />
        </Link>
      </nav>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
};

export default Sidebar;
