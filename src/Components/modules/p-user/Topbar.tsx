"use client";

import React, { useState } from "react";
import styles from "./topbar.module.css";
import { IoIosNotifications } from "react-icons/io";
import Modal from "./Modal";
import { TopbarProps } from "@/app/types/types";
import Link from "next/link";




const Topbar: React.FC<TopbarProps> = ({ name, role }) => {
  const [showNotifications, setShowNotifications] = useState(false); 
  const [showModal, setShowModal] = useState(false); 

  const hideModal = () => setShowModal(false); 

  return (
    <>
       
      <div
        className={`${styles.topbar} py-2 px-5 max-sm:pl-[6px] fixed top-0 left-0 right-0 z-20`}
      >
        <div
          className={`${styles.profile} flex items-center gap-[10px] flex-wrap`}
        >
          <img src="/images/shahin.jpg" alt="تصویر پروفایل" />
          <div>
            <p className="max-sm:text-[11px]">{name}</p>
            <span className="text-[14px] max-sm:text-[9px]">
              {role === "ADMIN" ? "مدیر" : "کاربر"}
            </span>
          </div>
        </div>
        <section>
          <div className={styles.searchBox}>
          <Link href="/" className="px-2 p-1 bg-white text-black rounded-2xl cursor-pointer hover:bg-blue-400 hover:text-white">خانه</Link>
          
          </div>
          <div
            onClick={() => setShowNotifications(true)}
            className={styles.notification}
          >
            <IoIosNotifications />
            <span>0</span>
          </div>
        </section>
      </div>

  
      {showNotifications && (
        <div>
          <div
            onClick={() => setShowNotifications(false)}
            className={styles.notifications_overlay}
          ></div>
          <section className={styles.notifications_box}>
            <div>
              <p
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                سلام ادمین محترم
              </p>
              <button onClick={() => setShowNotifications(false)}>دیدم</button>
            </div>
            <div>
              <p
                onClick={() => {
                  setShowNotifications(false);
                  setShowModal(true);
                }}
              >
                پیام جدید
              </p>
              <button onClick={() => setShowNotifications(false)}>دیدم</button>
            </div>
          </section>
        </div>
      )}

     
      {showModal && (
        <Modal title="از واحد پشتیبانی" hideModal={hideModal}>
          <p className={styles.modal_text}>عالی هستی ادمین عزیز</p>
        </Modal>
      )}
    </>
  );
};

export default Topbar;