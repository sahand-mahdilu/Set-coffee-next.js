import mongoose, { Schema, Document, Model } from "mongoose";
import "./Department";

import "./User"; 


interface ITicket extends Document {
  title: string;
  body: string;
  department: mongoose.Types.ObjectId;
 
  user: mongoose.Types.ObjectId;
  priority: 1 | 2 | 3; 
  hasAnswer:boolean;
  isAnswer:boolean;
  mainTicket?: mongoose.Types.ObjectId;
  
}


const schema: Schema<ITicket> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
   
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    hasAnswer: {
      type: Boolean,
      default: false,
    },
    isAnswer: {
      type: Boolean,
      default: false,
    },
    mainTicket: {
      type: mongoose.Types.ObjectId,
      ref: "Ticket",
      required: false,
    },
  },
  {
    timestamps: true, 
  }
);


const TicketModel: Model<ITicket> =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", schema);

export default TicketModel;