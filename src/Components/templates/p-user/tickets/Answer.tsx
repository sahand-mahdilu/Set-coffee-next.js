import { AnswerProps } from "@/app/types/types";
import styles from "./answer.module.css";



const Answer: React.FC<AnswerProps> = ({ type, title, body, createdAt, user }) => {
  return (
    <section className={type === "user" ? styles.userTicket : styles.adminTicket}>
      <div className={styles.ticket_main}>
        <p>{new Date(createdAt).toLocaleDateString("fa-IR")}</p>
        <div>
          {user && (
            <div>
              <p>{user.name}</p>
              <span>{type === "user" ? "کاربر" : "مدیریت"}</span>
            </div>
          )}
          <img src="/images/shahin.jpg" alt="تصویر کاربر" />
        </div>
      </div>
      <div className={styles.ticket_text}>
        <p>{body}</p>
      </div>
    </section>
  );
};

export default Answer;