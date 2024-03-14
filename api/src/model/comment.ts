
import mongoose from "mongoose";
import { IComment } from "../types/types";


const commentSchema = new mongoose.Schema<IComment>(
    {
    content: {
        type: String, 
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User"
    },
    });

const commentModel =mongoose.model<IComment>("User", commentSchema);

export default commentModel;