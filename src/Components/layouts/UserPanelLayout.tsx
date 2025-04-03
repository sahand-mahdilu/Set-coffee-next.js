import React from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "../modules/p-user/Sidebar";
import Topbar from "../modules/p-user/Topbar";
import { UserLayoutProps } from "@/app/types/types";



const UserPanelLayout: React.FC<UserLayoutProps> = ({ children }) => {
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