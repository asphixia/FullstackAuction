import { ObjectId } from "mongodb";


export enum Role {
    ADMIN = "admin",
    USER = "user"
}

export interface IUser {
    _id: ObjectId;
    username: string;
    password: string;
    role: Role
}
export interface IUserWithItems extends IUser {
    items: IItem[];

}
export interface IAuction {
    _id: ObjectId;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    startingBid: number;
    currentBid: number;
    user: ObjectId;
    bids: ObjectId[];
    comments: ObjectId[];
    item: ObjectId;

}

export interface IItem {
    _id: ObjectId;
    name: string;
    description: string;
    price: number;
    category: ObjectId;
    user: ObjectId;
}

export interface ICategory {
    _id: ObjectId;
    name: string;
    description: string;
    items: ObjectId[];
}
export interface IBid {
    _id: ObjectId;
    amount: number;
    user: ObjectId;
    item: ObjectId;
}
export interface IComment {
    _id: ObjectId;
    content: string;
    user: ObjectId;
    item: ObjectId;
}

export interface ITransaction {
    _id: ObjectId;
    buyer: ObjectId;
    seller: ObjectId;
    item: ObjectId;
    finalPrice: number;
    transactionDate: Date;
}
