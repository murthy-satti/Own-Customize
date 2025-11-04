import React from 'react';

// Pagination Component
export const Pagination: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Previous
      </button>
      <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
        Next
      </button>
    </div>
  );
};

// Breadcrumbs Component
export const Breadcrumbs: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <a href="#" className="text-blue-600 hover:underline">Home</a>
      <span className="text-gray-400">/</span>
      <a href="#" className="text-blue-600 hover:underline">Products</a>
      <span className="text-gray-400">/</span>
      <span className="text-gray-700 font-medium">Details</span>
    </nav>
  );
};

// Tabs Component
export const Tabs: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Tab 1
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
          Tab 2
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">
          Tab 3
        </button>
      </div>
      <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
        <p className="text-gray-700">Tab 1 content goes here</p>
      </div>
    </div>
  );
};

// Stepper Component
export const Stepper: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-md">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
          1
        </div>
        <span className="text-xs text-gray-600 mt-2">Details</span>
      </div>
      <div className="flex-1 h-0.5 bg-blue-600 mx-2"></div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
          2
        </div>
        <span className="text-xs text-gray-600 mt-2">Payment</span>
      </div>
      <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">
          3
        </div>
        <span className="text-xs text-gray-600 mt-2">Complete</span>
      </div>
    </div>
  );
};

// Simple Pagination
export const SimplePagination: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>
      <span className="text-sm text-gray-600">Page 1 of 10</span>
      <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors">
        Next
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Vertical Stepper
export const VerticalStepper: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            ✓
          </div>
          <div className="w-0.5 h-16 bg-green-600"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Account Created</h4>
          <p className="text-sm text-gray-500">Your account has been created successfully</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
            2
          </div>
          <div className="w-0.5 h-16 bg-gray-300"></div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Verify Email</h4>
          <p className="text-sm text-gray-500">Check your email for verification link</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-semibold">
            3
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-gray-400">Complete Profile</h4>
          <p className="text-sm text-gray-400">Add your personal information</p>
        </div>
      </div>
    </div>
  );
};



// Pill Tabs Navigation
export const ModernNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
      <button className="px-6 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full text-sm font-medium shadow-sm">Home</button>
      <button className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full text-sm font-medium transition-colors">About</button>
      <button className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-full text-sm font-medium transition-colors">Contact</button>
    </nav>
  );
};

// Underline Tabs Navigation
export const MinimalNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-8 border-b border-gray-200 dark:border-gray-700">
      <button className="pb-3 border-b-2 border-blue-600 text-blue-600 dark:text-blue-400 text-sm font-semibold">Dashboard</button>
      <button className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Projects</button>
      <button className="pb-3 border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Team</button>
    </nav>
  );
};

// Icon Navigation with Badges
export const RoundedNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2">
      <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        Home
      </button>
      <button className="relative flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        Notifications
        <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs font-bold text-white bg-red-500 rounded-full">3</span>
      </button>
    </nav>
  );
};

// Vertical Sidebar Menu
export const SquareNav: React.FC = () => {
  return (
    <nav className="flex flex-col w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
      <button className="flex items-center gap-3 px-4 py-2.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        Menu Item 1
      </button>
      <button className="flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        Menu Item 2
      </button>
      <button className="flex items-center gap-3 px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        Settings
      </button>
    </nav>
  );
};

// Gradient Navigation
export const LargeNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-1.5 shadow-lg">
      <button className="px-5 py-2.5 bg-white text-purple-600 rounded-lg text-sm font-semibold shadow-sm">Features</button>
      <button className="px-5 py-2.5 text-white hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Pricing</button>
      <button className="px-5 py-2.5 text-white hover:bg-white/20 rounded-lg text-sm font-medium transition-colors">Docs</button>
    </nav>
  );
};

// Dot Indicator Navigation
export const SmallNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-6">
      <button className="relative text-sm font-semibold text-blue-600 dark:text-blue-400">
        Active
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
      </button>
      <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Link 1</button>
      <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Link 2</button>
    </nav>
  );
};

// Breadcrumbs with Icons
export const ColoredNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-medium">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        Home
      </button>
      <span className="text-gray-400">/</span>
      <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Products</button>
      <span className="text-gray-400">/</span>
      <span className="text-gray-700 dark:text-gray-300 font-semibold">Details</span>
    </nav>
  );
};

// Segmented Control
export const AnimatedNav: React.FC = () => {
  return (
    <nav className="inline-flex items-center gap-0 bg-gray-200 dark:bg-gray-800 rounded-lg p-1">
      <button className="px-4 py-1.5 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-md text-sm font-medium shadow-sm transition-all">Day</button>
      <button className="px-4 py-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Week</button>
      <button className="px-4 py-1.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors">Month</button>
    </nav>
  );
};

// Dropdown Navigation
export const GradientNav: React.FC = () => {
  return (
    <nav className="relative inline-block">
      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        Menu
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
    </nav>
  );
};

// Glass Morphism Navigation
export const GlassNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-2xl px-4 py-2 shadow-xl">
      <button className="px-4 py-2 bg-white/30 dark:bg-gray-700/30 backdrop-blur-sm text-gray-900 dark:text-white rounded-xl text-sm font-medium">Glass</button>
      <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20 rounded-xl text-sm font-medium transition-colors">Item 1</button>
      <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/20 rounded-xl text-sm font-medium transition-colors">Item 2</button>
    </nav>
  );
};

// Neon Border Navigation
export const NeonNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 bg-gray-900 border-2 border-cyan-400 rounded-lg p-2 shadow-lg shadow-cyan-400/50">
      <button className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-md text-sm font-bold">Neon</button>
      <button className="px-4 py-2 text-cyan-400 hover:bg-cyan-400/10 rounded-md text-sm font-medium transition-colors">Link 1</button>
      <button className="px-4 py-2 text-cyan-400 hover:bg-cyan-400/10 rounded-md text-sm font-medium transition-colors">Link 2</button>
    </nav>
  );
};

// Card Tabs Navigation
export const ThreeDNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2">
      <button className="px-5 py-3 bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl text-sm font-semibold shadow-lg shadow-blue-600/20 transform hover:scale-105 transition-transform">Active Tab</button>
      <button className="px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Tab 2</button>
      <button className="px-5 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 rounded-xl text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Tab 3</button>
    </nav>
  );
};

// Numbered Steps Navigation
export const BoldNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">1</div>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">Details</span>
      </div>
      <div className="flex-1 h-0.5 bg-blue-600"></div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">2</div>
        <span className="text-sm font-semibold text-gray-900 dark:text-white">Payment</span>
      </div>
      <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-full text-sm font-bold">3</div>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Complete</span>
      </div>
    </nav>
  );
};

// Tag Navigation
export const BorderedNav: React.FC = () => {
  return (
    <nav className="flex flex-wrap items-center gap-2">
      <button className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-300 dark:border-blue-700 rounded-full text-xs font-semibold">All</button>
      <button className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Design</button>
      <button className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Development</button>
      <button className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-full text-xs font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Marketing</button>
    </nav>
  );
};

// Icon Only Navigation
export const FilledNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-2">
      <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" title="Home">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </button>
      <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Search">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors" title="Settings">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </button>
    </nav>
  );
};

// Bottom Border Tabs
export const OutlinedNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-1 border-b-2 border-gray-200 dark:border-gray-700">
      <button className="px-4 py-3 border-b-4 border-blue-600 -mb-0.5 text-blue-600 dark:text-blue-400 text-sm font-semibold">Overview</button>
      <button className="px-4 py-3 border-b-4 border-transparent -mb-0.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 text-sm font-medium transition-colors">Analytics</button>
      <button className="px-4 py-3 border-b-4 border-transparent -mb-0.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 text-sm font-medium transition-colors">Reports</button>
    </nav>
  );
};

// Compact Icon Navigation
export const MaterialNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-1">
      <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md text-xs font-semibold">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        Active
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-xs font-medium transition-colors">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        Item 1
      </button>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-xs font-medium transition-colors">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        Item 2
      </button>
    </nav>
  );
};

// iOS Style Tab Bar
export const IOSNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-around bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-4 py-2">
      <button className="flex flex-col items-center gap-1">
        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13z"/></svg>
        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Search</span>
      </button>
      <button className="flex flex-col items-center gap-1">
        <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Profile</span>
      </button>
    </nav>
  );
};

// Android Material Navigation
export const AndroidNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-0">
      <button className="flex-1 py-3 bg-blue-600 text-white text-sm font-medium uppercase border-b-2 border-blue-600">Tab 1</button>
      <button className="flex-1 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm font-medium uppercase border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Tab 2</button>
      <button className="flex-1 py-3 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm font-medium uppercase border-b-2 border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-colors">Tab 3</button>
    </nav>
  );
};

// Horizontal Scroll Navigation
export const HorizontalNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <button className="flex-shrink-0 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium whitespace-nowrap">Featured</button>
      <button className="flex-shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Technology</button>
      <button className="flex-shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Business</button>
      <button className="flex-shrink-0 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Sports</button>
    </nav>
  );
};

// Vertical Tabs with Icons
export const VerticalNav: React.FC = () => {
  return (
    <nav className="flex flex-col w-64 gap-1">
      <button className="flex items-center gap-3 px-4 py-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 text-sm font-semibold">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        Dashboard
      </button>
      <button className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 border-l-4 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        Analytics
      </button>
      <button className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 border-l-4 border-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
        Settings
      </button>
    </nav>
  );
};

// Collapsible Sidebar Menu
export const SidebarNav: React.FC = () => {
  return (
    <nav className="flex flex-col w-56 bg-gray-900 text-white rounded-xl p-3 gap-1">
      <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</div>
      <button className="flex items-center gap-3 px-3 py-2.5 bg-blue-600 rounded-lg text-sm font-medium">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        Dashboard
      </button>
      <button className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
        Team
      </button>
      <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-3">Settings</div>
      <button className="flex items-center gap-3 px-3 py-2.5 text-gray-300 hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        Preferences
      </button>
    </nav>
  );
};

// Navbar with Logo
export const TopNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-blue-600 dark:text-blue-400">Logo</div>
        <div className="flex items-center gap-6">
          <button className="text-sm font-semibold text-gray-900 dark:text-white">Home</button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</button>
          <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Services</button>
        </div>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Get Started</button>
    </nav>
  );
};

// Mobile Bottom Bar
export const BottomNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-around bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg px-2 py-3">
      <button className="flex flex-col items-center gap-1 text-blue-600 dark:text-blue-400">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13z"/></svg>
        <span className="text-[10px] font-semibold">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        <span className="text-[10px] font-medium">Explore</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        <span className="text-[10px] font-medium">Favorites</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-400 dark:text-gray-500">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        <span className="text-[10px] font-medium">Profile</span>
      </button>
    </nav>
  );
};

// Floating Action Navigation
export const FloatingNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-3 py-2 shadow-2xl">
      <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors" title="Home">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 00.707-1.707l-9-9a.999.999 0 00-1.414 0l-9 9A1 1 0 003 13z"/></svg>
      </button>
      <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Search">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
      <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Notifications">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
      </button>
      <button className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors" title="Settings">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      </button>
    </nav>
  );
};

// Sticky Navbar
export const StickyNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 sticky top-0 shadow-sm">
      <div className="text-lg font-bold text-gray-900 dark:text-white">Brand</div>
      <div className="flex items-center gap-6">
        <button className="text-sm font-medium text-gray-900 dark:text-white">Features</button>
        <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</button>
        <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">About</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Sign In</button>
      </div>
    </nav>
  );
};

// Fixed Position Navigation
export const FixedNav: React.FC = () => {
  return (
    <nav className="flex items-center justify-center gap-4 bg-gray-900 text-white px-6 py-4 fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full shadow-2xl">
      <button className="px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold">Active</button>
      <button className="px-4 py-2 text-white hover:bg-white/10 rounded-full text-sm font-medium transition-colors">Link 1</button>
      <button className="px-4 py-2 text-white hover:bg-white/10 rounded-full text-sm font-medium transition-colors">Link 2</button>
    </nav>
  );
};

// Infinite Scroll Navigation
export const ScrollNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 pb-2">
      <button className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">Trending</button>
      <button className="flex-shrink-0 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Tech</button>
      <button className="flex-shrink-0 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Design</button>
      <button className="flex-shrink-0 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Business</button>
      <button className="flex-shrink-0 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium whitespace-nowrap hover:border-gray-400 dark:hover:border-gray-500 transition-colors">Marketing</button>
    </nav>
  );
};

// Mega Menu Navigation
export const MegaNav: React.FC = () => {
  return (
    <nav className="flex items-center gap-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">MegaNav</div>
      <button className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Products ▾</button>
      <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Solutions ▾</button>
      <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Resources ▾</button>
      <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">Pricing</button>
    </nav>
  );
};

export const navigationComponents = [
  {
    name: 'Pagination',
    component: Pagination,
    code: `<div className="component">
  {/* Pagination */}
</div>`,
    preview: <Pagination />,
  },
  {
    name: 'Breadcrumbs',
    component: Breadcrumbs,
    code: `<div className="component">
  {/* Breadcrumbs */}
</div>`,
    preview: <Breadcrumbs />,
  },
  {
    name: 'Tabs',
    component: Tabs,
    code: `<div className="component">
  {/* Tabs */}
</div>`,
    preview: <Tabs />,
  },
  {
    name: 'Stepper',
    component: Stepper,
    code: `<div className="component">
  {/* Stepper */}
</div>`,
    preview: <Stepper />,
  },
  {
    name: 'SimplePagination',
    component: SimplePagination,
    code: `<div className="component">
  {/* SimplePagination */}
</div>`,
    preview: <SimplePagination />,
  },
  {
    name: 'VerticalStepper',
    component: VerticalStepper,
    code: `<div className="component">
  {/* VerticalStepper */}
</div>`,
    preview: <VerticalStepper />,
  },
  {
    name: 'ModernNav',
    component: ModernNav,
    code: `<div className="component">
  {/* ModernNav */}
</div>`,
    preview: <ModernNav />,
  },
  {
    name: 'MinimalNav',
    component: MinimalNav,
    code: `<div className="component">
  {/* MinimalNav */}
</div>`,
    preview: <MinimalNav />,
  },
  {
    name: 'RoundedNav',
    component: RoundedNav,
    code: `<div className="component">
  {/* RoundedNav */}
</div>`,
    preview: <RoundedNav />,
  },
  {
    name: 'SquareNav',
    component: SquareNav,
    code: `<div className="component">
  {/* SquareNav */}
</div>`,
    preview: <SquareNav />,
  },
  {
    name: 'LargeNav',
    component: LargeNav,
    code: `<div className="component">
  {/* LargeNav */}
</div>`,
    preview: <LargeNav />,
  },
  {
    name: 'SmallNav',
    component: SmallNav,
    code: `<div className="component">
  {/* SmallNav */}
</div>`,
    preview: <SmallNav />,
  },
  {
    name: 'ColoredNav',
    component: ColoredNav,
    code: `<div className="component">
  {/* ColoredNav */}
</div>`,
    preview: <ColoredNav />,
  },
  {
    name: 'AnimatedNav',
    component: AnimatedNav,
    code: `<div className="component">
  {/* AnimatedNav */}
</div>`,
    preview: <AnimatedNav />,
  },
  {
    name: 'GradientNav',
    component: GradientNav,
    code: `<div className="component">
  {/* GradientNav */}
</div>`,
    preview: <GradientNav />,
  },
  {
    name: 'GlassNav',
    component: GlassNav,
    code: `<div className="component">
  {/* GlassNav */}
</div>`,
    preview: <GlassNav />,
  },
  {
    name: 'NeonNav',
    component: NeonNav,
    code: `<div className="component">
  {/* NeonNav */}
</div>`,
    preview: <NeonNav />,
  },
  {
    name: 'ThreeDNav',
    component: ThreeDNav,
    code: `<div className="component">
  {/* ThreeDNav */}
</div>`,
    preview: <ThreeDNav />,
  },
  {
    name: 'BoldNav',
    component: BoldNav,
    code: `<div className="component">
  {/* BoldNav */}
</div>`,
    preview: <BoldNav />,
  },
  {
    name: 'BorderedNav',
    component: BorderedNav,
    code: `<div className="component">
  {/* BorderedNav */}
</div>`,
    preview: <BorderedNav />,
  },
  {
    name: 'FilledNav',
    component: FilledNav,
    code: `<div className="component">
  {/* FilledNav */}
</div>`,
    preview: <FilledNav />,
  },
  {
    name: 'OutlinedNav',
    component: OutlinedNav,
    code: `<div className="component">
  {/* OutlinedNav */}
</div>`,
    preview: <OutlinedNav />,
  },
  {
    name: 'MaterialNav',
    component: MaterialNav,
    code: `<div className="component">
  {/* MaterialNav */}
</div>`,
    preview: <MaterialNav />,
  },
  {
    name: 'IOSNav',
    component: IOSNav,
    code: `<div className="component">
  {/* IOSNav */}
</div>`,
    preview: <IOSNav />,
  },
  {
    name: 'AndroidNav',
    component: AndroidNav,
    code: `<div className="component">
  {/* AndroidNav */}
</div>`,
    preview: <AndroidNav />,
  },
  {
    name: 'HorizontalNav',
    component: HorizontalNav,
    code: `<div className="component">
  {/* HorizontalNav */}
</div>`,
    preview: <HorizontalNav />,
  },
  {
    name: 'VerticalNav',
    component: VerticalNav,
    code: `<div className="component">
  {/* VerticalNav */}
</div>`,
    preview: <VerticalNav />,
  },
  {
    name: 'SidebarNav',
    component: SidebarNav,
    code: `<div className="component">
  {/* SidebarNav */}
</div>`,
    preview: <SidebarNav />,
  },
  {
    name: 'TopNav',
    component: TopNav,
    code: `<div className="component">
  {/* TopNav */}
</div>`,
    preview: <TopNav />,
  },
  {
    name: 'BottomNav',
    component: BottomNav,
    code: `<div className="component">
  {/* BottomNav */}
</div>`,
    preview: <BottomNav />,
  },
  {
    name: 'FloatingNav',
    component: FloatingNav,
    code: `<div className="component">
  {/* FloatingNav */}
</div>`,
    preview: <FloatingNav />,
  },
  {
    name: 'StickyNav',
    component: StickyNav,
    code: `<div className="component">
  {/* StickyNav */}
</div>`,
    preview: <StickyNav />,
  },
  {
    name: 'FixedNav',
    component: FixedNav,
    code: `<div className="component">
  {/* FixedNav */}
</div>`,
    preview: <FixedNav />,
  },
  {
    name: 'ScrollNav',
    component: ScrollNav,
    code: `<div className="component">
  {/* ScrollNav */}
</div>`,
    preview: <ScrollNav />,
  },
  {
    name: 'MegaNav',
    component: MegaNav,
    code: `<div className="component">
  {/* MegaNav */}
</div>`,
    preview: <MegaNav />,
  },
];
