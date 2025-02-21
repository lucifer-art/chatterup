import mongoose from "mongoose";

export const connectToDatabase = async () => {
  console.log(baseUrl);
  try {
    await mongoose.connect(`mongodb://${baseUrl}/chatApp`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected using mongoose");
  } catch (err) {
    console.log(err);
  }
};