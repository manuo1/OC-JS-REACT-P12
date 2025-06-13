import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/sportsee_logo.png";

/**
 * Header component displaying the logo and main navigation links.
 *
 * @component
 * @returns {JSX.Element} The header with navigation
 */
const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Kasa logo" />
      </div>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Accueil
        </Link>
        <Link to="/profil" className={styles.link}>
          Profil
        </Link>
        <Link to="/settings" className={styles.link}>
          Réglages
        </Link>
        <Link to="/community" className={styles.link}>
          Communauté
        </Link>
      </nav>
    </header>
  );
};

export default Header;
