import styles from "@/styles/404.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className={styles.contents}>
        <p className={styles.left_number}>4</p>
        <div className={styles.mug}></div>
        <p className={styles.right_number}>4</p>
      </div>
      <div className="flex flex-col items-center" >
        <p className="text-2xl font-bold text-red-500">صفحه مورد نظر یافت نشد :((</p>
        <Link className="hover:bg-blue-700 text-xl bg-blue-400 p-1 mt-2 rounded-lg text-white" href="/">برگشت به صفحه اصلی</Link>
      </div>
    </div>
  );
};

export default page;
