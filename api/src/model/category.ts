import mongoose from "mongoose";
import { ICategory } from "../types/types";

const categorySchema = new mongoose.Schema<ICategory>(
    {
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    auctions: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Auction"
    }]
    }
);

const CategoryModel = mongoose.model<ICategory>("Category", categorySchema);

export default CategoryModel;