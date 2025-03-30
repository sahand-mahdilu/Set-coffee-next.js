import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { LoginProps } from "@/app/types/types";



const Login: React.FC<LoginProps> = ({ showRegisterForm }) => {
  return (
    <>
      <div className={styles.form}>
        <input
          className={`${styles.input} placeholder:text-black`}
          type="text"
          placeholder="ایمیل/نام کاربری"
        />
        <input
          className={`${styles.input} placeholder:text-black`}
          type="password"
          placeholder="رمز عبور"
        />
     
        <button className={`${styles.btn} text-white mt-20`}>ورود</button>
        <span className="text-white text-lg">آیا حساب کاربری ندارید؟</span>
        <button onClick={showRegisterForm} className={styles.btn_light}>
          ثبت نام
        </button>
      </div>
      <Link href={"/"} className={`${styles.redirect_to_home} bg-red-600 p-3 rounded-xl text-white`} >
        لغو
      </Link>
    </>
  );
};

export default Login;