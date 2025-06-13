import styles from "./HomePage.module.scss";

/**
 * Simple component to display a temporary HomePage placeholder.
 *
 * @component
 * @returns {JSX.Element} The homepage placeholder
 */
const HomePage = () => {
  return <h1 className={styles.container}>Temporary HomePage</h1>;
};

export default HomePage;
