import React, { useState } from "react";
import styles from "./register.module.css";
import { RegisterProps } from "@/app/types/types";


const Register: React.FC<RegisterProps> = ({ showLoginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);

  return (
    <>
      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="نام" />
        <input className={styles.input} type="text" placeholder="نام کاربری " />
        <input className={styles.input} type="email" placeholder="ایمیل" />
        <input
          className={styles.input}
          type="password"
          placeholder="رمز عبور"
        />

        {isRegisterWithPass && (
          <input
            className={styles.input}
            type="password"
            placeholder="تکرار رمز عبور"
          />
        )}

        <button className={styles.btn} onClick={() => alert("ثبت نام")}>
          ثبت نام
        </button>
        <p onClick={showLoginForm} className={styles.back_to_login}>
          برگشت به ورود
        </p>
      </div>
      <p className={styles.redirect_to_home}>لغو</p>
    </>
  );
};

export default Register;