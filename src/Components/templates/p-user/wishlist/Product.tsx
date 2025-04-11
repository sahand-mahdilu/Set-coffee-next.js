"use client";
import { ProductProps } from "@/app/types/types";
import styles from "./product.module.css";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import swal from "sweetalert";

const Product: React.FC<ProductProps> = ({ price, score, name, productId }) => {
  const removeProduct = () => {
    swal({
      title: "آیا از حذف محصول اطمینان دارید؟",
      icon: "warning",
      buttons: ["نه", "آره"],
    }).then(async (result) => {
      if (result) {
        const res = await fetch(`/api/wishlist/${productId}`, {
          method: "DELETE",
        });
        console.log("Res ->", res);

        if (res.status === 200) {
          swal({
            title: "محصول با موفقیت از علاقه‌مندی‌ها حذف شد",
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
          }).then(() => {
            location.reload();
          });
        }
      }
    });
  };

  return (
    <div className={styles.card}>
      <Link href={"/product/123"}>
        <img
          width={283}
          height={283}
          src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
          alt={name}
        />
      </Link>
      <p dir="rtl">{name}</p>
      <div>
        <div>
          {new Array(score).fill(0).map((_, index) => (
            <IoMdStar key={index} />
          ))}
        </div>
        <span>{price.toLocaleString()} تومان</span>
      </div>
      <button onClick={removeProduct} className={styles.delete_btn}>
        حذف محصول
      </button>
    </div>
  );
};

export default Product;