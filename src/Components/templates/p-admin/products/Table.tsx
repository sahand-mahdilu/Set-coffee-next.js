"use client";

import React from "react";
import styles from "./table.module.css";
import { useRouter } from "next/navigation";
import { showSwal } from "@/utils/helpers"; 
import swal from "sweetalert"; 
import { adminDataTableProps } from "@/app/types/types";




const DataTable: React.FC<adminDataTableProps> = ({ products, title }) => {
  const router = useRouter();

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
              <th>نام</th>
              <th>قیمت</th>
              <th>امتیاز</th>
              <th>مشاهده جزئیات</th>
             
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{product.price.toLocaleString()}</td>
                <td>{product.score}</td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => router.push(`/product/${product._id}`)}
                  >
                    مشاهده جزئیات
                  </button>
                </td> 
              
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => {
                      swal({
                        title: "آیا مطمئن هستید؟",
                        text: "این عمل قابل بازگشت نیست!",
                        icon: "warning",
                        buttons: ["لغو", "حذف"],
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          showSwal("محصول حذف شد!", "success","ok");
                        }
                      });
                    }}
                  >
                    حذف
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