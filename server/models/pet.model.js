import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim: true //quita espacios iniciales y/o finales en blanco
    },
    gender: {
        type : String,
        required : true,
        trim: true
    },
    image: {
        url : String,
        public_id: String
    }, 
    description: {
        type : String,
        required : false,
        trim: true
    },
    city: {
        type : String,
        required : true,
        trim: true
    },
    barrio: {
        type : String,  
        required : true,
        trim: true
    },
    address: {
        type : String,
        required : false,
        trim: true
    },
    contacts : [{
        contact: {
            type : String,
            required : true,
            trim: true
        },
        phone: {
            type : Number,
            required :true,
            trim: true
        }
    }],
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : false
    },
},  {
    timestamps: true
});

export default mongoose.model("Pet", PetSchema);
