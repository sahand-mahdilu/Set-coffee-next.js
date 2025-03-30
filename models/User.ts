import mongoose, { Schema, Document, Model } from "mongoose";


interface IUser extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
  role?: string; 
  refreshToken?: string; 
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  refreshToken: {
    type: String,
  },
});


const UserModel: Model<IUser> =
  mongoose.models.user || mongoose.model<IUser>("user", userSchema);

export { UserModel };