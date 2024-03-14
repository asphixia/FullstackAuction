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
    items: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Item"
    }]
    }
);

const CategoryModel = mongoose.model<ICategory>("Category", categorySchema);

export default CategoryModel;