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

export const navigationComponents = [
  {
    name: 'Pagination',
    component: Pagination,
    code: `<div className="flex items-center gap-2">
  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
</div>`,
    preview: <Pagination />,
  },
  {
    name: 'Breadcrumbs',
    component: Breadcrumbs,
    code: `<nav className="flex items-center gap-2 text-sm">
  <a href="#" className="text-blue-600 hover:underline">Home</a>
  <span className="text-gray-400">/</span>
  <a href="#" className="text-blue-600 hover:underline">Products</a>
  <span className="text-gray-400">/</span>
  <span className="text-gray-700 font-medium">Details</span>
</nav>`,
    preview: <Breadcrumbs />,
  },
  {
    name: 'Tabs',
    component: Tabs,
    code: `<div className="w-full">
  <div className="flex border-b border-gray-200">
    <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">Tab 1</button>
    <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 2</button>
    <button className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium">Tab 3</button>
  </div>
  <div className="p-4 bg-white border border-t-0 border-gray-200 rounded-b-lg">
    <p className="text-gray-700">Tab content goes here</p>
  </div>
</div>`,
    preview: <Tabs />,
  },
  {
    name: 'Stepper',
    component: Stepper,
    code: `<div className="flex items-center justify-between w-full max-w-md">
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
    <span className="text-xs text-gray-600 mt-2">Details</span>
  </div>
  <div className="flex-1 h-0.5 bg-blue-600 mx-2"></div>
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
    <span className="text-xs text-gray-600 mt-2">Payment</span>
  </div>
  <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
  <div className="flex flex-col items-center">
    <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-semibold">3</div>
    <span className="text-xs text-gray-600 mt-2">Complete</span>
  </div>
</div>`,
    preview: <Stepper />,
  },
  {
    name: 'SimplePagination',
    component: SimplePagination,
    code: `<div className="flex items-center justify-between w-full">
  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
    Previous
  </button>
  <span className="text-sm text-gray-600">Page 1 of 10</span>
  <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-blue-600">
    Next
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </button>
</div>`,
    preview: <SimplePagination />,
  },
  {
    name: 'VerticalStepper',
    component: VerticalStepper,
    code: `<div className="space-y-4">
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">✓</div>
      <div className="w-0.5 h-16 bg-green-600"></div>
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">Account Created</h4>
      <p className="text-sm text-gray-500">Your account has been created successfully</p>
    </div>
  </div>
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
      <div className="w-0.5 h-16 bg-gray-300"></div>
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">Verify Email</h4>
      <p className="text-sm text-gray-500">Check your email for verification link</p>
    </div>
  </div>
</div>`,
    preview: <VerticalStepper />,
  },
];
