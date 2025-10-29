import React from 'react';

// Spinner Loader
export const Spinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

// Dots Loader
export const DotsLoader: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
      <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    </div>
  );
};

// Pulse Loader
export const PulseLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 bg-blue-600 rounded-full animate-pulse"></div>
    </div>
  );
};

// Skeleton Loader
export const SkeletonLoader: React.FC = () => {
  return (
    <div className="w-full space-y-3 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
  );
};

export const loaderComponents = [
  {
    name: 'Spinner',
    component: Spinner,
    code: `<div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>`,
    preview: <Spinner />,
  },
  {
    name: 'DotsLoader',
    component: DotsLoader,
    code: `<div className="flex items-center gap-2">
  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
  <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
</div>`,
    preview: <DotsLoader />,
  },
  {
    name: 'PulseLoader',
    component: PulseLoader,
    code: `<div className="w-12 h-12 bg-blue-600 rounded-full animate-pulse"></div>`,
    preview: <PulseLoader />,
  },
  {
    name: 'SkeletonLoader',
    component: SkeletonLoader,
    code: `<div className="w-full space-y-3 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  <div className="h-4 bg-gray-200 rounded"></div>
  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
</div>`,
    preview: <SkeletonLoader />,
  },
];
