import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left - App Name */}
          <Link to="/" className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Quick UI Studio
          </Link>

          {/* Center - Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Right - Navigation Links */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Home
            </Link>
            <Link to="/components" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Components
            </Link>
            <Link to="/customize" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
              Customize
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
