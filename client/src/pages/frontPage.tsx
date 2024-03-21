import React, { useEffect, useState } from 'react';
import video from '../assets/paitings.mp4';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_AUCTION } from '../graphql/auctionGQL';

const FrontPage: React.FC = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_AUCTION);
  const [randomAuctions, setRandomAuctions] = useState<{ title: string, imageUrl: string }[]>([]);

  useEffect(() => {
    if (data) {
      const shuffledAuctions = [...data.auctions].sort(() => 0.5 - Math.random());
      setRandomAuctions(shuffledAuctions.slice(0, 4));
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-brown-900">
    <h1 className="text-4xl font-bold mb-4">Welcome to the Auction House</h1>
    <h2 className="text-2xl mb-8">"Winning bids, winning moments: Your treasures await at our auction house!"</h2>
    <video autoPlay loop muted className="video w-full h-1/3 object-cover max-h-64">
      <source src={video} type="video/mp4" />
    </video>
      <h2 className="text-2xl font-bold mt-8">Featured Auctions</h2>
      <div className="grid grid-cols-4 gap-4 mt-8 w-3/4">
        {randomAuctions.map((auction: any) => (
          <div key={auction.title} className="bg-brown-100 p-4 rounded-lg">
            {auction.title}
            <img 
                src={auction.imageUrl} 
                alt={auction.title} 
                className="w-full h-48 object-cover" 
              />
          </div>
        ))}
      </div>
      <button className="bg-brown-900 text-white font-bold py-2 px-4 rounded-lg mt-8"
        onClick={() => navigate('/auctions')}
      >
        Explore Auctions
      </button>
    </div>
  );
};

export default FrontPage;