import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from '../pages/frontPage';
import AuctionsPage from '../pages/auctions';
import NotFoundPage from '../pages/notFound';
import LoginPage from '../pages/login';
import CreateUserPage from '../pages/createUser';
import Navbar from '../components/navBar';
import AuctionPage from '../pages/auction';


const AppRouter: React.FC = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/auctions" element={<AuctionsPage />} />
        <Route path="/auctions/:id" element={<AuctionPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateUserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;