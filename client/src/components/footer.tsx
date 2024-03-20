

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Auction House. All rights reserved.</p>
      <p>
            Follow us on: <br/>
            <a href="https://facebook.com" className="social-link"> Facebook</a><br/>
            <a href="https://twitter.com" className="social-link"> Twitter</a><br/>
            <a href="https://instagram.com" className="social-link"> Instagram</a>
       </p>
    </footer>
  );
};

export default Footer;