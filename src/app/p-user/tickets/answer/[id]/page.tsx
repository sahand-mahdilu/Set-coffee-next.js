import styles from "@/styles/p-user/answerTicket.module.css";
import Link from "next/link";
import connectedToDB from "../../../../../../configs/db";
import TicketModel from "../../../../../../models/Ticket";
import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Answer from "@/Components/templates/p-user/tickets/Answer";
import { PageParams } from "@/app/types/types";



const page = async ({ params }: { params: PageParams }) => {
  const ticketID = params.id;

  await connectedToDB();
  const ticket = await TicketModel.findOne({ _id: ticketID });

  console.log(ticket);

  return (
    <UserPanelLayout>
      <main className={styles.container}>
        <h1 className={styles.title}>
          <span>تیکت تستی</span>
          <Link href="/p-user/tickets/sendTicket">ارسال تیکت جدید</Link>
        </h1>

        <div>
          <Answer type="user" />
          <Answer type="admin" />

          {/* <div className={styles.empty}>
            <p>هنوز پاسخی دریافت نکردید</p>
          </div> */}
        </div>
      </main>
    </UserPanelLayout>
  );
};

export default page;