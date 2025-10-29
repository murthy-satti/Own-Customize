import React from 'react';

// Progress Bar
export const ProgressBar: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-medium text-gray-700">70%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
      </div>
    </div>
  );
};

// Circle Progress
export const CircleProgress: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset="62.8"
            className="text-blue-600"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-700">75%</span>
        </div>
      </div>
    </div>
  );
};

export const progressComponents = [
  {
    name: 'ProgressBar',
    component: ProgressBar,
    code: `<div className="w-full">
  <div className="flex justify-between mb-1">
    <span className="text-sm font-medium">Progress</span>
    <span className="text-sm font-medium">70%</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-2.5">
    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
  </div>
</div>`,
    preview: <ProgressBar />,
  },
  {
    name: 'CircleProgress',
    component: CircleProgress,
    code: `<div className="relative w-24 h-24">
  <svg className="w-full h-full transform -rotate-90">
    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-200" />
    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" className="text-blue-600" />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-xl font-semibold">75%</span>
  </div>
</div>`,
    preview: <CircleProgress />,
  },
];
