import React from 'react';
import './FrontPage.css'; // Import the CSS file

const FrontPage: React.FC = () => {
  return (
    <div className="header">
      <img src="header-image.jpg" alt="Header" className="header-image" />
      <h1 className="header-text">Welcome to the Auction House</h1>
    </div>
  );
};

export default FrontPage;