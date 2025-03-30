import React, { useState } from "react";
import styles from "./register.module.css";
import { RegisterProps } from "@/app/types/types";

import { showSwal } from "@/utils/helpers";
import {
  valiadteEmail,
  valiadtePassword,
  valiadteUsername,
} from "@/utils/auth";

const Register: React.FC<RegisterProps> = ({ showLoginForm }) => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    if (!name.trim()) {
      return showSwal("نام را وارد بکنید", "error", "تلاش مجدد");
    }

    const isValidUsername = valiadteUsername(username);
    if (!isValidUsername) {
      return showSwal("نام کاربری باید فقط شامل حروف کوچک واعداد و - یا _ باشد", "error", "تلاش مجدد ");
    }

    if (email) {
      const isValidEmail = valiadteEmail(email);
      if (!isValidEmail) {
        return showSwal("ایمیل وارد شده معتبر نیست", "error", "تلاش مجدد ");
      }
    } else {
      return showSwal("ایمیل را وارد کنید", "error", "تلاش مجدد ");
    }

    const isValidPassword = valiadtePassword(password);
    if (!isValidPassword) {
      return showSwal(
        "رمز عبور باید حداقل 8 حرف  و یک حرف بزرگ و یک حرف کوچک و یک عدد و یک کاراکتر مانند @،$،# باشد",
        "error",
        "تلاش مجدد "
      );
    }

   

    const userData = { name, username, email, password };

    try {
      const res = await fetch("/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (res.status === 201) {
        console.log("hello");
        showSwal("ورود با موفقیت انجام شد", "success", "ورود به پنل کاربری");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.form}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className={`${styles.input} placeholder:text-black`}
          type="text"
          placeholder="نام"
        />
        <input
          value={username}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className={`${styles.input} placeholder:text-black`}
          type="text"
          placeholder="نام کاربری "
        />
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={`${styles.input} placeholder:text-black`}
          type="email"
          placeholder="ایمیل"
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

        <button className={`${styles.btn} mt-5`} onClick={signUp}>
          ثبت نام
        </button>
        <button
          onClick={showLoginForm}
          className={`${styles.back_to_login} bg-amber-900 p-3 text-xl hover:bg-amber-800 `}
        >
          برگشت به ورود
        </button>
      </div>
      <button
        className={`${styles.redirect_to_home} bg-red-600 p-3 rounded-xl `}
      >
        لغو
      </button>
    </>
  );
};

export default Register;
