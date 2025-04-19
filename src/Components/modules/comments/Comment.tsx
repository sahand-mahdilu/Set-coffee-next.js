import { FaRegStar, FaStar } from "react-icons/fa";
import styles from "./comment.module.css";
import { SingleComment } from "@/app/types/types";
import Image from "next/image"; 

const Comment = ({ username, body, date, score }: SingleComment) => {
  return (
    <section className={styles.comment}>
      <Image
        src="/images/shahin.jpg"
        className={styles.avatar}
        alt={username} 
        width={50} 
        height={50} 
      />
      <div>
        <div className={styles.main_details}>
          <div className={styles.user_info}>
            <strong>{username}</strong>
            <p>{new Date(date).toLocaleDateString("fa-IR")}</p>
          </div>
          <div className={styles.stars}>
            {new Array(score).fill(0).map((item, index) => (
              <FaStar key={index} />
            ))}
            {new Array(5 - score).fill(0).map((item, index) => (
              <FaRegStar key={index} />
            ))}
          </div>
        </div>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Comment;