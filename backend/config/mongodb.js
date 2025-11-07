import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on("connected", () => {
        console.log("MongoDB connection established successfully");
    })

    const mongoUri = process.env.MONGODB_URI;
    console.log("MongoDB URI:", mongoUri ? "Found" : "NOT FOUND");
    
    if (!mongoUri) {
        console.error("MONGODB_URI environment variable is not set!");
        return;
    }

    try {
        await mongoose.connect(mongoUri);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        console.log("Server will continue without database connection");
    }
}
export default connectDB;