import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-[#000824] shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" width={40} height={40} />
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-gray-100 whitespace-nowrap">
            Quick UI Studio
          </Link>
        </div>

        {/* Right: Nav + Theme + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-4 items-center">
            {[
              { path: '/', label: 'Home' },
              { path: '/components', label: 'Components' },
              { path: '/customize', label: 'Customize' },
              { path: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden flex flex-col px-4 pb-4 space-y-2 bg-white dark:bg-[#000824] border-t border-gray-200 dark:border-slate-700">
          {[
            { path: '/', label: 'Home' },
            { path: '/components', label: 'Components' },
            { path: '/customize', label: 'Customize' },
            { path: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-slate-800'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
