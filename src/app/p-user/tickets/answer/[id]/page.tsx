import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import connectedToDB from "../../../../../../configs/db";
import TicketModel from "../../../../../models/Ticket";
import Answer from "@/Components/templates/p-user/tickets/Answer";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import { PageProps, Ticket } from "@/app/types/types";

const page = async ({ params }: PageProps) => {
  const ticketID = params.id;
  await connectedToDB();

  // Fetch main ticket
  const ticket = await TicketModel.findOne({ _id: ticketID })
    .populate<{ user: { name: string } }>("user", "name")
    .lean<Ticket>();

  // Fetch answer for the main ticket
  const answerTicket = await TicketModel.findOne({
    mainTicket: ticket?._id,
  }).lean<Ticket>();

  const formatDate = (date: string | Date) => new Date(date).toISOString();

  return (
    <UserPanelLayout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span className="max-lg:w-[14px]">تیکت </span>
          <Link href="/p-user/tickets/sendTicket">ارسال تیکت جدید</Link>
        </h1>
        <div>
          {/* Render the user ticket */}
          {ticket && (
            <Answer
              type="user"
              {...ticket}
              createdAt={formatDate(ticket.createdAt)}
              user={
                typeof ticket.user === "string"
                  ? undefined // Handle if only ID is provided
                  : ticket.user
              }
            />
          )}

          {/* Render the admin's answer */}
          {answerTicket && (
            <Answer
              type="admin"
              body={answerTicket.body}
              createdAt={formatDate(answerTicket.createdAt)}
            />
          )}

          {/* Render fallback message */}
          {!answerTicket && (
            <div className={styles.empty}>
              <p>هنوز پاسخی دریافت نکردید</p>
            </div>
          )}
        </div>
      </main>
    </UserPanelLayout>
  );
};

export default page;
