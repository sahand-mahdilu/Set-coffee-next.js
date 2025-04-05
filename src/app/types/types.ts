import { LatLngExpression } from "leaflet";
import mongoose, { Document } from "mongoose";
import { ReactNode } from "react";

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
  name: string;
  username: string;
  email: string;
  password: string;
  refreshToken: string;
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

interface IProduct extends Document {
  _id: String;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  weight: number;
  suitableFor: string;
  smell: string;
  score: number;
  tags: string[];
  comments: mongoose.Types.ObjectId[];
}

interface Params {
  id: string;
}

interface CommentType {
  _id: string;
  username: string;
  body: string;
  score: number;
  email: string;
  date: Date;
}

interface SingleComment {
  username: string;
  body: string;
  email: string;
  score: number;
  date: Date;
}
interface CartProps {
  name: string;
  price: number;
  score: number;
}

interface WishListRequestBody {
  user: string;
  product: string;
}

interface Wish {
  _id: String;
  product: {
    name: string;
    price: number;
    score: number;
  };
}

interface UserType {
  _id: string;
  name: string;
  [key: string]: any;
}

interface MapProps {
  position: LatLngExpression;
  center: LatLngExpression;
  children?: ReactNode;
}

interface UserLayoutProps {
  children: React.ReactNode;
}

interface ModalProps {
  hideModal: () => void;
  title: string;
  children: React.ReactNode;
}

interface BoxProps {
  title: string;
  value: string;
}
interface PopulatedWish extends Omit<Wish, "product"> {
  product: {
    _id: string;
    name: string;
    price: number;
    score: number;
  };
}
interface ProductProps {
  productId:string
  price: number;
  score: number;
  name: string;
}


type Department = {
  title: string;
  _id:string
};


type TicketProps = {
  _id: string; 
  title: string; 
  createdAt: string | Date; 
  department: {
    title: string; 
  };
  hasAnswer: boolean; 
};

type NavbarProps = {
  isLogin:
    | (Document<unknown, {}, IUser> &
        IUser &
        Required<{ _id: unknown }> & { __v: number })
    | null;
};

export type {
  TicketProps,
  Department,
  ProductProps,
  PopulatedWish,
  BoxProps,
  ModalProps,
  UserLayoutProps,
  MapProps,
  UserType,
  Wish,
  WishListRequestBody,
  CartProps,
  SingleComment,
  CommentType,
  Params,
  IProduct,
  IComment,
  ArticleFooterProps,
  LoginProps,
  RegisterProps,
  BodyRequest,
  NavbarProps,
};
