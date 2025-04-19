import React from "react";
import styles from "./breadcrumb.module.css";
import Link from "next/link";
const Breadcrumb = ({ title }:{title:string}) => {
  return (
    <section className={`${styles.breadcrumb} `}>
      <div className="flex gap-[6px] max-lg:flex-col">
    <div className="flex gap-1">
    <Link href="/">خانه </Link>
      <span>/</span>
      <Link href="/">همه موارد </Link>
    </div>
      <span className="max-lg:hidden">/</span>
      
      <p className="font-bold">{title}</p>
      </div>
      
    </section>
  );
};

export default Breadcrumb;
