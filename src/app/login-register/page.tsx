"use client";
import styles from "@/styles/login-register.module.css";
import { useState } from "react";


import { authTypes } from "@/utils/constant";
import Login from "@/Components/templates/login-register/Login";
import Register from "@/Components/templates/login-register/Register";

const login_register = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN);

  const showRegisterForm = () => setAuthType(authTypes.REGISTER);
  const showloginForm = () => setAuthType(authTypes.LOGIN);

  return (
    <div className={`${styles.login_page} flex justify-center items-center`}>
      <div className={styles.form_bg} data-aos="fade-up">
        {authType === authTypes.LOGIN ? (
          <Login showRegisterForm={showRegisterForm} />
        ) : (
          <Register showLoginForm={showloginForm} />
        )}
      </div>
     
    </div>
  );
};

export default login_register;
