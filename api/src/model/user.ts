import mongoose from "mongoose";
import { IUserWithItems, Role } from "../types/types";

const userSchema = new mongoose.Schema<IUserWithItems>({
  username: {
     type: String,
     unique: true, 
     default: null 
    },
  password: {
     type: String 
    },
  role: {
     type: String, 
     enum: Object.values(Role), 
     default: Role.USER 
    },
  items: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Item" 
   }],
});

const UserModel = mongoose.model<IUserWithItems>("User", userSchema);

export default UserModel;