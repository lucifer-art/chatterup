import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    mongoose.set('debug', true);
    await mongoose.connect( process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log("MongoDB connection error",err);
  }
};