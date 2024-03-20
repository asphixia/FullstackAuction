import { ObjectId } from 'mongodb';
import { Role } from '../types/types';

export const userData = [
    {
        _id: new ObjectId(),
        username: "pelle",
        password: "1234",
        role: Role.USER,
        auctionsSelling: []
    },

    {
        _id: new ObjectId(),
        username: "admin",
        password: "1234",
        role: Role.ADMIN,
        auctionsSelling: []
    }, 

    {
        _id: new ObjectId(),
        username: "emil",
        password: "1234",
        role: Role.USER,
        auctionsSelling: []
    }, 

    {
        _id: new ObjectId(),
        username: "hans",
        password: "1234",
        role: Role.USER,
        auctionsSelling: []
    },

    {
        _id: new ObjectId(),
        username: "jacob",
        password: "1234",
        role: Role.USER,
        auctionsSelling: []
    }

];

export const categoryData = [
    {
        _id: new ObjectId(),
        name: "Electronics",
        description: "All kinds of electronics",
        auctions: []
    },

    {
        _id: new ObjectId(),
        name: "Jewelry",
        description: "All kinds of jewelry",
        auctions: []
    },

    {
        _id: new ObjectId(),
        name: "Furniture",
        description: "All kinds of furniture",
        auctions: []
    },

    {
        _id: new ObjectId(),
        name: "Antiques",
        description: "All kinds of antiques",
        auctions: []
    },

    {
        _id: new ObjectId(),
        name: "Books",
        description: "All kinds of books",
        auctions: []
    },


];

export const auctionData = [
    {
        _id: new ObjectId(),
        title: "Macbook Pro",
        description: "A very good laptop",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 1000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        category: categoryData[0],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Iphone 12",
        description: "A very good phone",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 800,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1607936854279-55e8a4c64888?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        category: categoryData[0],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Samsung Galaxy S21",
        description: "A very good phone",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 700,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1618478594486-c65b899c4936?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[0],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Sony WH-1000XM4",
        description: "A very good headphone",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 300,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1594075410664-00e61ae442dc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        category: categoryData[0],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Rolex Submariner",
        description: "A very good watch",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 10000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        category: categoryData[1],
        auctionFinished: false
    },

    {
        _id: new ObjectId(),
        title: "Gold necklace",
        description: "A very good necklace",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 5000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://plus.unsplash.com/premium_photo-1678730056371-eff9c5356a48?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[1],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Diamond ring",
        description: "A very good ring",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 3000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1589674668791-4889d2bba4c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[1],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Diamond earrings",
        description: "A very good earrings",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 2000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1588444650733-d0767b753fc8?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[1],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Diamond bracelet",
        description: "A very good bracelet",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 1500,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[1],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Sofa",
        description: "A very good sofa",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 1000,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[2],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Dining table",
        description: "A very good dining table",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 800,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[2],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Bed",
        description: "A very good bed",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 700,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[2],
        auctionFinished: false
    },
    {
        _id: new ObjectId(),
        title: "Bookshelf",
        description: "A very good bookshelf",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 500,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1593430980369-68efc5a5eb34?q=80&w=885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[2],
        auctionFinished: false
    },

    {
        _id: new ObjectId(),
        title: "Antique chair",
        description: "A very good antique chair",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 300,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1578653282816-a508bd2d0435?q=80&w=1006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[3],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "Antique table",
        description: "A very good antique table",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 200,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1577926103605-f426874bee28?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[3],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "Antique vase",
        description: "A very good antique vase",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 100,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1593265889290-4b41d8ad4680?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[3],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "Antique painting",
        description: "A very good antique painting",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 50,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?q=80&w=773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[3],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "Harry Potter",
        description: "A very good book",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 20,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1626618012641-bfbca5a31239?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[4],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "The Lord of the Rings",
        description: "A very good book",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 20,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1618845072579-853968656c0e?q=80&w=1083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[4],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "The Hobbit",
        description: "A very good book",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 20,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1613575363165-5a67fadc017c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[4],
        auctionFinished: false
    },
    
    {
        _id: new ObjectId(),
        title: "The Great Gatsby",
        description: "A very good book",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 20,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: categoryData[4],
        auctionFinished: false
    },

    {
        _id: new ObjectId(),
        title: "The Catcher in the Rye",
        description: "A very good book",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 20,
        currentBid: 0,
        currentBidder: null,
        imageUrl: "https://images.unsplash.com/photo-1491841651911-c44c30c34548?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
        category: categoryData[4],
        auctionFinished: false
    },
];






