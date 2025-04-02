"use client";
import React from "react";
import styles from "./tabs.module.css";
import { useState } from "react";
import Description from "./Description";
import Comments from "./Comments";
import MoreInfos from "./MoreInfos";
import { IProduct } from "@/app/types/types";
const Tabs = ({product}:{product:IProduct}) => {
  const [tab, setTab] = useState("description");
  return (
    <div data-aos="fade-left" className={styles.tabs}>
      <input
        onClick={() => setTab("description")}
        type="radio"
        id="description"
        name="tab-control"
        checked={tab === "description"}
        onChange={() => {}}


      />
      <input
        onClick={() => setTab("moreInfoes")}
        type="radio"
        id="moreInfoes"
        name="tab-control"
        checked={tab === "moreInfoes"}
        onChange={() => {}}

      />
      <input
        onClick={() => setTab("comments")}
        type="radio"
        id="comments"
        name="tab-control"
        checked={tab === "comments"}
        onChange={() => {}}

      />
      <ul >
        <li title="Features">
          <label className="max-sm:text-[8px]"  htmlFor="description" role="button">
            {" "}
            توضیحات{" "}
          </label>
        </li>
        <li title="Delivery Contents">
          <label htmlFor="moreInfoes" role="button">
            {" "}
            اطلاعات بیشتر{" "}
          </label>
        </li>
        <li title="Shipping">
          <label htmlFor="comments" role="button">
            {" "}
            نظرات {" "}
          </label>
        </li>
      </ul>

      <div className={styles.contents}>
        <section className={styles.tabs_content}>
          <Description />
        </section>
        <section className={styles.tabs_content}>
          <MoreInfos product= {JSON.parse(JSON.stringify(product))}/>
        </section>
        <section className={styles.tabs_content}>
          <Comments productID  ={product._id} comments={JSON.parse(JSON.stringify(product.comments))} />
        </section>
      </div>
    </div>
  );
};

export default Tabs;
