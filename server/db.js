import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://celenyandrea:AppQR5@pets.lkadwvx.mongodb.net/appQR?retryWrites=true&w=majority")
        console.log(">>> Conexion a DB" )
    } catch (err) {
        console.log(err)
    }
};