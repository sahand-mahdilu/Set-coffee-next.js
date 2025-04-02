import mongoose, { Document, Schema, Model } from "mongoose";
import "./User";
import "./Product"

interface IWishList {
  user: mongoose.Schema.Types.ObjectId;
  product: mongoose.Schema.Types.ObjectId;
}

interface IWishListDocument extends IWishList, Document {}

const WishListSchema: Schema<IWishListDocument> = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WishListModel: Model<IWishListDocument> =
  mongoose.models.Wishlist ||
  mongoose.model<IWishListDocument>("Wishlist", WishListSchema);

export default WishListModel;
