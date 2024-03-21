import { ApolloServer } from '@apollo/server';
import express from 'express';
import { expressMiddleware } from "@apollo/server/express4";
import http from 'http';
import mongoose from 'mongoose';
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import typeDefs from './schema';
import {queries} from './resolver/query';
import {mutations} from './resolver/mutation';
import dotenv from 'dotenv';
dotenv.config({ path: "./process.env" });

import UserModel from './model/user';
import CategoryModel from './model/category';
import AuctionModel from './model/auction';
import { userData, auctionData, categoryData } from './data/data';
import bcrypt from 'bcrypt';




const DB = process.env.DB_CONNECTION_STRING!;

mongoose
    .connect(DB)
    .then(async () => {
        console.log('Connected to MongoDB');
        await populateDB();
    })
    .catch((err: any) => console.log("Error connecting to MongoDB: ", err));  

async function populateDB() {
    try {
        const hashedUserData = await Promise.all(userData.map(async user => ({
            ...user,
            password: await hashPassword(user.password),
        })));

        await UserModel.deleteMany({}); 
        await UserModel.create(hashedUserData); 
        await CategoryModel.deleteMany({});
        await CategoryModel.create(categoryData); 
        await AuctionModel.deleteMany({});
        await AuctionModel.create(auctionData);
        console.log("Database populated successfully.");
    } catch (err) {
        console.error("Error populating database: ", err);
    }
}

async function hashPassword(plainTextPassword: string): Promise<string> {
    const saltRounds = 10;
    const hash = await bcrypt.hash(plainTextPassword, saltRounds);
    return hash;
}





async function startServer() {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer ({
        typeDefs,
        resolvers: {
            Query: queries,
            Mutation: mutations
        },
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    app.use(
        "/graphql",
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(server)
    );

    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4001 }, resolve)
    );
    console.log(`🚀 Server ready at http://localhost:4001/graphql`);
}

startServer();