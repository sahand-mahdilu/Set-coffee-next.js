import Link from "next/link";
import styles from "./stepper.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { StepperProps } from "@/app/types/types";



const Stepper: React.FC<StepperProps> = ({ step }) => {
  return (
    <div className={styles.stepper_bg}>
      <div className={styles.stepper}>
        <Link className={step === "cart" ? styles.active_step : undefined} href={"/cart"}>
          سبد خرید
        </Link>
        <FaArrowLeftLong />
        {step === "checkout" || step === "complate" ? (
          <Link
            className={step === "checkout" ? styles.active_step : undefined}
            href={"/checkout"}
          >
            پرداخت
          </Link>
        ) : (
          <p>پرداخت</p>
        )}
        <FaArrowLeftLong />
        {step === "complate" ? (
          <Link
            className={step === "complate" ? styles.active_step : undefined}
            href={"/complate"}
          >
            تکمیل سفارش
          </Link>
        ) : (
          <p>تکمیل سفارش</p>
        )}
      </div>
    </div>
  );
};

export default Stepper;