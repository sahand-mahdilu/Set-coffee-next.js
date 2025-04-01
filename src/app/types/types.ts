import mongoose, { Document } from "mongoose";


interface ArticleFooterProps {
    title: string;
    img: string;
    comments: string;
    date: string;
    href: string;
   
  }

  interface LoginProps {
    showRegisterForm: () => void;
  }

  interface RegisterProps {
    showLoginForm: () => void;
  }
  interface BodyRequest {
    name:string;
    username: string;
    email:string;
    password: string;
    refreshToken:string
    

  }

  interface IUser {
    username: string;
    email: string;

  }
  
  interface IComment extends Document {
    username: string;
    body: string;
    email: string;
    score: number;
    date: Date;
    product: mongoose.Types.ObjectId;
  }


  type NavbarProps = {
    isLogin: (Document<unknown, {}, IUser> & IUser & Required<{ _id: unknown; }> & { __v: number; }) | null;
  };
  
export type { IComment,ArticleFooterProps,LoginProps,RegisterProps,BodyRequest,NavbarProps}  