import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(">>> Conexion a DB" )
    } catch (err) {
        console.log(err)
    }
};
