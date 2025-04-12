"use client";
import styles from "./sidebar.module.css";
import { ImReply } from "react-icons/im";
import {
  FaBars,
  FaComments,
  FaHeart,
  FaShoppingBag,
  FaUsers,
} from "react-icons/fa";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdSms, MdLogout } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import swal from "sweetalert";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsopen] = useState(false);
  const path = usePathname();
  const router = useRouter();

  const logoutHandler = () => {
    swal({
      title: "آیا از خروج اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch("/api/auth/signout", {
          method: "POST",
        });

        if (res.status === 200) {
          swal({
            title: "با موفقیت از اکانت خارج شدید",
            icon: "success",
            buttons: {
              confirm: {
                text: "ok",
                value: true,
                visible: true,
                className: "btn-confirm",
                closeModal: true,
              },
            },
          }).then((result) => {
            router.replace("/");
          });
        }
      }
    });
  };

  const openSidebar = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <div className="bg-black h-[100vh] pr-1 z-30 fixed top-0">
        <FaBars
          onClick={openSidebar}
          className="hidden max-md:block  text-white mt-6 "
        />
      </div>

      <aside
        className={`${styles.sidebar} ${
          !isOpen
            ? " transition-all max-md:-right-[280px] max-md:absolute sticky top-0"
            : " max-md:right-0 z-50 fixed top-0 transition-all"
        } `}
      >
        <div className={styles.sidebar_header}>
          <p>خوش اومدی شاهین عزیز</p>
          <GiCancel onClick={openSidebar} className="hidden max-md:block" />
        </div>
        <ul className={styles.sidebar_main}>
          {path.includes("/p-user") ? (
            <>
              <Link href={"/p-user"} className={styles.sidebar_link_active}>
                <ImReply />
                پیشخوان
              </Link>
              <Link href={"/p-user/orders"}>
                <FaShoppingBag />
                سفارش ها
              </Link>
              <Link href={"/p-user/tickets"}>
                <MdSms />
                تیکت های پشتیبانی
              </Link>
              <Link href={"/p-user/comments"}>
                <FaComments />
                کامنت ها
              </Link>
              <Link href={"/p-user/wishlist"}>
                <FaHeart />
                علاقه مندی
              </Link>
              <Link href={"/p-user/account-details"}>
                <TbListDetails />
                جزئیات اکانت
              </Link>
            </>
          ) : (
            <>
              <Link href={"/p-admin"} className={styles.sidebar_link_active}>
                <ImReply />
                پیشخوان
              </Link>

              <Link href={"/p-admin/products"}>
                <FaShoppingBag />
                محصولات
              </Link>
              <Link href={"/p-admin/users"}>
                <FaUsers />
                کاربران
              </Link>
              <Link href={"/p-admin/comments"}>
                <FaComments />
                کامنت ها
              </Link>

              <Link href={"/p-admin/tickets"}>
                <MdSms />
                تیکت ها
              </Link>
            </>
          )}
        </ul>
        <div className={styles.logout} onClick={logoutHandler}>
          <MdLogout />
          خروج
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
