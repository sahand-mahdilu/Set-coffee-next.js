"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { showSwal } from "@/utils/helpers";
import { valiadteEmail } from "@/utils/auth";

const Form = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // تابع اعتبارسنجی
  const validateInputs = (): boolean => {
    if (!name.trim()) {
      showSwal("لطفا نام خود را وارد کنید", "error", "تلاش مجدد");
      return false;
    }
    if (!email.trim()) {
      showSwal("لطفا ایمیل خود را وارد کنید", "error", "تلاش مجدد");
      return false;
    }

    const isvalidEmail =valiadteEmail(email)
    if (!isvalidEmail) {
      showSwal("ایمیل معتبر نیست", "error", "تلاش مجدد");
      return false;
    }
    if (!phone.trim()) {
      showSwal("لطفا شماره تماس خود را وارد کنید", "error", "تلاش مجدد");
      return false;
    }
    if (!phone.match(/^\d+$/)) {
      showSwal("شماره تماس فقط باید شامل اعداد باشد", "error", "تلاش مجدد");
      return false;
    }
    if (!message.trim()) {
      showSwal("لطفا متن درخواست خود را وارد کنید", "error", "تلاش مجدد");
      return false;
    }
    return true;
  };

  const submitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    if (!validateInputs()) {
      return;
    }

    const contact = {
      name,
      email,
      phone,
      company,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (res.status === 201) {
      setEmail("");
      setName("");
      setCompany("");
      setPhone("");
      setMessage("");
      showSwal("پیغام شما با موفقیت ثبت شد", "success", "فهمیدم");
    }

    console.log("Res ->", res);
  };

  return (
    <form className={styles.form} onSubmit={submitMessage}>
      <span>فرم تماس با ما</span>
      <p>برای تماس با ما می توانید فرم زیر را تکمیل کنید</p>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>آدرس ایمیل</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.groups}>
        <div className={styles.group}>
          <label>شماره تماس</label>
          <input
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>نام شرکت</label>
          <input
            type="text"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </div>
      </div>
      <div className={styles.group}>
        <label>درخواست شما</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          cols={30}
          rows={3}
        ></textarea>
      </div>
      <button type="submit">ارسال</button>
    </form>
  );
};

export default Form;