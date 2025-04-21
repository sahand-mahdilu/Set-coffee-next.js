import mongoose, { Schema, Document, Model } from "mongoose";


interface IDepartment extends Document {
  title: string;
}


const schema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const DepartmentModel: Model<IDepartment> =
  mongoose.models.Department || mongoose.model<IDepartment>("Department", schema);

export default DepartmentModel;