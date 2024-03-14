


const typeDefs = `#graphql

type Auction {
    id: ID!
    title: String!
    description: String!
    startDate: String!
    endDate: String!
    startingBid: Float!
    currentBid: Float!
}


type Query {
    auctions: [Auction]
    auction(id: ID!): Auction
}

type Mutation {
    createAuction(title: String!, description: String!, startDate: String!, endDate: String!, startingBid: Float!): Auction
    deleteAuction(id: ID!): Auction
    updateAuction(id: ID!, title: String, description: String, startDate: String, endDate: String, startingBid: Float): Auction
}
`;

export default typeDefs;