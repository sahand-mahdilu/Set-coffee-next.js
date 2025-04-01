import mongoose, { Schema, Document, Model } from "mongoose";
import "./Product"; 


interface IComment extends Document {
  username: string;
  body: string;
  email: string;
  score: number;
  date: Date;
  product: mongoose.Types.ObjectId;
}


const CommentSchema: Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
  },
});


const CommentModel: Model<IComment> =
  mongoose.models.Comment || mongoose.model<IComment>("Comment", CommentSchema);

export default CommentModel;