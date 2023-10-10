import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(proceso.env.MONGODB_URL)
        console.log(">>> Conexion a DB" )
    } catch (err) {
        console.log(err)
    }
};
