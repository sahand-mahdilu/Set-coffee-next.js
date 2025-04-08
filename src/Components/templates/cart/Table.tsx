"use client";

import Link from "next/link";
import styles from "./table.module.css";
import totalStyles from "./totals.module.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import Select from "react-select";
import stateData from "@/utils/stateData";
import { CartItems, StateOption } from "@/app/types/types";







const stateOptions: StateOption[] = stateData().map((item) => ({
  value: Array.isArray(item.value) ? item.value[0] : item.value,
  label: item.label,
}));

const Table: React.FC = () => {
  const [cart, setCart] = useState<CartItems[]>([]);
  const [stateSelectedOption, setStateSelectedOption] = useState<StateOption | null>(null); 
  const [changeAddress, setChangeAddress] = useState<boolean>(false); 

 
  useEffect(() => {
    const localCart: CartItems[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(localCart);
  }, []);


  const calcTotalPrice = (): number => {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    <>
      <div className={styles.tabel_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>جمع جزء</th>
              <th>تعداد</th>
              <th>قیمت</th>
              <th>محصول</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{(item.count * item.price).toLocaleString()} تومان</td>
                <td className={styles.counter}>
                  <div>
                    <span>-</span>
                    <p>{item.count}</p>
                    <span>+</span>
                  </div>
                </td>
                <td className={styles.price}>{item.price.toLocaleString()} تومان</td>
                <td className={styles.product}>
                  <img
                    src="https://set-coffee.com/wp-content/uploads/2020/12/Red-box-DG--430x430.jpg"
                    alt={item.name}
                  />
                  <Link href={"/"}>{item.name}</Link>
                </td>
                <td>
                  <IoMdClose className={styles.delete_icon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section>
          <button className={styles.update_btn}>بروزرسانی سبد خرید</button>
          <div>
            <button className={styles.set_off_btn}>اعمال کوپن</button>
            <input type="text" placeholder="کد تخفیف" />
          </div>
        </section>
      </div>
      <div className={totalStyles.totals}>
        <p className={totalStyles.totals_title}>جمع کل سبد خرید</p>
        <div className={totalStyles.subtotal}>
          <p>جمع جزء</p>
          <p>{calcTotalPrice().toLocaleString()} تومان</p>
        </div>
        <p className={totalStyles.motor}>
          پیک موتوری: <strong>30,000</strong>
        </p>
        <div className={totalStyles.address}>
          <p>حمل و نقل</p>
          <span>حمل و نقل به تهران (فقط شهر تهران).</span>
        </div>
        <p
          onClick={() => setChangeAddress((prev) => !prev)}
          className={totalStyles.change_address}
        >
          تغییر آدرس
        </p>
        {changeAddress && (
          <div className={totalStyles.address_details}>
            <Select
              defaultValue={stateSelectedOption}
              onChange={setStateSelectedOption}
              isClearable={true}
              placeholder={"استان"}
              isRtl={true}
              isSearchable={true}
              options={stateOptions} 
            />
            <input type="text" placeholder="شهر" />
            <input type="number" placeholder="کد پستی" />
            <button onClick={() => setChangeAddress(false)}>بروزرسانی</button>
          </div>
        )}
        <div className={totalStyles.total}>
          <p>مجموع</p>
          <p>{calcTotalPrice().toLocaleString()} تومان</p>
        </div>
        <Link href={"/checkout"}>
          <button className={totalStyles.checkout_btn}>ادامه جهت تسویه حساب</button>
        </Link>
      </div>
    </>
  );
};

export default Table;