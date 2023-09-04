import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    gender: {
        type : String,
        required : true
    },
    image: {
        type : String,
        // data: Buffer,
        // contentType: String,
        required : true
    }, 
    description: {
        type : String,
        required : false
    },
    city: {
        type : String,
        required : true
    },
    barrio: {
        type : String,  
        required : true
    },
    address: {
        type : String,
        required : false
    },
    contacts : [{
        contact: {
            type : String,
            required : true
        },
        phone: {
            type : Number ,
            required :true
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
