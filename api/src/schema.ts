
const typeDefs = `#graphql
    type Auction {
        _id: ID!
        title: String!
        description: String!
        seller: User!
        startDate: String!
        endDate: String!
        startingBid: Float!
        currentBid: Float!
        currentBidder: User
        imageUrl: String!
        category: Category!
        auctionFinished: Boolean!
    }

    type Category {
        _id: ID!
        name: String!
        description: String!
        auctions: [Auction]
    }

    type User {
        _id: ID!
        username: String!
        password: String!
        role: Role!
        auctionsSelling: [Auction]
    }
    input UpdatedAuction {
    title: String
    description: String
    seller: ID
    startDate: String
    endDate: String
    startingBid: Float
    currentBid: Float
    currentBidder: ID
    imageUrl: String
    category: ID
    auctionFinished: Boolean
}

input UpdatedCategory {
    name: String
    description: String
    auctions: [ID]
}

input UpdatedUser {
    username: String
    password: String
    role: Role
    auctionsSelling: [ID]
}




    enum Role {
        ADMIN
        USER
    }

    type Query {
    auctions: [Auction]
    auction(id: ID!): Auction
    auctionsByCategory(categoryId: ID!): [Auction]
    auctionsBySeller(sellerId: ID!): [Auction]
    getAllUser: [User]
    getUserById(id: ID!): User
    getAllCategories: [Category]
    getCategoryById(id: ID!): Category
    getAuctionByCategory(id: ID!): [Auction]
}


    type Mutation {
        createAuction(title: String!, description: String!, startDate: String!, endDate: String!, startingBid: Float!, imageUrl: String!, category: ID!): Auction,
        deleteAuction(id: ID!): Auction,
        updateAuction(id: ID!, input: UpdatedAuction): Auction,
        createCategory(name: String!, description: String!): Category,
        deleteCategory(id: ID!): Category,
        updateCategory(id: ID!, name: String, description: String): Category,
        createUser(username: String!, password: String!, role: Role!): User,
        deleteUser(id: ID!): User,
        updateUser(id: ID!, username: String, password: String, role: Role): User,
        login(username: String!, password: String!): User, 
    }


`;  

export default typeDefs;





