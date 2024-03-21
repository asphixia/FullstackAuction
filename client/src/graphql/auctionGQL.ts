import { gql } from "@apollo/client";



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
    }
    currentBidder {
      _id
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
    }
    seller {
      _id
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

export const UPDATE_AUCTION_CURRENT_BID_AND_CURRENT_BIDDER = gql`
    mutation UpdateAuction($id: ID!, $input: UpdatedAuction) {
  updateAuction(id: $id, input: $input) {
    currentBid
    currentBidder {
      _id
    }
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