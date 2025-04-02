import { IoMdStar } from "react-icons/io";
import styles from "./commentForm.module.css";
import { useState } from "react";
import { showSwal } from "@/utils/helpers";
import { valiadteEmail } from "@/utils/auth";
const CommentForm = ({productID}:{productID:String}) => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [score, setScore] = useState(5);

  const setCommentScore = (score:number) => {
    setScore(score);
    showSwal("امتیاز شما با موفقیت ثبت شد", "success", "ادامه ثبت کامنت");
  };


  const submitComment = async () => {
    // Validation 


    if (!username.trim()) {
      showSwal("لطفا نام خود را وارد کنید", "error", "تلاش مجدد");
      return;
    }
  
    if (!email.trim()) {
      showSwal("لطفا ایمیل خود را وارد کنید", "error", "تلاش مجدد");
      return;
    }
  
    // Email validation
    const emailPattern = valiadteEmail(email)
    if (!emailPattern) {
      showSwal("لطفا یک ایمیل معتبر وارد کنید", "error", "تلاش مجدد");
      return;
    }
  
    if (!body.trim()) {
      showSwal("لطفا دیدگاه خود را وارد کنید", "error", "تلاش مجدد");
      return;
    }

    
  



    const comment = {
      username,
      email,
      body,
      score,
      productID,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "appliaction/json",
      },
      body: JSON.stringify(comment),
    });

    console.log("Response ->", res);
    if (res.status === 201) {
      showSwal("کامنت مورد نظر با موفقیت ثبت شد", "success", "ok");
    }

    setUsername("")
    setEmail("")    
    setBody("")


  };


  
  return (
    <div className={styles.form}>
      <p className={styles.title}>دیدگاه خود را بنویسید</p>
      <p>
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span style={{ color: "red" }}>*</span>
      </p>
      <div className={styles.rate}>
        <p>امتیاز شما :</p>
        <div>
          <IoMdStar onClick={() => setCommentScore(5)}/>
          <IoMdStar onClick={() => setCommentScore(4)}/>
          <IoMdStar onClick={() => setCommentScore(3)}/>
          <IoMdStar onClick={() => setCommentScore(2)}/>
          <IoMdStar onClick={() => setCommentScore(1)}/>
        </div>
      </div>
      <div className={styles.group}>
        <label htmlFor="">
          دیدگاه شما
          <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          cols={45}
          rows={8}
          placeholder=""
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
      </div>
      <div className=" flex gap-7 max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className={styles.group}>
          <label htmlFor="">
            نام
            <span style={{ color: "red" }}>*</span>
          </label>
          <input 
           value={username}
           onChange={(event) => setUsername(event.target.value)}
          type="text" />
        </div>
        <div className={styles.group}>
          <label htmlFor="">
            ایمیل
            <span style={{ color: "red" }}>*</span>
          </label>
          <input 
              value={email}
              onChange={(event) => setEmail(event.target.value)}
          type="email" />
        </div>
      </div>
      <div className={styles.checkbox}>
        <input type="checkbox" name="" id="" />
        <p>
          {" "}
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button onClick={submitComment}>ثبت</button>
    </div>
  );
};

export default CommentForm;
