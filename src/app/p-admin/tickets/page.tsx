import React from "react";

import styles from "@/components/templates/p-admin/tickets/table.module.css";
import connectedToDB from "../../../../configs/db";
import TicketModel from "../../../../models/Ticket";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import DataTable from "@/Components/templates/p-admin/tickets/Table";



const page = async () => {
  await connectedToDB()
  const tickets = await TicketModel.find({})
    .sort({ _id: -1 })
    .populate("user")
    .populate("department")
    .lean();

  return (
    <AdminPanelLayout>
      <main className="pt-12">
        {tickets.length === 0 ? (
          <p className={styles.empty}>کاربری وجود ندارد</p>
        ) : (
          <DataTable
            tickets={JSON.parse(JSON.stringify(tickets))}
            title="لیست کاربران"
          />
        )}
      </main>
    </AdminPanelLayout>
  );
};

export default page;
