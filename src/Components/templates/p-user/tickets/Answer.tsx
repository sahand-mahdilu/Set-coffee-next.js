import { AnswerProps } from "@/app/types/types";
import styles from "./answer.module.css";
import Image from "next/image"; 

const Answer: React.FC<AnswerProps> = ({ type, body, createdAt, user }) => {
  return (
    <section
      className={
        type === "user"
          ? `${styles.userTicket} w-1/2 max-sm:w-full`
          : `${styles.adminTicket} w-1/2 max-sm:w-full`
      }
    >
      <div className={styles.ticket_main}>
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <div>
          <div>
            <p>{user?.name}</p>
            <span>{type === "user" ? "کاربر" : "مدیر"}</span>
          </div>
          <Image
            src="/images/shahin.jpg"
            alt="تصویر کاربر"
            width={40} 
            height={40} 
            style={{ borderRadius: '50%', objectFit: 'cover' }} 
          />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Answer;