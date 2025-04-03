import React from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "../modules/p-user/Sidebar";
import Topbar from "../modules/p-user/Topbar";


const UserPanelLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
        <Sidebar />
        <div className={styles.contents}>
          <Topbar />
          {children}
        </div>
      </section>
    </div>
  );
};

export default UserPanelLayout;
