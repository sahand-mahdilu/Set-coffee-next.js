
import styles from "./adminPanelLayout.module.css";
import Sidebar from "../modules/p-admin/Sidebar";
import Topbar from "../modules/p-admin/Topbar";
import { LayoutProps } from "@/app/types/types";
import { authUser } from "@/utils/severHelpers";
import { redirect } from "next/navigation";



const AdminPanelLayout : React.FC<LayoutProps> =async ({ children }) => {

  const user = await authUser();
  if (user) {
    if (user.role !== "ADMIN") {
      return redirect("/login-register");
    }
  } else {
    return redirect("/login-register");
  }

 

  const userName=user.name
  // const role= user.role 
  const role = user.role === "ADMIN" || user.role === "USER" ? user.role : "USER"; 

  
  return (
    <div className={styles.layout}>
      <section className={styles.section}>
        <Sidebar />
        <div className={styles.contents}>
          <Topbar name={userName} role={role}  />
          {children}
        </div>
      </section>
    </div>
  );
};

export default AdminPanelLayout;