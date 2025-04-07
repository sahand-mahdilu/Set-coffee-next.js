import React, { ReactNode } from "react";
import styles from "./adminPanelLayout.module.css";
import Sidebar from "../modules/p-admin/Sidebar";
import Topbar from "../modules/p-admin/Topbar";
import { LayoutProps } from "@/app/types/types";



const Layout: React.FC<LayoutProps> = ({ children }) => {
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

export default Layout;