import React from 'react';

// Card Type 1: Basic Card
export const BasicCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
      <p className="text-gray-600">This is a basic card component with a clean design.</p>
    </div>
  );
};

// Card Type 2: Image Card
export const ImageCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Image Card</h3>
        <p className="text-gray-600">Card with image header and content section.</p>
      </div>
    </div>
  );
};

// Card Type 3: Profile Card
export const ProfileCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md text-center">
      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">John Doe</h3>
      <p className="text-gray-500 mb-4">Web Developer</p>
      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Follow
      </button>
    </div>
  );
};

// Card Type 4: Pricing Card
export const PricingCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-md border-2 border-blue-500">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h3>
        <div className="text-4xl font-bold text-blue-600">$29<span className="text-lg text-gray-500">/mo</span></div>
      </div>
      <ul className="space-y-3 mb-6">
        <li className="flex items-center text-gray-700">
          <span className="text-green-500 mr-2">✓</span>
          Feature one included
        </li>
        <li className="flex items-center text-gray-700">
          <span className="text-green-500 mr-2">✓</span>
          Feature two included
        </li>
        <li className="flex items-center text-gray-700">
          <span className="text-green-500 mr-2">✓</span>
          Feature three included
        </li>
      </ul>
      <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Get Started
      </button>
    </div>
  );
};

// Card Type 5: Feature Card
export const FeatureCard: React.FC = () => {
  return (
    <div className="w-full max-w-sm p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md border border-blue-100">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        <span className="text-white text-2xl">⚡</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Performance</h3>
      <p className="text-gray-600">Lightning-fast load times and optimized performance for the best user experience.</p>
    </div>
  );
};

export const cardComponents = [
  {
    name: 'BasicCard',
    component: BasicCard,
    code: `<div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-bold text-gray-800 mb-2">Card Title</h3>
  <p className="text-gray-600">This is a basic card component with a clean design.</p>
</div>`,
    preview: <BasicCard />,
  },
  {
    name: 'ImageCard',
    component: ImageCard,
    code: `<div className="w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
  <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-gray-800 mb-2">Image Card</h3>
    <p className="text-gray-600">Card with image header and content section.</p>
  </div>
</div>`,
    preview: <ImageCard />,
  },
  {
    name: 'ProfileCard',
    component: ProfileCard,
    code: `<div className="w-full max-w-sm p-6 bg-white rounded-xl shadow-md text-center">
  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
  <h3 className="text-xl font-bold text-gray-800 mb-1">John Doe</h3>
  <p className="text-gray-500 mb-4">Web Developer</p>
  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
    Follow
  </button>
</div>`,
    preview: <ProfileCard />,
  },
  {
    name: 'PricingCard',
    component: PricingCard,
    code: `<div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-md border-2 border-blue-500">
  <div className="text-center mb-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">Pro Plan</h3>
    <div className="text-4xl font-bold text-blue-600">$29<span className="text-lg text-gray-500">/mo</span></div>
  </div>
  <ul className="space-y-3 mb-6">
    <li className="flex items-center text-gray-700">
      <span className="text-green-500 mr-2">✓</span>
      Feature one included
    </li>
    <li className="flex items-center text-gray-700">
      <span className="text-green-500 mr-2">✓</span>
      Feature two included
    </li>
    <li className="flex items-center text-gray-700">
      <span className="text-green-500 mr-2">✓</span>
      Feature three included
    </li>
  </ul>
  <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
    Get Started
  </button>
</div>`,
    preview: <PricingCard />,
  },
  {
    name: 'FeatureCard',
    component: FeatureCard,
    code: `<div className="w-full max-w-sm p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md border border-blue-100">
  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
    <span className="text-white text-2xl">⚡</span>
  </div>
  <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Performance</h3>
  <p className="text-gray-600">Lightning-fast load times and optimized performance for the best user experience.</p>
</div>`,
    preview: <FeatureCard />,
  },
];
