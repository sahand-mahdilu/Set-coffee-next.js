import Link from "next/link";
import styles from "./ticket.module.css";

const Ticket = () => {
  return (
    <Link href={`/p-user/tickets/answer/2323`} className={styles.ticket}>
      <div>
        <p className="max-sm:text-[10px]">حجم بسته بندی</p>
        <p className={`${styles.department} max-sm:text-[12px]`}>واحد پشتیبانی</p>
      </div>
      <div>
        <p className="max-sm:text-[12px]">8:00 1402/10/21</p>
        <p className={`${styles.no_answer} max-sm:text-[12px]`}>پاسخ داده نشده</p>
        {/* answer */}
      </div>
    </Link>
  );
};

export default Ticket;
