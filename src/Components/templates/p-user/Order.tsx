import Link from "next/link";
import styles from "./order.module.css";
import { OrderType } from "@/app/types/types";



const Order: React.FC<OrderType> = ({ name, price, count, img }) => {
  return (
    <Link href={`/product/123`} className={styles.card}>
      <div>
        <div>
          <p className="max-sm:text-[12px]">{name}</p>
          <img src={img} alt="" />
        </div>
        <p className="max-sm:text-[12px]">درانتظار پرداخت</p>
      </div>
      <div>
        <p className="max-sm:text-[12px]">8:00 1402/10/21</p>
        <p className={`${styles.price} max-sm:text-[12px]`}>{price}</p>
        <p>تعداد : {count}</p>
      </div>
    </Link>
  );
};

export default Order;