"use client";

import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
import { DataTicketTableProps, Ticket } from "@/app/types/types";

const DataTable: React.FC<DataTicketTableProps> = ({ tickets, title }) => {
  const router = useRouter();

  const showTicketBody = (body: string): void => {
    showSwal(body, null, "بستن");
  };

  const answerToTicket = async (ticket: Ticket): Promise<void> => {
    swal({
      title: "لطفا پاسخ مورد نظر را وارد کنید:",
      content: {
        element: "input",
      },
      buttons: {
        confirm: {
          text: "ثبت پاسخ",
          value: true,
        },
        cancel: {
          text: "لغو",
          value: false,
        },
      },
    }).then(async (answerText) => {
      if (answerText) {
        const answer = {
          ...ticket,
          body: answerText as string,
          ticketID: ticket._id,
        };

        const res = await fetch("/api/tickets/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(answer),
        });

        if (res.status === 201) {
          swal({
            title: "پاسخ مورد نظر ثبت شد",
            icon: "success",
            buttons: {
              confirm: {
                text: "فهمیدم",
                value: true,
              },
            },
          });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>کاربر</th>
              <th>عنوان</th>
              <th>دپارتمان</th>
              <th>مشاهده</th>
              <th>پاسخ</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket._id}>
                <td>{index + 1}</td>
                <td>
                  {typeof ticket.user === "object"
                    ? ticket.user.name
                    : "ناشناس"}
                </td>
                <td>{ticket.title}</td>
                <td>{ticket.department?.title || "نامشخص"}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => showTicketBody(ticket.body)}
                  >
                    مشاهده
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => answerToTicket(ticket)}
                  >
                    پاسخ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
