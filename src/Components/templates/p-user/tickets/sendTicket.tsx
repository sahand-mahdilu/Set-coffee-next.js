"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/p-user/sendTicket.module.css";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { Department } from "@/app/types/types";




function SendTicket() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [department, setDepartment] = useState<Department[]>([]); 
  const [subDepartment, setSubDepartment] = useState<Department[]>([]);
  const [priority, setPriority] = useState<number>(1);

  useEffect(() => {
    const getDepartments = async () => {
      const res = await fetch("/api/departments");
      const data: Department[] = await res.json(); 
      setDepartment([...data]); 
    };

    getDepartments();
  }, []);

  return (
    <main className={`${styles.container} grid `}>
      <h1 className={`${styles.title} flex justify-between text-3xl max-sm:text-[16px]`}>
        <span>ارسال تیکت جدید</span>
        <Link href="/p-user/tickets"> همه تیکت ها</Link>
      </h1>

      <div className={`${styles.content} grid grid-cols-2 max-sm:grid-cols-1`}>
        <div className={styles.group}>
          <label>دپارتمان را انتخاب کنید:</label>
          <select>
            <option value={-1}>لطفا دپارتمان را انتخاب نمایید</option>
            {department.map((dept) => (
              <option key={dept.title} value={dept.title}>
                {dept.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.group}>
          <label>نوع تیکت را انتخاب کنید:</label>
          <select>
            <option>لطفا یک مورد را انتخاب نمایید.</option>
            <option value={"پشتیبانی"}>پشتیبانی </option>
          </select>
        </div>
        <div className={styles.group}>
          <label>عنوان تیکت را وارد کنید:</label>
          <input
            placeholder="عنوان..."
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.group}>
          <label>سطح اولویت تیکت را انتخاب کنید:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(parseInt(e.target.value))}
          >
            <option>لطفا یک مورد را انتخاب نمایید.</option>
            <option value="3">کم</option>
            <option value="2">متوسط</option>
            <option value="1">بالا</option>
          </select>
        </div>
      </div>
      <div className={styles.group}>
        <label>محتوای تیکت را وارد نمایید:</label>
        <textarea
          rows={10}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.uploader}>
        <span>حداکثر اندازه: 6 مگابایت</span>
        <span>فرمت‌های مجاز: jpg, png.jpeg, rar, zip</span>
        <div className="flex mt-2 justify-center items-center w-[250px] p-4">

        <input type="file" />
        </div>
      </div>

      <button className={styles.btn}>
        <IoIosSend />
        ارسال تیکت
      </button>
    </main>
  );
}

export default SendTicket;