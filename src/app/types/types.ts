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
  _id:string;
  username: string;
  body: string;
  email: string;
  score: number;
  date: Date;
  product: mongoose.Types.ObjectId;
  productID:{
    name:string
  }
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
  img:string
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
  img?:string
  _id:string
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
    img:string
  };
}
interface ProductProps {
  productId:string
  price: number;
  score: number;
  name: string;
  img:string
}


type Department = {
  title: string;
  _id:string
};


type TicketProps = {
  _id: string; 
  title: string; 
  createdAt: string | Date; 
  department ?: {
    title: string; 
    
  };
  hasAnswer ? : boolean; 
  body: string;
  user: string | { name: string };

};

type TicketsProp={
  tickets: TicketProps[];
};
interface PageParams {
  id: string; 
}




interface AnswerProps {
  type: "user" | "admin";
  title?: string;
  body: string;
  createdAt: string; // Ensure string type
  user?: { name: string };
}


type Ticket = {
  _id: string;
  title: string;
  body: string;
  createdAt: string | Date;
  user: { name: string } | string; 
  department?: { title: string };
  hasAnswer?: boolean;
};

interface PageProps {
  params: { id: string };
}
interface LayoutProps {
  children: ReactNode; 
}

interface User {
  _id: string; 
  name: string; 
  email?: string;
  role: "USER" | "ADMIN"; 
}

interface DataTableProps {
  users: User[]; 
  title: string; 
}
interface ChangeRoleProps {
  userID: string; 
}


interface AdTicket {
  _id: string;
  user: {
    name: string;
  };
  title: string;
  body: string;
  department: {
    title: string;
  };
}

interface DataTicketTableProps {
  tickets: Ticket[]; 
  title: string; 
}

interface DetailsProps {
  product: IProduct;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  img:string
}
interface CartItems {
  id: string;
  name: string;
  price: number;
  count: number;
}
interface StateOption {
  value: string; 
  label: string;
}
interface StepperProps {
  step: "cart" | "checkout" | "complate";
}









interface Product {
  _id: string;
  name: string;
  price: number;
  shortDescription?: string; 
  longDescription?:string;
  weight:number;
  suitableFor:string;
  smell:string;
  score:number;
  tags:string[];
img: string;
}

interface LastestProps {
  products: Product[];
}
interface adminDataTableProps {
  products: Product[];
  title: string;
}
interface TopbarProps {
  name: string; 
  role?: "ADMIN" | "USER"; 
}

type NavbarProps = {
  isLogin:{
    role:string
  }
   
};
interface AdminTopbarProps {
  name: string; 
  role: "ADMIN" | "USER"; 
}
interface OrderType {
  id: string;
  name: string;
  price: number;
  count: number;
  img?: string;
}


export type {
  OrderType,
  Product,
  AdminTopbarProps,
  TopbarProps,
  LastestProps,
  adminDataTableProps,
  StepperProps,
  StateOption,
  CartItems,
  CartItem,
  DetailsProps,
  DataTicketTableProps,
  ChangeRoleProps,
  DataTableProps,
  User,
  LayoutProps,
  PageProps,
  Ticket,
  AnswerProps,
  PageParams,
  TicketsProp,
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
