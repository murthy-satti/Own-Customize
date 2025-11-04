import React from 'react';

// Simple Header
export const SimpleHeader: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Logo</div>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Header with CTA
export const HeaderWithCTA: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900">Brand</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
        </nav>
      </div>
    </header>
  );
};

// Dark Header
export const DarkHeader: React.FC = () => {
  return (
    <header className="w-full bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Logo</div>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white">Products</a>
          <a href="#" className="text-gray-300 hover:text-white">Solutions</a>
          <a href="#" className="text-gray-300 hover:text-white">Docs</a>
        </nav>
      </div>
    </header>
  );
};

// Header with Search
export const HeaderWithSearch: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
        <div className="text-2xl font-bold text-blue-600">Site</div>
        <div className="flex-1 max-w-md">
          <input
            type="search"
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

// Transparent Header
export const TransparentHeader: React.FC = () => {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Brand</div>
        <nav className="flex gap-6">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">Services</a>
          <a href="#" className="text-white hover:text-gray-200">Portfolio</a>
        </nav>
      </div>
    </header>
  );
};

// Gradient Header
export const GradientHeader: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-800 dark:via-pink-800 dark:to-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-white">Brand</div>
        <nav className="flex gap-4 sm:gap-6 items-center">
          <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">Services</a>
          <button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold transition-colors">Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

// Centered Logo Header
export const CenteredLogoHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">LOGO</h1>
        </div>
        <nav className="flex justify-center gap-6 sm:gap-8">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Collections</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// E-commerce Header
export const EcommerceHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Shop</div>
          <div className="flex-1 max-w-xl hidden md:block">
            <input type="search" placeholder="Search products..." className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:text-white" />
          </div>
          <nav className="flex gap-4 items-center">
            <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
            </button>
            <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Sticky Header with Shadow
export const StickyHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md transition-shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand</div>
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
        </nav>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

// Glass Morphism Header
export const GlassHeader: React.FC = () => {
  return (
    <header className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Glass</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Bordered Header
export const BorderedHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b-4 border-blue-600 dark:border-blue-500">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Services</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Blog</a>
          <button className="px-5 py-2 border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors font-semibold">Contact</button>
        </nav>
      </div>
    </header>
  );
};

// Split Header
export const SplitHeader: React.FC = () => {
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a>
              <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a>
            </nav>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</a>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Mega Menu Header
export const MegaMenuHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Mega</div>
          <nav className="hidden lg:flex gap-8 items-center">
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">Get Started</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Minimal Header
export const MinimalHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-light text-gray-900 dark:text-white tracking-wider">MINIMAL</div>
          <nav className="flex gap-8">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Work</a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Colored Background Header
export const ColoredBgHeader: React.FC = () => {
  return (
    <header className="w-full bg-blue-700 dark:bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Brand</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a>
          <a href="#" className="text-blue-100 hover:text-white transition-colors">About</a>
          <button className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold">Sign Up</button>
        </nav>
      </div>
    </header>
  );
};

// Two Row Header
export const TwoRowHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
          <div className="text-sm text-gray-600 dark:text-gray-400">Free shipping on orders over $50</div>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Help</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Account</a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Store</div>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">New</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Men</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Women</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sale</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Header with Icons
export const HeaderWithIcons: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
        </nav>
        <div className="flex gap-3 items-center">
          <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// Neon Header
export const NeonHeader: React.FC = () => {
  return (
    <header className="w-full bg-gray-950 dark:bg-black border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">NEON</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Home</a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Features</a>
          <button className="px-4 py-2 bg-cyan-500 text-gray-950 rounded-lg hover:bg-cyan-400 font-semibold shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all">Enter</button>
        </nav>
      </div>
    </header>
  );
};

// Rounded Header
export const RoundedHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3">
          <div className="text-xl font-bold text-gray-900 dark:text-white">Brand</div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </nav>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold">Start</button>
        </div>
      </div>
    </header>
  );
};

// App-Style Header
export const AppStyleHeader: React.FC = () => {
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
            <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">A</div>
        </div>
      </div>
    </header>
  );
};

// Retro Header
export const RetroHeader: React.FC = () => {
  return (
    <header className="w-full bg-yellow-400 dark:bg-yellow-600 border-b-4 border-black dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-black" style={{fontFamily: 'monospace'}}>RETRO</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>HOME</a>
          <a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>GAMES</a>
          <a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>SHOP</a>
          <button className="px-4 py-2 bg-black text-yellow-400 border-2 border-black hover:bg-gray-900 font-black transition-colors" style={{fontFamily: 'monospace'}}>PLAY</button>
        </nav>
      </div>
    </header>
  );
};

// Pill Navigation Header
export const PillNavHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
        <nav className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
          <a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Home</a>
          <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">About</a>
          <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">Services</a>
          <a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Modern Minimal Header
export const ModernMinimalHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extralight text-gray-900 dark:text-white">brand</div>
          <nav className="flex gap-12">
            <a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Portfolio</a>
            <a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Studio</a>
            <a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Vertical Split Header
export const VerticalSplitHeader: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-600 to-blue-600 via-white dark:from-blue-900 dark:to-blue-900 dark:via-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Left</div>
        <div className="h-8 w-px bg-white/30"></div>
        <nav className="flex gap-6">
          <a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
          <a href="#" className="text-white/90 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Badge Header
export const BadgeHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Store</div>
          <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">SALE</span>
        </div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
            New
            <span className="absolute -top-1 -right-3 w-2 h-2 bg-green-500 rounded-full"></span>
          </a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Collections</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sale</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Shop Now</button>
        </nav>
      </div>
    </header>
  );
};

// Boxed Header
export const BoxedHeader: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-950 py-4">
      <header className="max-w-7xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Boxed</div>
          <nav className="flex gap-6 items-center">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">Start Free</button>
          </nav>
        </div>
      </header>
    </div>
  );
};

// Underline Navigation Header
export const UnderlineNavHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign In</button>
        </div>
        <nav className="flex gap-8 border-b border-gray-200 dark:border-gray-700">
          <a href="#" className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">Home</a>
          <a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Products</a>
          <a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">About</a>
          <a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Material Design Header
export const MaterialHeader: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 dark:bg-blue-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-medium text-white">Material App</h1>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

// 3D Shadow Header
export const ThreeDHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900" style={{boxShadow: '0 4px 0 0 rgb(59 130 246), 0 8px 15px -3px rgba(0, 0, 0, 0.1)'}}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">3D Brand</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:translate-y-[2px]" style={{boxShadow: '0 4px 0 0 rgb(37 99 235)'}}>Click Me</button>
        </nav>
      </div>
    </header>
  );
};

// Neumorphic Header
export const NeumorphicHeader: React.FC = () => {
  return (
    <header className="w-full bg-gray-100 dark:bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 rounded-2xl px-6 py-4" style={{boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'}}>
          <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Neuro</div>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Language Selector Header
export const LanguageSelectorHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Global</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          <select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
            <option>🇺🇸 EN</option>
            <option>🇪🇸 ES</option>
            <option>🇫🇷 FR</option>
            <option>🇩🇪 DE</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

// Notification Bar Header
export const NotificationBarHeader: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-blue-600 dark:bg-blue-800 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2 text-sm text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>🎉 New features available! Check them out →</span>
        </div>
      </div>
      <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
          <nav className="flex gap-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

// Compact Header
export const CompactHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="font-bold text-gray-900 dark:text-white">Brand</div>
        <nav className="flex gap-4 items-center">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
          <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors">Sign In</button>
        </nav>
      </div>
    </header>
  );
};

// Overlapping Logo Header
export const OverlappingLogoHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-1"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
          L
        </div>
        <nav className="flex gap-6">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Gallery</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

// Floating Header
export const FloatingHeader: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 pt-6 pb-2">
      <header className="max-w-6xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Float</div>
          <nav className="flex gap-6 items-center">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow font-semibold">Contact</button>
          </nav>
        </div>
      </header>
    </div>
  );
};

// Social Media Header
export const SocialMediaHeader: React.FC = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
        <nav className="flex gap-6 items-center">
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
          <div className="flex gap-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Mega CTA Header
export const MegaCTAHeader: React.FC = () => {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Start Your Free Trial</h2>
            <p className="text-sm text-white/80">No credit card required • 14 days free</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold transition-colors shadow-lg">Get Started</button>
            <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-colors">Learn More</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export const headerComponents = [
  {
    name: 'SimpleHeader',
    component: SimpleHeader,
    code: `<header className="w-full bg-white shadow-md">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-blue-600">Logo</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
<a href="#" className="text-gray-700 hover:text-blue-600">About</a>
<a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
</nav>
</div>
</header>`,
    preview: <SimpleHeader />,
  },
  {
    name: 'HeaderWithCTA',
    component: HeaderWithCTA,
    code: `<header className="w-full bg-white shadow-md">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900">Brand</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 hover:text-blue-600">Features</a>
<a href="#" className="text-gray-700 hover:text-blue-600">Pricing</a>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>
</nav>
</div>
</header>`,
    preview: <HeaderWithCTA />,
  },
  {
    name: 'DarkHeader',
    component: DarkHeader,
    code: `<header className="w-full bg-gray-900">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-white">Logo</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-300 hover:text-white">Products</a>
<a href="#" className="text-gray-300 hover:text-white">Solutions</a>
<a href="#" className="text-gray-300 hover:text-white">Docs</a>
</nav>
</div>
</header>`,
    preview: <DarkHeader />,
  },
  {
    name: 'HeaderWithSearch',
    component: HeaderWithSearch,
    code: `<header className="w-full bg-white shadow-md">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4">
<div className="text-2xl font-bold text-blue-600">Site</div>
<div className="flex-1 max-w-md">
<input
type="search"
placeholder="Search..."
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
/>
</div>
<nav className="flex gap-4 items-center">
<a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
</nav>
</div>
</header>`,
    preview: <HeaderWithSearch />,
  },
  {
    name: 'TransparentHeader',
    component: TransparentHeader,
    code: `<header className="w-full bg-transparent absolute top-0 left-0 z-10">
<div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
<div className="text-2xl font-bold text-white">Brand</div>
<nav className="flex gap-6">
<a href="#" className="text-white hover:text-gray-200">Home</a>
<a href="#" className="text-white hover:text-gray-200">Services</a>
<a href="#" className="text-white hover:text-gray-200">Portfolio</a>
</nav>
</div>
</header>`,
    preview: <TransparentHeader />,
  },
  {
    name: 'GradientHeader',
    component: GradientHeader,
    code: `<header className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-800 dark:via-pink-800 dark:to-red-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-2xl font-bold text-white">Brand</div>
<nav className="flex gap-4 sm:gap-6 items-center">
<a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
<a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
<a href="#" className="text-white/90 hover:text-white transition-colors">Services</a>
<button className="px-4 py-2 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold transition-colors">Sign Up</button>
</nav>
</div>
</header>`,
    preview: <GradientHeader />,
  },
  {
    name: 'CenteredLogoHeader',
    component: CenteredLogoHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 py-6">
<div className="text-center mb-4">
<h1 className="text-3xl font-bold text-gray-900 dark:text-white">LOGO</h1>
</div>
<nav className="flex justify-center gap-6 sm:gap-8">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Shop</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Collections</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <CenteredLogoHeader />,
  },
  {
    name: 'EcommerceHeader',
    component: EcommerceHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex justify-between items-center gap-4">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Shop</div>
<div className="flex-1 max-w-xl hidden md:block">
<input type="search" placeholder="Search products..." className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:text-white" />
</div>
<nav className="flex gap-4 items-center">
<button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
<span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
</button>
<button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
</button>
</nav>
</div>
</div>
</header>`,
    preview: <EcommerceHeader />,
  },
  {
    name: 'StickyHeader',
    component: StickyHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-md transition-shadow">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Brand</div>
<nav className="hidden md:flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Get Started</button>
</nav>
<button className="md:hidden p-2">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
</div>
</header>`,
    preview: <StickyHeader />,
  },
  {
    name: 'GlassHeader',
    component: GlassHeader,
    code: `<header className="w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg border-b border-white/20 dark:border-gray-700/20">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Glass</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <GlassHeader />,
  },
  {
    name: 'BorderedHeader',
    component: BorderedHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 border-b-4 border-blue-600 dark:border-blue-500">
<div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Services</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">Blog</a>
<button className="px-5 py-2 border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors font-semibold">Contact</button>
</nav>
</div>
</header>`,
    preview: <BorderedHeader />,
  },
  {
    name: 'SplitHeader',
    component: SplitHeader,
    code: `<header className="w-full bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-8">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="hidden md:flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Solutions</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a>
</nav>
</div>
<div className="flex gap-3 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Login</a>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
</div>
</div>
</div>
</header>`,
    preview: <SplitHeader />,
  },
  {
    name: 'MegaMenuHeader',
    component: MegaMenuHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Mega</div>
<nav className="hidden lg:flex gap-8 items-center">
<div className="relative group">
<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
Products
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
</svg>
</button>
</div>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Resources</a>
<button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">Get Started</button>
</nav>
</div>
</div>
</header>`,
    preview: <MegaMenuHeader />,
  },
  {
    name: 'MinimalHeader',
    component: MinimalHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 py-6">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center">
<div className="text-xl font-light text-gray-900 dark:text-white tracking-wider">MINIMAL</div>
<nav className="flex gap-8">
<a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Work</a>
<a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
<a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
</nav>
</div>
</div>
</header>`,
    preview: <MinimalHeader />,
  },
  {
    name: 'ColoredBgHeader',
    component: ColoredBgHeader,
    code: `<header className="w-full bg-blue-700 dark:bg-blue-900">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-white">Brand</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-blue-100 hover:text-white transition-colors">Home</a>
<a href="#" className="text-blue-100 hover:text-white transition-colors">Features</a>
<a href="#" className="text-blue-100 hover:text-white transition-colors">About</a>
<button className="px-4 py-2 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors font-semibold">Sign Up</button>
</nav>
</div>
</header>`,
    preview: <ColoredBgHeader />,
  },
  {
    name: 'TwoRowHeader',
    component: TwoRowHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-800">
<div className="text-sm text-gray-600 dark:text-gray-400">Free shipping on orders over $50</div>
<div className="flex gap-4 text-sm">
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Help</a>
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">Account</a>
</div>
</div>
<div className="flex justify-between items-center py-4">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Store</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">New</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Men</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Women</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sale</a>
</nav>
</div>
</div>
</header>`,
    preview: <TwoRowHeader />,
  },
  {
    name: 'HeaderWithIcons',
    component: HeaderWithIcons,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="hidden md:flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
</nav>
<div className="flex gap-3 items-center">
<button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</button>
<button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>
</button>
<button className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</button>
</div>
</div>
</header>`,
    preview: <HeaderWithIcons />,
  },
  {
    name: 'NeonHeader',
    component: NeonHeader,
    code: `<header className="w-full bg-gray-950 dark:bg-black border-b border-cyan-500/30">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]">NEON</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Home</a>
<a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all">Features</a>
<button className="px-4 py-2 bg-cyan-500 text-gray-950 rounded-lg hover:bg-cyan-400 font-semibold shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all">Enter</button>
</nav>
</div>
</header>`,
    preview: <NeonHeader />,
  },
  {
    name: 'RoundedHeader',
    component: RoundedHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 py-3">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 rounded-full px-6 py-3">
<div className="text-xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="hidden md:flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
<button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-sm font-semibold">Start</button>
</div>
</div>
</header>`,
    preview: <RoundedHeader />,
  },
  {
    name: 'AppStyleHeader',
    component: AppStyleHeader,
    code: `<header className="w-full bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
<svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
<h1 className="text-lg font-semibold text-gray-900 dark:text-white">Dashboard</h1>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
<svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">A</div>
</div>
</div>
</header>`,
    preview: <AppStyleHeader />,
  },
  {
    name: 'RetroHeader',
    component: RetroHeader,
    code: `<header className="w-full bg-yellow-400 dark:bg-yellow-600 border-b-4 border-black dark:border-gray-900">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-black text-black" style={{fontFamily: 'monospace'}}>RETRO</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>HOME</a>
<a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>GAMES</a>
<a href="#" className="text-black hover:underline font-bold" style={{fontFamily: 'monospace'}}>SHOP</a>
<button className="px-4 py-2 bg-black text-yellow-400 border-2 border-black hover:bg-gray-900 font-black transition-colors" style={{fontFamily: 'monospace'}}>PLAY</button>
</nav>
</div>
</header>`,
    preview: <RetroHeader />,
  },
  {
    name: 'PillNavHeader',
    component: PillNavHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
<a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">Home</a>
<a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">About</a>
<a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">Services</a>
<a href="#" className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full text-sm font-medium transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <PillNavHeader />,
  },
  {
    name: 'ModernMinimalHeader',
    component: ModernMinimalHeader,
    code: `<header className="w-full bg-white dark:bg-black py-8">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center">
<div className="text-3xl font-extralight text-gray-900 dark:text-white">brand</div>
<nav className="flex gap-12">
<a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Portfolio</a>
<a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Studio</a>
<a href="#" className="text-sm tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors uppercase">Contact</a>
</nav>
</div>
</div>
</header>`,
    preview: <ModernMinimalHeader />,
  },
  {
    name: 'VerticalSplitHeader',
    component: VerticalSplitHeader,
    code: `<header className="w-full bg-gradient-to-r from-blue-600 to-blue-600 via-white dark:from-blue-900 dark:to-blue-900 dark:via-gray-900">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-white">Left</div>
<div className="h-8 w-px bg-white/30"></div>
<nav className="flex gap-6">
<a href="#" className="text-white/90 hover:text-white transition-colors">Home</a>
<a href="#" className="text-white/90 hover:text-white transition-colors">About</a>
<a href="#" className="text-white/90 hover:text-white transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <VerticalSplitHeader />,
  },
  {
    name: 'BadgeHeader',
    component: BadgeHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Store</div>
<span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded-full">SALE</span>
</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative">
New
<span className="absolute -top-1 -right-3 w-2 h-2 bg-green-500 rounded-full"></span>
</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Collections</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Sale</a>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Shop Now</button>
</nav>
</div>
</header>`,
    preview: <BadgeHeader />,
  },
  {
    name: 'BoxedHeader',
    component: BoxedHeader,
    code: `<div className="w-full bg-gray-100 dark:bg-gray-950 py-4">
<header className="max-w-7xl mx-auto px-4">
<div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg px-6 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Boxed</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Features</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Pricing</a>
<button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">Start Free</button>
</nav>
</div>
</header>
</div>`,
    preview: <BoxedHeader />,
  },
  {
    name: 'UnderlineNavHeader',
    component: UnderlineNavHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900">
<div className="max-w-7xl mx-auto px-4 py-4">
<div className="flex justify-between items-center mb-4">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign In</button>
</div>
<nav className="flex gap-8 border-b border-gray-200 dark:border-gray-700">
<a href="#" className="pb-3 border-b-2 border-blue-600 text-blue-600 font-medium">Home</a>
<a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Products</a>
<a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">About</a>
<a href="#" className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <UnderlineNavHeader />,
  },
  {
    name: 'MaterialHeader',
    component: MaterialHeader,
    code: `<header className="w-full bg-blue-600 dark:bg-blue-800 shadow-md">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="flex items-center gap-4">
<button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>
</button>
<h1 className="text-xl font-medium text-white">Material App</h1>
</div>
<div className="flex gap-2">
<button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
</button>
<button className="p-2 text-white hover:bg-blue-700 dark:hover:bg-blue-900 rounded transition-colors">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
</svg>
</button>
</div>
</div>
</header>`,
    preview: <MaterialHeader />,
  },
  {
    name: 'ThreeDHeader',
    component: ThreeDHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900" style={{boxShadow: '0 4px 0 0 rgb(59 130 246), 0 8px 15px -3px rgba(0, 0, 0, 0.1)'}}>
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">3D Brand</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">Services</a>
<button className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold transition-all hover:translate-y-[2px]" style={{boxShadow: '0 4px 0 0 rgb(37 99 235)'}}>Click Me</button>
</nav>
</div>
</header>`,
    preview: <ThreeDHeader />,
  },
  {
    name: 'NeumorphicHeader',
    component: NeumorphicHeader,
    code: `<header className="w-full bg-gray-100 dark:bg-gray-900 py-4">
<div className="max-w-7xl mx-auto px-4">
<div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 rounded-2xl px-6 py-4" style={{boxShadow: '8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff'}}>
<div className="text-2xl font-bold text-gray-800 dark:text-gray-200">Neuro</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
</div>
</div>
</header>`,
    preview: <NeumorphicHeader />,
  },
  {
    name: 'LanguageSelectorHeader',
    component: LanguageSelectorHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Global</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
<select className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm">
<option>🇺🇸 EN</option>
<option>🇪🇸 ES</option>
<option>🇫🇷 FR</option>
<option>🇩🇪 DE</option>
</select>
</nav>
</div>
</header>`,
    preview: <LanguageSelectorHeader />,
  },
  {
    name: 'NotificationBarHeader',
    component: NotificationBarHeader,
    code: `<div className="w-full">
<div className="w-full bg-blue-600 dark:bg-blue-800 py-2">
<div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2 text-sm text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span>🎉 New features available! Check them out →</span>
</div>
</div>
<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
</div>
</header>
</div>`,
    preview: <NotificationBarHeader />,
  },
  {
    name: 'CompactHeader',
    component: CompactHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
<div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
<div className="font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="flex gap-4 items-center">
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Home</a>
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</a>
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
<button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-semibold hover:bg-blue-700 transition-colors">Sign In</button>
</nav>
</div>
</header>`,
    preview: <CompactHeader />,
  },
  {
    name: 'OverlappingLogoHeader',
    component: OverlappingLogoHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-md relative">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="flex-1"></div>
<div className="absolute left-1/2 -translate-x-1/2 -top-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
L
</div>
<nav className="flex gap-6">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Gallery</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
</nav>
</div>
</header>`,
    preview: <OverlappingLogoHeader />,
  },
  {
    name: 'FloatingHeader',
    component: FloatingHeader,
    code: `<div className="w-full bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 pt-6 pb-2">
<header className="max-w-6xl mx-auto px-4">
<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl px-6 py-4 flex justify-between items-center">
<div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Float</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</a>
<button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-shadow font-semibold">Contact</button>
</nav>
</div>
</header>
</div>`,
    preview: <FloatingHeader />,
  },
  {
    name: 'SocialMediaHeader',
    component: SocialMediaHeader,
    code: `<header className="w-full bg-white dark:bg-gray-900 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="text-2xl font-bold text-gray-900 dark:text-white">Brand</div>
<nav className="flex gap-6 items-center">
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</a>
<a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
<div className="flex gap-3 ml-4 pl-4 border-l border-gray-300 dark:border-gray-600">
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
</a>
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
</a>
<a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
</a>
</div>
</nav>
</div>
</header>`,
    preview: <SocialMediaHeader />,
  },
  {
    name: 'MegaCTAHeader',
    component: MegaCTAHeader,
    code: `<header className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
<div className="max-w-7xl mx-auto px-4 py-6 text-center">
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="text-white">
<h2 className="text-2xl font-bold mb-1">Start Your Free Trial</h2>
<p className="text-sm text-white/80">No credit card required • 14 days free</p>
</div>
<div className="flex gap-3">
<button className="px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 font-semibold transition-colors shadow-lg">Get Started</button>
<button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold transition-colors">Learn More</button>
</div>
</div>
</div>
</header>`,
    preview: <MegaCTAHeader />,
  },
];
