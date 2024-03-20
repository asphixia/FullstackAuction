// AuctionPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUCTION_BY_ID } from '../graphql/auctionGQL';

const AuctionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_AUCTION_BY_ID, {
    variables: { auctionId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :</p>;
  }

  const auction = data.auction;

  return (
    <div className="min-h-screen bg-white text-brown-900">
      <div className="container mx-auto px-4 py-8 flex">
        <img 
          src={auction.imageUrl} 
          alt={auction.title} 
          className="w-1/4 h-auto object-cover" 
        />
        <div className="ml-8">
          <h1 className="text-4xl font-bold mb-8">{auction.title}</h1>
          <p className="text-xl mb-4">{auction.description}</p>
          <div className="grid grid-cols-2 gap-4">
            <p>Starting Bid: <span className="font-bold">${auction.startingBid}</span></p>
            <p>Current Bid: <span className="font-bold">${auction.currentBid}</span></p>
            <p>Seller: <span className="font-bold">{auction.seller.username}</span></p>
            <p>Category: <span className="font-bold">{auction.category.name}</span></p>
            <p>End Date: <span className="font-bold">{new Date(auction.endDate).toLocaleString()}</span></p>
            <p>Current Bidder: <span className="font-bold">{auction.currentBidder ? auction.currentBidder.username : 'None'}</span></p>
          </div>
          <button className="bg-brown-900 text-white font-bold py-2 px-4 rounded-lg mt-4">
            Bid Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuctionPage;