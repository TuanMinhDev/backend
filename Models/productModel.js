import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['shirt', 'pants', 'accessory', 'shoes'],
    },
    imageLink: { 
        type: String,
        required: true,
    }
}, {timestamps: true});

export default mongoose.model("Product", productSchema);
