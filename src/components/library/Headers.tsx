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
      <input type="search" placeholder="Search..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
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
];
