import Link from "next/link";
import styles from "./ticket.module.css";
import { TicketProps } from "@/app/types/types";

const Ticket: React.FC<TicketProps> = ({
  _id,
  title,
  createdAt,
  department,
  hasAnswer,
}) => {
  return (
    <Link
      href={`/p-user/tickets/answer/${_id}`}
      className={`${styles.ticket} text-[18px] max-sm:text-[14px]`}
    >
      <div>
        <p>{title}</p>
       
        <p className={styles.department}>
          {department ? department.title : "بدون دپارتمان"}
        </p>
      </div>
      <div>
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <p className={hasAnswer ? styles.answered : styles.no_answer}>
          {hasAnswer ? "پاسخ داده شده" : "پاسخ داده نشده"}
        </p>
      </div>
    </Link>
  );
};

export default Ticket;