import mongoose, { Schema, Document, Model } from "mongoose";
import "./Department";
import "./SubDepartment";

interface ITicket extends Document {
  title: string;
  body: string;
  department: mongoose.Types.ObjectId;
  subDepartment: mongoose.Types.ObjectId;
  priority: number;
}

const schema: Schema<ITicket> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    subDepartment: {
      type: Schema.Types.ObjectId,
      ref: "SubDepartment",
      required: true,
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
  },
  {
    timestamps: true,
  }
);

const TicketModel: Model<ITicket> =
  mongoose.models.Ticket || mongoose.model<ITicket>("Ticket", schema);

export default TicketModel;
