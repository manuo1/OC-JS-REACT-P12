import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

/**
 * Layout component that wraps the main page structure including Header, Sidebar, and dynamic content via Outlet.
 *
 * @component
 * @returns {JSX.Element} The layout wrapper containing header, sidebar, and main content
 */
export default function Layout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
