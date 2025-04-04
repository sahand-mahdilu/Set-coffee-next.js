import React from "react";
import styles from "./box.module.css";
import { IoStatsChart } from "react-icons/io5";
import { BoxProps } from "@/app/types/types";



const Box: React.FC<BoxProps> = ({ title, value }) => {
  return (
    <div className={styles.box}>
      <span>{value}</span>
      <div>
        <p>{title}</p>
        <IoStatsChart className={styles.box_chart_icon} />
      </div>
    </div>
  );
};

export default Box;