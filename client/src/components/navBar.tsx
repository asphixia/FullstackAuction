import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auctions">Auctions</Link>
        </li>
        <li>
          <Link to="/create-user">Create User</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;