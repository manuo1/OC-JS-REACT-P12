import styles from "./Loader.module.scss";

/**
 * Display a full-screen loading spinner.
 *
 * This component is typically used to indicate that data is being loaded
 * or a process is in progress.
 *
 * @component
 * @example
 * return <Loader />
 */
function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loader;
