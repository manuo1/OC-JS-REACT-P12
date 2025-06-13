import styles from "./Error404.module.scss";

/**
 * Simple component to display a temporary 404 error message.
 *
 * @component
 * @returns {JSX.Element} The 404 error message
 */
const Error404 = () => {
  return <h1 className={styles.container}>Temporary Error404</h1>;
};

export default Error404;
