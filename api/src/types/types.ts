import { ObjectId, Document } from "mongodb";


export enum Role {
    ADMIN = "admin",
    USER = "user"
}

export interface IUser extends Document {
    _id: ObjectId;
    username: string;
    password: string;
    role: Role;
    auctionsSelling: IAuction[];
}



export interface IAuction extends Document {
    _id: ObjectId;
    title: string;
    description: string;
    seller: IUser;
    startDate: Date;
    endDate: Date;
    startingBid: number;
    currentBid: number;
    currentBidder: IUser;
    imageUrl: string;
    category: ICategory;
    auctionFinished: boolean;
}

export interface ICategory extends Document {
    _id: ObjectId;
    name: string;
    description: string;
    auctions: IAuction[];
}


