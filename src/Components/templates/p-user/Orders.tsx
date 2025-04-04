import Link from "next/link";
import Order from "./Order";
import styles from "./orders.module.css";
import { FaArrowLeft } from "react-icons/fa6";

const Orders = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_details}>
        <p className="max-sm:text-[10px] font-bold">سفارش های اخیر</p>
        <Link className="max-sm:text-[10px] font-bold" href="/p-user/orders">
          همه سفارش ها <FaArrowLeft />
        </Link>
      </div>
      <Order />
      <Order />
      <Order />

      {/* <p className={styles.empty}>سفارشی ثبت نشده</p> */}
    </div>
  );
};

export default Orders;
