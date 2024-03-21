import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/searchBar';
import { GET_ALL_AUCTION } from '../graphql/auctionGQL';

const AuctionsPage: React.FC = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_ALL_AUCTION);
  const [searchTerm, setSearchTerm] = useState('');

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error(error);
    return <p>Error :</p>;
  }

  const filteredAuctions = data.auctions.filter((auction: any) =>
    auction.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-brown-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Auctions
        </h1>
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAuctions.map((auction: any) => (
            <div key={auction._id} className="bg-brown-100 text-brown-900 p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{auction.title}</h2>
              <p className="mb-2">{auction.description}</p>
              <img 
                src={auction.imageUrl} 
                alt={auction.title} 
                className="w-full h-48 object-cover" 
              />
              <p className="mb-2">Starting Bid: ${auction.startingBid}</p>
              <p className="mb-2">Current Bid: ${auction.currentBid}</p>
              <button 
                className="bg-brown-900 text-white font-bold py-2 px-4 rounded-lg mt-4"
                onClick={() => {
                  console.log('Bid Now button clicked');
                  navigate(`/login`, { state: { selectedAuction: auction } });
                }}
              >
                Bid Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;