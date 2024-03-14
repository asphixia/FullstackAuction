import { ApolloServer } from '@apollo/server';
import express from 'express';
import { expressMiddleware } from "@apollo/server/express4";
import http from 'http';
import mongoose from 'mongoose';
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import cors from "cors";
import typeDefs from './schema';


export interface IContext {
    elements: {
        Auctions: mongoose.Model<Auction>;
    }
}

const DB = process.env.DB_CONNECTION_STRING;

mongoose
    .connect(DB)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err: any) => console.log("Error connecting to MongoDB: ", err));  

const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer ({
    typeDefs,
    resolvers: {
        Query,
        Mutation
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