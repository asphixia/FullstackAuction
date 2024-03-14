import React from 'react';

interface Auction {
  id: number;
  title: string;
  details: string;
}

const auctions: Auction[] = [
  { id: 1, title: 'Auction 1', details: 'Details about auction 1' },
  { id: 2, title: 'Auction 2', details: 'Details about auction 2' },
  { id: 3, title: 'Auction 3', details: 'Details about auction 3' },
  // Add more auctions as needed
];

const AuctionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-light-brown dark:bg-dark-brown text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Auctions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {auctions.map((auction) => (
            <div key={auction.id} className="bg-dark-brown p-4 rounded-lg">
              <h2 className="text-2xl font-bold mb-2">{auction.title}</h2>
              <p>{auction.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionsPage;