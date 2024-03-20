import { ObjectId } from 'mongodb';
import { Role } from '../types/types';

export const userData = [
    {
        _id: new ObjectId(),
        username: "admin",
        password: "1234",
        role: Role.ADMIN,
        auctionsSelling: []
    },

    {
        _id: new ObjectId(),
        username: "william",
        password: "1234",
        role: Role.USER,
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


// i need to make data for the auctions as well the current bidder shoud be null or some sort because no one has bit yet. please make all dates to the futture so that the auctions are not finished. we are in apris 2024,  and current bid shoudl be null as well because sometime bid goes lovwe that starting bid. and can you make 50 auctions in total, 10 in each category. use europen time for the date, dont use that weird time format. are you stupid dont use that weird time.
export const auctionData = [
    {
        _id: new ObjectId(),
        title: "Macbook Pro",
        description: "A very good laptop",
        seller: userData[1],
        startDate: new Date('2024-04-01T12:00:00'),
        endDate: new Date('2024-04-30T12:00:00'),
        startingBid: 1000,
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.apple.com/v/mac/home/ab/images/familybrowser/macbookpro__fjvf3k6hwd6u_large.jpg",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.apple.com/v/iphone/home/ab/images/chapternav/iphone_12_pro_dark__fjxu5x4b5l6q_large.jpg",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.samsung.com/se/smartphones/galaxy-s21-5g/buy/hero-1-desktop.jpg",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.sony.com/electronics/headband-headphones/wh-1000xm4",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.rolex.com/watches/submariner/m126610lv-0002.html",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.tiffany.com/jewelry/necklaces-pendants/tiffany-t-wire-necklace-GRP09923/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.tiffany.com/jewelry/rings/tiffany-soleste-v-ring-GRP09923/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.tiffany.com/jewelry/earrings/tiffany-soleste-v-earrings-GRP09923/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.tiffany.com/jewelry/bracelets/tiffany-soleste-v-bracelet-GRP09923/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/klippan-2-sits-soffa-vissle-gra-30349147/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/malm-sangstomme-hog-2-lador-vit-00277671/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/billy-bokhylla-vit-00263850/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
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
        currentBid: null,
        currentBidder: null,
        imageUrl: "https://www.ikea.com/se/sv/p/ekedalen-ekedalen-bord-och-4-stolar-vitt-70404843/",
        category: categoryData[4],
        auctionFinished: false
    },

];






