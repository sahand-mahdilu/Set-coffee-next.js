import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { LoginProps } from "@/app/types/types";



const Login: React.FC<LoginProps> = ({ showRegisterForm }) => {
  return (
    <>
      <div className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="ایمیل/نام کاربری"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="رمز عبور"
        />
        <div className={styles.checkbox}>
          <input type="checkbox" />
          <p>مرا به یاد داشته باش</p>
        </div>
        <button className={`${styles.btn} text-white`}>ورود</button>
        <span>آیا حساب کاربری ندارید؟</span>
        <button onClick={showRegisterForm} className={styles.btn_light}>
          ثبت نام
        </button>
      </div>
      <Link href={"/"} className={styles.redirect_to_home}>
        لغو
      </Link>
    </>
  );
};

export default Login;