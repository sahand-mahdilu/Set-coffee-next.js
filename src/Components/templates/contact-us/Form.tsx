"use client";
import { useState } from "react";
import styles from "./form.module.css";
import { showSwal } from "@/utils/helpers";

const Form = () => {
  const [email, setEmail] = useState<string>(""); // تایپ‌دهی مشخص
  const [name, setName] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const submitMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 

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
      <button type="submit">ارسال</button> {/* تغییر نوع دکمه به submit */}
    </form>
  );
};

export default Form;