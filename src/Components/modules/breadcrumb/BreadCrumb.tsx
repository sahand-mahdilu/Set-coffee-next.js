import Link from "next/link";
import styles from "./breadcrumb.module.css";
const Breadcrumb = ({ route  }: { route: string  }) => {
  return (
    <div className={styles.breadcrumb}>
      <p className={`${styles.title} text-7xl mb-4 max-sm:text-5xl`}>{route}</p>
      <div>
        <Link className="text-white" href={"/"}>خانه</Link>
        <span className="text-white">/</span>
        <p className="text-white">{route}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
