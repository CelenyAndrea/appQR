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
        data: Buffer,
        contentType: String,
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
        type : String,
        required : true
    }],
    phones: [{
        type : Number,
        required : true
    }],
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},  {
    timestamps: true
});

export default mongoose.model("Pet", PetSchema);
