import styles from "./topbar.module.css";
import { IoIosSearch, IoIosNotifications } from "react-icons/io";
const Topbar = () => {
  return (
    <>
      <div className={`${styles.topbar} py-2 px-5 max-sm:pl-[6px] fixed top-0 left-0 right-0 z-20`}>
        <div className={`${styles.profile} flex items-center gap-[10px] flex-wrap` }>
          <img src="/images/shahin.jpg" alt="" />
          <div>
            <p className="max-sm:text-[11px]">شاهین مشکل گشا</p>
            <span className="text-[14px] max-sm:text-[9px]">ادمین</span>
          </div>
        </div>
        <section>
          <div className={styles.searchBox}>
            <input type="text" placeholder="جستجو کنید" />
            <div>
              <IoIosSearch />
            </div>
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
