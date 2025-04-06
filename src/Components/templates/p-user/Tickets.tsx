import { Ticket as tickettype } from "@/app/types/types";
import styles from "./tickets.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Ticket from "./Ticket";

interface TicketsProps {
  tickets: tickettype[];
}

const Tickets: React.FC<TicketsProps> = ({ tickets }) => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p className="max-sm:text-[12px] font-bold">تیکت های اخیر</p>
        <Link className="max-sm:text-[12px] font-bold" href="/p-user/tickets">
          همه تیکت ها <FaArrowLeft />
        </Link>
      </div>

      {tickets.map((ticket) => (
        <Ticket key={ticket._id} {...ticket} />
      ))}
      {/* <p className={styles.empty}>تیکتی ثبت نشده</p> */}
    </div>
  );
};

export default Tickets;