import React from "react";
import styles from "./breadcrumb.module.css";
const Breadcrumb = ({ title }:{title:string}) => {
  return (
    <section className={`${styles.breadcrumb} `}>
      <div className="flex gap-[6px] max-lg:flex-col">
    <div className="flex gap-1">
    <a href="/">خانه </a>
      <span>/</span>
      <a href="/">همه موارد </a>
    </div>
      <span className="max-lg:hidden">/</span>
      
      <p className="font-bold">{title}</p>
      </div>
      
    </section>
  );
};

export default Breadcrumb;
