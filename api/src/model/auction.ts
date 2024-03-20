import mongoose from 'mongoose';
import { IAuction } from '../types/types';

const auctionSchema = new mongoose.Schema<IAuction>({
    title: {
        type: String,
        required: [true, "Title is required."],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    startDate: {
        type: Date,
        required: [true, "Start date is required."]
    },
    endDate: {
        type: Date,
        required: [true, "End date is required."]
    },
    startingBid: {
        type: Number,
        required: [true, "Starting bid is required."]
    },
    currentBid: {
        type: Number,
        default: 0
    },
    currentBidder: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    imageUrl: {
        type: String,
        required: [true, "Image URL is required."]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    auctionFinished: {
        type: Boolean,
        default: false
    }
});

const AuctionModel = mongoose.model<IAuction>("Auction", auctionSchema);

export default AuctionModel;