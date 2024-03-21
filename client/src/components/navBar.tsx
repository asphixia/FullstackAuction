import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

const Navbar: React.FC = () => {

  return (
    <nav className='bg-brown-900 p-6'>
      <ul className='flex items-center justify-between space-x-4 text-yellow-100 text-sm font-semibold'>
        <div className='flex items-center space-x-4'>
          <li>
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </li>
          <li>
            <Link to="/" className='hover:text-yellow-500 transition duration-200'>Home</Link>
          </li>
          <li>
            <Link to="/auctions" className='hover:text-yellow-500 transition duration-200'>Auctions</Link>
          </li>
        </div>
       
      </ul>
    </nav>
  );
};

export default Navbar;