import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

import yogaIcon from "../../assets/sidebar_icons/sidebar_icon_yoga.png";
import swimmingIcon from "../../assets/sidebar_icons/sidebar_icon_swimming.png";
import cyclingIcon from "../../assets/sidebar_icons/sidebar_icon_cycling.png";
import weightIcon from "../../assets/sidebar_icons/sidebar_icon_bodybuilding.png";

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/yoga">
          <img src={yogaIcon} alt="Yoga" />
        </Link>
        <Link to="/natation">
          <img src={swimmingIcon} alt="Natation" />
        </Link>
        <Link to="/cyclisme">
          <img src={cyclingIcon} alt="Cyclisme" />
        </Link>
        <Link to="/musculation">
          <img src={weightIcon} alt="Musculation" />
        </Link>
      </nav>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </aside>
  );
};

export default Sidebar;
