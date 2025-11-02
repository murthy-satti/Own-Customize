import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700 mt-auto overflow-x-hidden">
      <div className="w-full px-2 sm:px-6 lg:px-8 py-3 xl:py-6 max-w-full">
        <div className="flex flex-row flex-wrap items-center justify-between gap-4">
          {/* Left - App Name */}
          <div className='flex items-center gap-2'>
            <img src="/logo.png" alt="Logo" width={30} height={30} />
            <Link to="/" className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap order-1">

              Quick UI Studio
            </Link>


          </div>


          {/* Center - Copyright */}
          <p className="text-gray-700 dark:text-gray-400 text-xs sm:text-sm text-center order-3 sm:order-2 w-full sm:w-auto">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Right - Navigation Links */}
          <div className="hidden md:flex flex-wrap items-center justify-center gap-3 sm:gap-6 order-2 sm:order-3">
            <Link to="/" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link to="/components" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
              Components
            </Link>
            <Link to="/customize" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-xs sm:text-sm transition-colors whitespace-nowrap">
              Customize
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
