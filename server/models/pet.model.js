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
        public_id: String,
        url : String
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
    contact1: {
        type : String,
        required : false,
        trim: true
    },
    phone1: {
        type : String,
        required : false,
        trim: true
    },
    contact2: {
        type : String,
        required : false,
        trim: true
    },
    phone2: {
        type : String,
        required : false,
        trim: true
    },
    contact3: {
        type : String,
        required : false,
        trim: true
    },
    phone3: {
        type : String,
        required : false,
        trim: true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : false
    },
},  {
    timestamps: true
});

export default mongoose.model("Pet", PetSchema);
