import { IAuction, ICategory, IUser , IAuctionInput} from "../types/types";
import { ObjectId } from "mongodb";
import AuctionModel from "../model/auction";
import UserModel from "../model/user";
import CategoryModel from "../model/category";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as dotenv from "dotenv";
dotenv.config({ path: "../process.env" });


export const mutations = {

    createAuction: async (_parent: any, args: IAuction) => {
        const newAuction = new AuctionModel({
            id: new ObjectId(),
            title: args.title,
            description: args.description,
            seller: args.seller,
            startDate: args.startDate,
            endDate: args.endDate,
            startingBid: args.startingBid,
            imageUrl: args.imageUrl,
            category: args.category,
            auctionFinished: false,
        });

        const addNewAuctionToCategory = await CategoryModel.findOne({_id: args.category});
        addNewAuctionToCategory?.auctions.push(newAuction.id);
        addNewAuctionToCategory?.save();
        const result = await newAuction.save();
        
        return result;

    },
    
    deleteAuction: async (_: any, {id}: ObjectId) => {
        if (await AuctionModel.findById(id)){
            const auction = await AuctionModel.findById(id);
            await AuctionModel.findByIdAndDelete(id);

            return auction;
        }
    }, 


    updateAuction: async (_: any, { id, input }: { id: string, input: IAuctionInput['input'] }) => {
        try {

            const currentBidder = await UserModel.findById(input.currentBidder);
    if (!currentBidder) {
      throw new Error('Current bidder not found');
    }
          const update = {
            title: input.title,
            description: input.description,
            seller: input.seller,
            startDate: input.startDate,
            endDate: input.endDate,
            startingBid: input.startingBid,
            currentBid: input.currentBid,
            currentBidder: currentBidder,
            imageUrl: input.imageUrl,
            category: input.category,
            auctionFinished: input.auctionFinished,
          };
      
          await AuctionModel.updateOne({ _id: id }, update);
      
          return await AuctionModel.findById(id);
        } catch (error) {
          console.error(error);
          throw new Error('Failed to update auction');
        }
      },

    
    createCategory: async (_: any, args: ICategory) => {
        const newCategory = new CategoryModel({
            id: new ObjectId(),
            name: args.name,
            description: args.description,
            auctions: [],
        });

        const result = await newCategory.save();
        return result;
    },

    
    deleteCategory: async (_: any, {id}: ObjectId) => {
        if (await CategoryModel.findById(id)){
            const category = await CategoryModel.findById(id);
            await CategoryModel.findByIdAndDelete(id);

            return category;
        }
    },

   
    updateCategory: async (_: any, args: ICategory) => {
        const category = await CategoryModel.findById(args.id);
        if (category){
            category.name = args.name;
            category.description = args.description;
            category.save();
            return category;
        }
    },

    
    createUser: async (_: any, args: IUser) => {
        const doesUserExist = await UserModel.findOne({username: args.username});
        if (doesUserExist){
            console.log('User already exists');
            return;
        } 
        const hashedPassword = await bcrypt.hash(args.password, 10);

        const newUser = new UserModel({
            id: new ObjectId(),
            username: args.username,
            password: hashedPassword,
            role: args.role,
            auctionsSelling: [],
        });

        const token = jwt.sign({userId: newUser.id, username: newUser.username}, process.env.SECRET_KEY!, {expiresIn: '2h'});

        newUser.token = token;

        const result = await newUser.save();
        return result;

    },

    
    deleteUser: async (_: any, {id}: ObjectId) => {
        if(await UserModel.findById(id)){
            const user = await UserModel.findById(id);
            await UserModel.findByIdAndDelete(id);
            return user;
            }
     },


    updateUser: async (_: any, args: IUser) => {
        const user = await UserModel.findById(args.id);
        if (user){
            user.username = args.username;
            user.password = args.password;
            user.role = args.role;
            user.save();
            return user;
        }
    },

    login: async (_: any, args: IUser) => {
        const user = await UserModel.findOne({username: args.username});

        if (!user){
            throw new Error('User does not exist');
        }

        const isPasswordCorrect = await bcrypt.compare(args.password, user.password);

        if (!isPasswordCorrect){

            console.log('Password incorrect');
            return;
        }

        const token = jwt.sign({userId: user.id, username: user.username },  process.env.SECRET_KEY!, {expiresIn: '2h'});

        user.token = token;

        return user;

    },

}



