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




const DB = process.env.DB_CONNECTION_STRING!;

mongoose
    .connect(DB)
    .then(async () => {
        console.log('Connected to MongoDB');
        await populateDB();
    })
    .catch((err: any) => console.log("Error connecting to MongoDB: ", err));  


async function populateDB(){
    try{
        await UserModel.create(userData);
        await CategoryModel.create(categoryData);
        await AuctionModel.create(auctionData);
        console.log("Database populated");
    } catch (err){
        console.log("Error populating database: ", err);
    }
}

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