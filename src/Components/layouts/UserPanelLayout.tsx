import React from "react";
import styles from "./userPanelLayout.module.css";
import Sidebar from "../modules/p-user/Sidebar";
import Topbar from "../modules/p-user/Topbar";
import { UserLayoutProps } from "@/app/types/types";
import { authUser } from "@/utils/severHelpers";
import { redirect } from "next/navigation";



const UserPanelLayout: React.FC<UserLayoutProps> = async ({ children }) => {
  const user = await authUser()
  if(!user){
    redirect("/login-register")
  }
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