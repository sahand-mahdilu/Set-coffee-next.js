import React, { useState } from "react";
import styles from "./register.module.css";
import { RegisterProps } from "@/app/types/types";


const Register: React.FC<RegisterProps> = ({ showLoginForm }) => {

  return (
    <>
      <div className={styles.form}>
        <input className={`${styles.input} placeholder:text-black`} type="text" placeholder="نام" />
        <input className={`${styles.input} placeholder:text-black`} type="text" placeholder="نام کاربری " />
        <input className={`${styles.input} placeholder:text-black`} type="email" placeholder="ایمیل" />
        <input
          className={`${styles.input} placeholder:text-black`}
          type="password"
          placeholder="رمز عبور"
        />

 

        <button className={`${styles.btn} mt-5`} onClick={() => alert("ثبت نام")}>
          ثبت نام
        </button>
        <button  onClick={showLoginForm} className={`${styles.back_to_login} bg-amber-900 p-3 text-xl hover:bg-amber-800 `}>
          برگشت به ورود
        </button>
      </div>
      <button className={`${styles.redirect_to_home} bg-red-600 p-3 rounded-xl `}>لغو</button>
    </>
  );
};

export default Register;