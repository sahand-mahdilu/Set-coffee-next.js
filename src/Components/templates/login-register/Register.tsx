import { useState } from "react";
import styles from "./register.module.css";

const Register = ({ showloginForm }) => {
  const [isRegisterWithPass, setIsRegisterWithPass] = useState(false);

 

  return (
   
     
        <>
          <div className={styles.form}>
            <input className={styles.input} type="text" placeholder="نام" />
            <input
              className={styles.input}
              type="text"
              placeholder="نام کاربری "
            />
            <input
              className={styles.input}
              type="email"
              placeholder="ایمیل"
            />
              <input
              className={styles.input}
              type="password"
              placeholder="رمز عبور"
            />

            {isRegisterWithPass && (
              <input
                className={styles.input}
                type="password"
                placeholder="رمز عبور"
              />
            )}

            <p
              style={{ marginTop: "1rem" }}
              className={styles.btn}
          
            >
              ثبت نام
            </p>

         
            <p onClick={showloginForm} className={styles.back_to_login}>
              برگشت به ورود
            </p>
          </div>
          <p className={styles.redirect_to_home}>لغو</p>
        </>
    
  );
};

export default Register;
