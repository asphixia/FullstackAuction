import { gql } from "@apollo/client";

/*
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

*/

 const GET_ALL_AUCTION = gql`
    query Auctions {
  auctions {
    _id
    auctionFinished
    currentBid
    description
    endDate
    imageUrl
    startDate
    startingBid
    title
    category {
      _id
      name
    }
    seller {
      _id
      username
    }
    currentBidder {
      _id
      username
    }
  }
}
`;

export const GET_AUCTION_BY_ID = gql`
    query Auction($auctionId: ID!) {
  auction(id: $auctionId) {
    _id
    auctionFinished
    
    currentBid
    description
    endDate
    imageUrl
    startDate
    startingBid
    title
    category {
      _id
      name
    }
    currentBidder {
      _id
      username
    }
    seller {
      _id
      username
    }
  }
}

`;

export const CREATE_AUCTION = gql`
    mutation createAuction($title: String!, $description: String!, $seller: ID!, $startDate: String!, $endDate: String!, $startingBid: Float!, $imageUrl: String!, $category: ID!) {
        createAuction(title: $title, description: $description, seller: $seller, startDate: $startDate, endDate: $endDate, startingBid: $startingBid, imageUrl: $imageUrl, category: $category) {
        id
        title
        description
        seller
        startDate
        endDate
        startingBid
        imageUrl
        category
        auctionFinished
        }
    }
`;

export const DELETE_AUCTION = gql`
    mutation deleteAuction($id: ID!) {
        deleteAuction(id: $id) {
        id
        title
        description
        seller
        startDate
        endDate
        startingBid
        imageUrl
        category
        auctionFinished
        }
    }
`;

export const UPDATE_AUCTION = gql`
    mutation updateAuction($id: ID!, $title: String, $description: String, $startDate: String, $endDate: String, $startingBid: Float, $imageUrl: String, $category: ID) {
        updateAuction(id: $id, title: $title, description: $description, startDate: $startDate, endDate: $endDate, startingBid: $startingBid, imageUrl: $imageUrl, category: $category) {
        id
        title
        description
        seller
        startDate
        endDate
        startingBid
        imageUrl
        category
        auctionFinished
        }
    }
`;

export const GET_AUCTION_BY_CATEGORY = gql`
    query getAuctionByCategory($id: ID!) {
        getAuctionByCategory(id: $id) {
        id
        title
        description
        seller
        startDate
        endDate
        startingBid
        imageUrl
        category
        auctionFinished
        }
    }
`;

export const GET_AUCTION_BY_SELLER = gql`
    query getAuctionBySeller($id: ID!) {
        getAuctionBySeller(id: $id) {
        id
        title
        description
        seller
        startDate
        endDate
        startingBid
        imageUrl
        category
        auctionFinished
        }
    }
`;


export {
    GET_ALL_AUCTION
}