import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { LoginProps } from "@/app/types/types";
import { showSwal } from "@/utils/helpers";
import { useRouter } from "next/navigation";

const Login: React.FC<LoginProps> = ({ showRegisterForm }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loggIn = async () => {
    if (!username) {
      return showSwal("نام کاربری را وارد کنید", "error", "تلاش مجدد");
    }

    if (!password) {
      return showSwal("رمز عبور را وارد کنید", "error", "تلاش مجدد");
    }

    const userInfo = { username, password };

    const res = await fetch("/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(userInfo),
    });

   

   

    if (res.status === 200) {
      swal({
        title: "با موفقیت لاگین شدین",
        icon: "success",
        buttons: {
          confirm: {
            text: "ورود به پنل کاربری",
            value: true,
            visible: true,
            className: "",
            closeModal: true,
          },
        },
      }).then(() => {
        router.replace("p-user");
      });
    } else if (res.status === 401) {
      showSwal("نام کاربری یا رمز عبور اشتباه است", "error", "تلاش مجدد");
    } else if (res.status === 404) {
      showSwal("کاربر با این اطلاعات یافت نشد", "error", "تلاش مجدد");
    }
  };

  return (
    <>
      <div className={styles.form}>
        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className={`${styles.input} placeholder:text-black`}
          type="text"
          placeholder="نام کاربری"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className={`${styles.input} placeholder:text-black`}
          type="password"
          placeholder="رمز عبور"
        />

        <button onClick={loggIn} className={`${styles.btn} text-white mt-20`}>
          ورود
        </button>
        <span className="text-white ">آیا حساب کاربری ندارید؟</span>
        <button onClick={showRegisterForm} className={styles.btn_light}>
          ثبت نام
        </button>
      </div>
      <Link
        href={"/"}
        className={`${styles.redirect_to_home} bg-red-600 p-3 rounded-xl text-white`}
      >
        لغو
      </Link>
    </>
  );
};

export default Login;
