import React from 'react';
import video from '../assets/paitings.mp4';
import { useNavigate } from 'react-router-dom';


const FrontPage: React.FC = () => {


    const navigate = useNavigate();


    return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-brown-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Auction House</h1>
      <h2 className="text-2xl mb-8">"Winning bids, winning moments: Your treasures await at our auction house!"</h2>
      <video autoPlay loop muted className="video w-full h-1/2 object-cover">
        <source src={video} type="video/mp4" />
      </video>
        <h2 className="text-2xl font-bold mt-8">Featured Auctions</h2>
      <div className="grid grid-cols-4 gap-4 mt-8 w-3/4">
        <div className="bg-brown-100 p-4 rounded-lg">Auction 1</div>
        <div className="bg-brown-100 p-4 rounded-lg">Auction 2</div>
        <div className="bg-brown-100 p-4 rounded-lg">Auction 3</div>
        <div className="bg-brown-100 p-4 rounded-lg">Auction 4</div>
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