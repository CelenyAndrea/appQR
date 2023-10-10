import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        mongoose.connect(config.DB,{ useNewUrlParser: true })
        console.log(">>> Conexion a DB" )
    } catch (err) {
        console.log(err)
    }
};
