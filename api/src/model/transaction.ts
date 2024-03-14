import mongoose from "mongoose";
import { ITransaction } from "../types/types";

const transactionSchema = new mongoose.Schema<ITransaction> (
    {
        buyer: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            required: true 
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User", 
            required: true 
        },
        item: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Item", 
            required: true 
        },
        finalPrice: {
            type: Number, 
            required: true 
        },
        transactionDate: {
            type: Date, 
            default: Date.now 
        },
    }
);

const TransactionModel = mongoose.model<ITransaction>("Transaction", transactionSchema);

export default TransactionModel;

