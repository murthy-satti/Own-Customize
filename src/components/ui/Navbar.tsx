import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex flex-wrap justify-between items-center min-h-16 py-2 gap-2">
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
              Quick UI Studio
            </span>
          </Link>

          <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8">
            <Link
              to="/"
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive('/')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/components"
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive('/components')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Components
            </Link>
            <Link
              to="/customize"
              className={`px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive('/customize')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Customize
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
