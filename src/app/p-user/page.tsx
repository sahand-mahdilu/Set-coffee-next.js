import UserPanelLayout from "@/Components/layouts/UserPanelLayout";
import Box from "@/Components/templates/p-user/Box";
import Orders from "@/Components/templates/p-user/Orders";
import Tickets from "@/Components/templates/p-user/Tickets";
import styles from "@/styles/p-user/index.module.css";
import { authUser } from "@/utils/severHelpers";
import TicketModel from "../../../models/Ticket";

import WishListModel from "../../../models/WishList";
import CommentModel from "../../../models/comment";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await authUser();

  if (!user) {
    return redirect("/login-register");
  }

  const tickets = await TicketModel.find({ user: user._id })
    .limit(3)
    .populate("department", "title")
    .sort({ _id: -1 })
    .lean();

  const allTickets = await TicketModel.find({ user: user._id });
  const comments = await CommentModel.find({ user: String(user._id) });
  const wishes = await WishListModel.find({ user: user._id });

  return (
    <UserPanelLayout>
      <main className={styles.main_section}>
        <section className={styles.boxes}>
          <Box title="مجموع تیکت ها " value={allTickets.length.toString()} />
          <Box title="مجموع کامنت ها " value={comments.length.toString()} />
          <Box title="مجموع سفارشات" value="2" />
          <Box title="مجموع علاقه مندی ها" value={wishes.length.toString()} />
        </section>
        <section
          className={`${styles.contents} px-10 max-sm:px-[15px] flex max-lg:flex-col items-center justify-center w-full`}
        >
          <Tickets tickets={JSON.parse(JSON.stringify(tickets))} />
          <Orders />
        </section>
      </main>
    </UserPanelLayout>
  );
};

export default page;
