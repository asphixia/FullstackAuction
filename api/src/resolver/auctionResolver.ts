
    import AuctionModel from '../model/auction';
    import { AuthenticationError } from 'apollo-server-express';

    export const auction = async (_: any, { id }: any) => {
    return await AuctionModel.findById(id);
    };
    export const auctions = async () => {
    return await AuctionModel.find();
    };

    export const createAuction = async (_: any, { title, description, startDate, endDate, startingBid }: any, { user }: any) => {
    if (!user) {
        throw new AuthenticationError('You must be logged in to create an auction');
    }

    const auction = new AuctionModel({ title, description, startDate, endDate, startingBid, seller: user.id });
    await auction.save();

    return auction;
    };

    export const placeBid = async (_: any, { auctionId, bid }: any, { user }: any) => {
    if (!user) {
        throw new AuthenticationError('You must be logged in to place a bid');
    }

    const auction = await AuctionModel.findById(auctionId);
    if (!auction) {
        throw new Error('Auction not found');
    }

    if (auction.currentBid >= bid) {
        throw new Error('Your bid must be higher than the current bid');
    }

    auction.currentBid = bid;
    auction.highestBidder = user.id;
    await auction.save();

    return auction;
    };

