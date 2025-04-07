"use client"; // فعال کردن حالت کلاینت
import swal from "sweetalert";
import React from "react";
import styles from "./table.module.css";
import { ChangeRoleProps, DataTableProps } from "@/app/types/types";
import { useRouter } from "next/navigation";

const DataTable: React.FC<DataTableProps> = ({ users, title }) => {
  const router = useRouter();


  const changeRole = async ({ userID }: ChangeRoleProps): Promise<void> => {
    try {
      const res = await fetch("/api/user/role", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userID }),
      });

      if (!res.ok) {
        console.error(`Error updating role: ${res.statusText}`);
        return;
      }

      if (res.status === 200) {
        swal({
          title: "نقش کاربر با موفقیت تغییر یافت",
          icon: "success",
          buttons: {
            confirm: {
              text: "فهمیدم",
              value: true,
              visible: true,
              className: "",
              closeModal: true,
            },
          },
        }).then(() => {
          router.refresh();
        });
      }

      console.log("Role updated successfully", await res.json());
    } catch (error) {
      console.error("Error in changeRole function:", error);
    }
  };

 
  const removeUser = async (userID: string): Promise<void> => {
    try {
      swal({
        title: "آیا از حذف کاربر اطمینان دارید؟",
        icon: "warning",
        buttons: ["نه", "آره"],
      }).then(async (result) => {
        if (result) {
          const res = await fetch("/api/user", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userID }),
          });

          if (res.status === 200) {
            swal({
                title: "کاربر با موفقیت حذف شد",
                icon: "success",
                buttons: {
                  confirm: {
                    text: "ok",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true,
                  },
                },
              }).then(() => {
              router.refresh();
            });
          } else {
            console.error(`Error removing user: ${res.statusText}`);
          }
        }
      });
    } catch (error) {
      console.error("Error in removeUser function:", error);
    }
  };

  return (
    <div>
      <div>
        <h1 className={styles.title}>
          <span>{title}</span>
        </h1>
      </div>
      <div
        className={`${styles.table_container} max-lg:min-w-[300px] max-xl:w-[600px] overflow-scroll mx-auto`}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>نام و نام خانوادگی</th>
              <th>ایمیل</th>
              <th>نقش</th>
              <th>ویرایش</th>
              <th>تغییر سطح</th>
              <th>حذف</th>
              <th>بن</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email ? user.email : "ایمیل یافت نشد"}</td>
                <td>{user.role === "USER" ? "کاربر عادی" : "مدیر"}</td>
                <td>
                  <button type="button" className={styles.edit_btn}>
                    ویرایش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.edit_btn}
                    onClick={() => changeRole({ userID: user._id })}
                  >
                    تغییر نقش
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className={styles.delete_btn}
                    onClick={() => removeUser(user._id)}
                  >
                    حذف
                  </button>
                </td>
                <td>
                  <button type="button" className={styles.delete_btn}>
                    بن
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