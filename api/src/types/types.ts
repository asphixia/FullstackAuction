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
    seller?: IUser;
    startDate: Date;
    endDate: Date;
    startingBid: number;
    currentBid: number;
    currentBidder?: IUser;
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

export interface IAuctionInput {
    auctionId: string;
    input: {

    title: string;
    description: string;
    seller: string;
    startDate: string;
    endDate: string;
    startingBid: number;
    currentBid: number;
    currentBidder: string;
    imageUrl: string;
    category: string;
    auctionFinished: boolean;

    } 
}

export interface ICategoryInput {
    categoryId: ObjectId;
    
    input: {
        name: string;
        description: string;
        auctions: IAuction[];
    }
}

export interface IUserInput {
    userId: ObjectId;

    input: {
        username: string;
        password: string;
        role: Role;
        auctionsSelling: IAuction[];
    }
}


