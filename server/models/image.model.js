import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim: true //quita espacios iniciales y/o finales en blanco
    },
    image: {
        public_id: String,
        url : String
    }, 
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : false
    },
},  {
    timestamps: true
});

export default mongoose.model("Image", ImageSchema);