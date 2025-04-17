import { AdminTopbarProps } from "@/app/types/types";
import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
import Link from "next/link";





const Topbar: React.FC<AdminTopbarProps> = ({ name, role }) => {
  return (
    <>
      <div className={`${styles.topbar} py-2 px-5 max-sm:pl-[6px] fixed top-0 left-0 right-0 z-20`}>
        <div className={`${styles.profile} flex items-center gap-[10px] flex-wrap`}>
          <img src="/images/shahin.jpg" alt="" />
          <div>
            <p className="max-sm:text-[11px]">{name}</p>
            <span className="text-[14px] max-sm:text-[9px]">{role === "ADMIN" && "مدیر"}</span>
          </div>
        </div>
        <section>
          <div className={styles.searchBox}>

          <Link href="/" className="px-2 p-1 bg-white text-black rounded-2xl cursor-pointer hover:bg-blue-400 hover:text-white">خانه</Link>
          </div>
          <div className={styles.notification}>
            <IoIosNotifications />
            <span>2</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Topbar;
