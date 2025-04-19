import mongoose from "mongoose";

const connectedToDB = async () => {
  const secretKey = process.env.MONGO_URL;
  if (!secretKey) {
    throw new Error(
      "SecretKey is not defined in environment variables"
    );
  }

  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(secretKey);
      console.log("connected to DB successfully");
    }
  } catch (err) {
    console.log("connected to Db error->", err);
  }
};

export default connectedToDB;
