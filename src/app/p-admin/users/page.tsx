import React from "react";

import styles from "@/components/templates/p-admin/users/table.module.css";
import connectedToDB from "../../../../configs/db";
import { UserModel } from "../../../models/User";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import DataTable from "@/Components/templates/p-admin/users/Table";

const page = async () => {
  await connectedToDB();
  const users = await UserModel.find({}).lean();

  return (
    <AdminPanelLayout>
      <main className="pt-12   ">
        {users.length === 0 ? (
          <p className={styles.empty}>کاربری وجود ندارد</p>
        ) : (
          <DataTable
            users={JSON.parse(JSON.stringify(users))}
            title="لیست کاربران"
          />
        )}
      </main>
    </AdminPanelLayout>
  );
};

export default page;
