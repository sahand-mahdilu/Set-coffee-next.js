import mongoose, { Schema, Document, Model } from "mongoose";
import "./Department"; 

interface ISubDepartment extends Document {
  title: string;
  department: mongoose.Types.ObjectId;
}


const schema: Schema<ISubDepartment> = new Schema({
  title: {
    type: String,
    required: true,
  },
  department: {
    type: Schema.Types.ObjectId, 
    ref: "Department",
    required: true,
  },
});


const SubDepartmentModel: Model<ISubDepartment> =
  mongoose.models.SubDepartment || mongoose.model<ISubDepartment>("SubDepartment", schema);

export default SubDepartmentModel;