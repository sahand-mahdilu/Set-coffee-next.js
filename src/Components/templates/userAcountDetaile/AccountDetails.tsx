"use client";
import React, { useEffect } from "react";
import styles from "@/styles/p-user/accountDetails.module.css";
import swal from "sweetalert";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";
import { showSwal } from "@/utils/helpers";
import { valiadteEmail, validateUsername } from "@/utils/auth";

function AccountDetails() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/auth/me");
      const data = await res.json();

      setName(data.username);
      setEmail(data.email);
    };
    getUser();
  }, []);

  const updateUser = async () => {
    // validation
    if (!username) {
      return showSwal("نام کاربری را وارد کنید", "error", "تلاش مجدد");
    }

    const isvalidUsername = validateUsername(username);

    if (!isvalidUsername) {
      return showSwal(
        "نام کاربری باید فقط شامل حروف کوچک واعداد و - یا _ باشد",
        "error",
        "تلاش مجدد "
      );
    }

    if (!email) {
      return showSwal("ایمیل را وارد کنید", "error", "تلاش مجدد");
    }

    const isValidEmail = valiadteEmail(email);

    if (!isValidEmail) {
      return showSwal("ایمیل معتبر نمی باشد", "error", "تلاش مجدد ");
    }

    const userNewInfos = {
      username,
      email,
    };

    const res = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    });

    if (res.status === 200) {
      swal({
        title: "اطلاعات با موفقیت آپدیت شد",
        icon: "success",
        buttons: {
          confirm: {
            text: "ok",
            value: true,
            visible: true,
            className: "btn-confirm",
            closeModal: true,
          },
        },
      }).then(async () => {
        await fetch("/api/auth/signout", { method: "POST" });
        location.replace("/login-register");
      });
    }
  };

  return (
    <main>
      <div className={styles.details}>
        <h1 className={styles.title}>
          <span> جزئیات اکانت</span>
        </h1>
        <div className={`${styles.details_main} flex max-lg:flex-col`}>
          <section>
            <div>
              <label>نام کاربری</label>
              <input
                value={username}
                onChange={(event) => setName(event.target.value)}
                placeholder="لطفا نام کاربری خود را وارد کنید"
                type="text"
              />
            </div>
            <div>
              <label>ایمیل</label>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="لطفا ایمیل خود را وارد کنید"
                type="text"
              />
            </div>
          </section>
          <section>
            <div className={`${styles.uploader} flex max-sm:flex-col`}>
              <img src="/images/shahin.jpg" alt="" />
              <div>
                <div>
                  <button>
                    <IoCloudUploadOutline />
                    تغییر
                  </button>
                  <input type="file" name="" id="" />
                </div>
                <button>
                  <MdOutlineDelete />
                  حذف
                </button>
              </div>
            </div>
          
          </section>
        </div>
        <button
          type="submit"
          onClick={updateUser}
          className={`${styles.submit_btn} max-sm:text-[14px]`}
        >
          ثبت تغییرات
        </button>
      </div>
    </main>
  );
}

export default AccountDetails;
