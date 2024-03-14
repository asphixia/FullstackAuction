
import mongoose from "mongoose";
import {IAuction} from "../types/types"


const auctionSchema = new mongoose.Schema<IAuction>(
    {
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    startDate: {
        type: String, 
        required: true
    },
    endDate: {
        type: String, 
        required: true
    },
    startingBid: {
        type: Number, 
        required: true
    },
    currentBid: {
        type: Number, 
        required: true
    }

    });

const AuctionModel = mongoose.model<IAuction>("Auction", auctionSchema);

export default AuctionModel;
