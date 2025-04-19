import React from "react";

import styles from "@/components/templates/p-admin/products/table.module.css";
import connectedToDB from "../../../../configs/db";
import ProductModel from "../../../models/Product";
import AdminPanelLayout from "@/Components/layouts/AdminPanelLayout";
import DataTable from "@/Components/templates/p-admin/products/Table";
import AddProduct from "@/Components/templates/p-admin/products/AddProduct";

const page = async () => {
  await connectedToDB();
  const products = await ProductModel.find({}).sort({ _id: -1 }).lean();

  return (
    <AdminPanelLayout>
      <main className=" pt-14">
        <AddProduct />
        {products.length === 0 ? (
          <p className={styles.empty}>محصولی وجود ندارد</p>
        ) : (
          <DataTable
            products={JSON.parse(JSON.stringify(products))}
            title="لیست محصولات"
          />
        )}
      </main>
    </AdminPanelLayout>
  );
};

export default page;
