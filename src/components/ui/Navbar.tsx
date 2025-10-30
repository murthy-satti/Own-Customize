import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white dark:bg-slate-900 shadow-md fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex flex-wrap justify-between items-center min-h-16 py-2 gap-2">
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
              Quick UI Studio
            </span>
          </Link>

          <div className="flex flex-wrap gap-2 sm:gap-4 lg:gap-8 items-center">
            <Link
              to="/"
              className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
                isActive('/')
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>
            <Link
              to="/components"
              className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
                isActive('/components')
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800'
              }`}
            >
              Components
            </Link>
            <Link
              to="/customize"
              className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base font-semibold transition-colors whitespace-nowrap ${
                isActive('/customize')
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800'
              }`}
            >
              Customize
            </Link>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
