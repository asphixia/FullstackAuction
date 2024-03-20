import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

const Navbar: React.FC = () => {
  return (
    <nav className='bg-brown-900 p-6'>
      <ul className='flex items-center justify-start space-x-4 text-yellow-100 text-sm font-semibold'>
        <li>
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </li>
        <li>
          <Link to="/" className='hover:text-yellow-500 transition duration-200'>Home</Link>
        </li>
        <li>
          <Link to="/auctions" className='hover:text-yellow-500 transition duration-200'>Auctions</Link>
        </li>
        <li>
          <Link to="/login" className='hover:text-yellow-500 transition duration-200'>Create User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;