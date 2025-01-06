import mongoose from "mongoose";

async function connectDB() {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connecting to databse.", error);
    });

    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.error("Faild to connect database..", error);
    process.exit(1);
  }
}

export default connectDB;
