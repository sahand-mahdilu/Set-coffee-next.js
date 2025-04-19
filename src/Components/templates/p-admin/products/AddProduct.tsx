"use client";

import React, { useState, ChangeEvent } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

// type
interface FormData {
  name: string;
  price: string;
  shortDescription: string;
  longDescription: string;
  weight: string;
  suitableFor: string;
  smell: string;
  tags: string;
  img: File | null;
}

const AddProduct: React.FC = () => {
  const router = useRouter();

  const initialFormData: FormData = {
    name: "",
    price: "",
    shortDescription: "",
    longDescription: "",
    weight: "",
    suitableFor: "",
    smell: "",
    tags: "",
    img: null,
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setFormData({ ...formData, img: files ? files[0] : null });
  };

  const validateForm = (): string | null => {
    const { name, price, shortDescription, longDescription, weight, suitableFor, smell, tags, img } = formData;

    if (!name.trim()) return "نام محصول نمی‌تواند خالی باشد.";
    if (!price.trim() || isNaN(Number(price))) return "مبلغ محصول باید یک عدد معتبر باشد.";
    if (!shortDescription.trim()) return "توضیحات کوتاه محصول نمی‌تواند خالی باشد.";
    if (!longDescription.trim()) return "توضیحات بلند محصول نمی‌تواند خالی باشد.";
    if (!weight.trim() || isNaN(Number(weight))) return "وزن محصول باید یک عدد معتبر باشد.";
    if (!suitableFor.trim()) return "مشخص کنید محصول مناسب چه کسی است.";
    if (!smell.trim()) return "میزان بو نمی‌تواند خالی باشد.";
    if (!tags.trim()) return "تگ‌های محصول نمی‌تواند خالی باشد.";
    if (!img) return "لطفا تصویر محصول را انتخاب کنید.";

    return null;
  };

  const addProduct = async () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      swal({
        title: "خطا در ثبت محصول",
        text: errorMessage,
        icon: "error",
        buttons: {
          confirm: {
            text: "تلاش مجدد",
            value: true,
          },
        },
      });
      return;
    }

    const { name, price, shortDescription, longDescription, weight, suitableFor, smell, tags, img } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("name", name);
    formDataToSend.append("price", price);
    formDataToSend.append("shortDescription", shortDescription);
    formDataToSend.append("longDescription", longDescription);
    formDataToSend.append("weight", weight);
    formDataToSend.append("suitableFor", suitableFor);
    formDataToSend.append("smell", smell);
    formDataToSend.append("tags", JSON.stringify(tags.split("،")));
    if (img) {
      formDataToSend.append("img", img);
    }

    const res = await fetch("/api/products", {
      method: "POST",
      body: formDataToSend,
    });

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        buttons: {
          confirm: {
            text: "ok",
            value: true,
          },
        },
      }).then(() => {
        setFormData(initialFormData);
        router.refresh();
      });
    } else {
      swal({
        title: "خطا در ثبت محصول",
        text: "متأسفانه مشکلی رخ داده است.",
        icon: "error",
        buttons: {
          confirm: {
            text: "تلاش مجدد",
            value: true,
          },
        },
      });
    }
  };

  return (
    <section className={styles.discount}>
      <p>افزودن محصول جدید</p>
      <div className={styles.discount_main}>
        {[
          { label: "نام محصول", name: "name", placeholder: "لطفا نام محصول را وارد کنید", type: "text" },
          { label: "مبلغ محصول", name: "price", placeholder: "لطفا مبلغ محصول را وارد کنید", type: "text" },
          { label: "توضیحات کوتاه", name: "shortDescription", placeholder: "توضیحات کوتاه محصول", type: "text" },
          { label: "توضیحات بلند", name: "longDescription", placeholder: "توضیحات بلند محصول", type: "text" },
          { label: "وزن", name: "weight", placeholder: "وزن محصول", type: "text" },
          { label: "مناسب برای", name: "suitableFor", placeholder: "مناسب برای ...", type: "text" },
          { label: "میزان بو", name: "smell", placeholder: "میزان بو", type: "text" },
          { label: "تگ‌های محصول", name: "tags", placeholder: "مثال: قهوه،قهوه ترک،قهوه اسپرسو", type: "text" },
        ].map((input, index) => (
          <div key={index}>
            <label>{input.label}</label>
            <input
              name={input.name}
              value={String(formData[input.name as keyof FormData])} 
              onChange={handleInputChange}
              placeholder={input.placeholder}
              type={input.type}
            />
          </div>
        ))}
        <div>
          <label>تصویر محصول</label>
          <input name="img" onChange={handleFileChange} type="file" />
        </div>
      </div>
      <button onClick={addProduct}>افزودن</button>
    </section>
  );
};

export default AddProduct;