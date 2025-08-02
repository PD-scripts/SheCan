import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-black border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <div className="bg-black rounded-full w-7 h-7 flex items-center justify-center">
                <span className="text-white font-bold text-xs">She</span>
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-bold">She Can Foundation</h1>
              <p className="text-gray-400 text-xs">Intern Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <Link 
              to="/dashboard" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/dashboard' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/leaderboard" 
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/leaderboard' 
                  ? 'bg-orange-500 text-white' 
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              Leaderboard
            </Link>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
            >
              Our Story
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;