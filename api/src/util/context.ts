
import jwt from "jsonwebtoken";

export interface GQLContext {
    jwt?: string,
    userId?: string,
    jwtSecret: string,
  }

interface IResolver {
    (parent: any, args: any, context: GQLContext, info: any): any;
  }
  export const authenticated = (resolver: IResolver) => {
    return (parent: any, args: any, context: GQLContext, info: any) => {
      if (!context.jwt) {
        throw new Error("Not authenticated");
      }
      try{
        const decoded = jwt.verify(context.jwt, context.jwtSecret);
      context.userId = typeof decoded === "string" ? decoded : decoded.userId;
      }catch(e){
        throw new Error("Not authenticated");
      }
      return resolver(parent, args, context, info);
    };
  }


