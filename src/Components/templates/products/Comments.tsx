import Comment from "@/Components/modules/comments/Comment";
import CommentForm from "./CommentForm";
import styles from "./comments.module.css";
import { CommentType } from "@/app/types/types";

const Comments = ({ comments }: { comments: CommentType[] }) => {
  return (
    <div>
      <p>نظرات (7) :</p>
      <hr />

      <main className="flex gap-12 max-md:flex-col max-md:items-center">
        <div className={styles.user_comments}>
          <p className={styles.title}>
            7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
            ده -10- عددی
          </p>
          <div>
            {comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))}
          </div>
        </div>
        <div className="w-[50%] max-sm:w-[80%]">
          <CommentForm />
        </div>
      </main>
    </div>
  );
};

export default Comments;
