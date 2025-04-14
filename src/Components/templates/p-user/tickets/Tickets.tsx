"use client";
import React from "react";
import styles from "@/styles/p-user/tickets.module.css";
import Link from "next/link";
import Ticket from "./Ticket";
import { TicketsProp } from "@/app/types/types";



const Tickets: React.FC<TicketsProp> = ({ tickets }) => {
  return (
    <main className={styles.container}>
      <h1 className={`${styles.title} flex justify-between text-3xl max-sm:text-[16px]` }>
        <span>همه تیکت ها</span>
        <Link href="/p-user/tickets/sendTicket"> ارسال تیکت جدید </Link>
      </h1>

      <div className={styles.boxes}>
        {/* box components */}
      </div>



      <div>
        {tickets.map((ticket) => (
          <Ticket key={ticket._id} {...ticket} />
        ))}
      </div>

      {tickets.length === 0 && (
        <div className={styles.empty}>
          <p>تیکتی وجود ندارد</p>
        </div>
      )}
    </main>
  );
};

export default Tickets;