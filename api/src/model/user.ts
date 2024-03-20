import mongoose from "mongoose";
import { IUser, Role} from "../types/types";

const userSchema = new mongoose.Schema<IUser>(
    {
    username: {
        type: String, 
        required: [true, "Username is required."],
        unique: true,
        minlength: [3, "Username must be at least 3 characters long."]

    },
    password: {
        type: String, 
        required: [true, "Password is required."],
    },
    role: {
        type: String, 
        enum: [Role.ADMIN, Role.USER],
        default: Role.USER
    },
    auctionsSelling: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Auction"
    }]
    }
);

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;

