
import AuctionModel from '../model/auction';
import UserModel from '../model/user';
import CategoryModel from '../model/category';
import { ObjectId } from 'mongodb';

export const queries = {

    
    auctions: async () => {

        const allAuctions = await AuctionModel.find().populate('seller').populate('category');
        return allAuctions;
    },
    
    auction: async (_: any, {id}: ObjectId) => {

        const auction = await AuctionModel.findById(id).populate('seller').populate('category');
        return auction;

    },

    auctionsByCategory: async (categoryId: string) => {

        const category = await CategoryModel.findById(categoryId);
        return category;

    },
    
    auctionsBySeller: async (sellerId: string) => {

        const seller = await AuctionModel.find({ seller: sellerId });
        return seller;
    },

    getAllUser: async () => {

        const users = await UserModel.find();
        return users;
    },

    getUserById: async (id: string) => {

        const user = await UserModel.findById(id);
        return user;

    },

    getAllCategories: async () => {

        const categories = await CategoryModel.find();
        return categories;
    },

    getCategoryById: async (id: string) => {

        const category = await CategoryModel.findById(id);
        return category;

    }, 

    getAuctionByCategory: async (id: string) => {

        const auctions = await AuctionModel.find({ category: id });
        return auctions;

    },

    
};