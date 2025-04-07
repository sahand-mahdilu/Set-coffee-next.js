import React from "react";


import styles from "@/styles/p-admin/index.module.css";
import connectedToDB from "../../../configs/db";
import TicketModel from "../../../models/Ticket";
import { UserModel } from "../../../models/User";
import ProductModel from "../../../models/Product";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import Box from "@/Components/templates/p-user/Box";


async function AdminHomePage() {
 await connectedToDB()
  const tickets = await TicketModel.find({}).lean();
  const users = await UserModel.find({}).lean();
  const products = await ProductModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main className={styles.main_section}>
        <section className={styles.dashboard_contents}>
          <Box title="مجموع تیکت های دریافتی" value={tickets.length.toString()} />
          <Box title="مجموع محصولات سایت" value={products.length.toString()} />
          <Box title="مجموع سفارشات" value="333" />
          <Box title="مجموع کاربر های سایت" value={users.length.toString()} />
        </section>{" "}
        <div className={styles.dashboard_charts}>
          <section>
            <p>آمار فروش</p>
          </section>
          <section>
            <p>نرخ رشد</p>
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
