import mongoose, { Schema } from "mongoose"

const productSchema =new Schema({
    name: {
        type: String,
        required: true,
        maxlenght:100,
    },
    price : {
        type:Number,
        require: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    discription: {
        type : String,
        require:true
    }
    

},{ timestamps : true });


export const Product = mongoose.model("Product", productSchema)