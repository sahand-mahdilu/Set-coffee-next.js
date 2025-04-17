import React from "react";


import styles from "@/styles/p-admin/index.module.css";
import connectedToDB from "../../../configs/db";
import TicketModel from "../../../models/Ticket";
import { UserModel } from "../../../models/User";
import ProductModel from "../../../models/Product";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import Box from "@/Components/templates/p-user/Box";
import SaleChart from "@/Components/templates/p-admin/SaleChart";
import GrowthChart from "@/Components/templates/p-admin/GrowthChart";


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
          <Box title="مجموع سفارشات" value="0" />
          <Box title="مجموع کاربر های سایت" value={users.length.toString()} />
        </section>{" "}
        <div className={`${styles.dashboard_charts} flex max-lg:flex-col `}>
          <section>
            <p>آمار فروش</p>
            <SaleChart/>
          </section>
          <section>
            <p>نرخ رشد</p>
            <GrowthChart/>
          </section>
        </div>
      </main>
    </AdminPanelLayout>
  );
}

export default AdminHomePage;
