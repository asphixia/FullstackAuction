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
];

const MyAuctionsPage: React.FC = () => {
  return (
    <div>
      <h1>My Auctions</h1>
      {auctions.map((auction) => (
        <div key={auction.id}>
          <h2>{auction.title}</h2>
          <p>{auction.details}</p>
        </div>
      ))}
    </div>
  );
};

export default MyAuctionsPage;