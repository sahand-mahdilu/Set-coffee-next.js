import mongoose, { Schema, model, models, Document } from "mongoose";


interface IContact extends Document {
  email: string;
  name: string;
  company?: string; 
  phone: string;
  message: string;
}


const contactSchema: Schema<IContact> = new Schema({
  email: {
    type: String,
    required: true,
   
 
  },
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactModel = models.Contact || model<IContact>("Contact", contactSchema);

export default ContactModel;