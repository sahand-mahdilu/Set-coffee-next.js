import Comment from "@/Components/modules/comments/Comment";
import CommentForm from "./CommentForm";
import styles from "./comments.module.css";
import { CommentType } from "@/app/types/types";

const Comments = ({ comments ,productID }: { comments: CommentType[] ,productID:string }) => {

  
  return (
    <div>
      <p>نظرات ({comments.length}) :</p>
      <hr />

      <main className="flex gap-12 max-md:flex-col max-md:items-center">
        <div className={styles.user_comments}>
          <p className={`${styles.title} text-xl font-bold`}>
            {comments.length} دیدگاه برای این محصول 
          </p>
          <div>
            {comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))}
          </div>
        </div>
        <div className="w-[50%] max-sm:w-[80%]">
          <CommentForm productID={productID}/>
        </div>
      </main>
    </div>
  );
};

export default Comments;
