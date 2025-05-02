import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log("Database Connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/task`);
    } catch (error) {
        console.log("Error connecting to MongoDb");
        process.exit(1);
    }
    
};

export default connectDB;