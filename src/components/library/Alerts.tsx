import React from 'react';

// Success Alert
export const SuccessAlert: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-green-800">Success!</h4>
        <p className="text-sm text-green-700">Your changes have been saved successfully.</p>
      </div>
    </div>
  );
};

// Error Alert
export const ErrorAlert: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-red-800">Error!</h4>
        <p className="text-sm text-red-700">There was an error processing your request.</p>
      </div>
    </div>
  );
};

// Warning Alert
export const WarningAlert: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-yellow-800">Warning!</h4>
        <p className="text-sm text-yellow-700">Please review your information before continuing.</p>
      </div>
    </div>
  );
};

// Info Alert
export const InfoAlert: React.FC = () => {
  return (
    <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-blue-800">Info</h4>
        <p className="text-sm text-blue-700">Your session will expire in 5 minutes.</p>
      </div>
    </div>
  );
};

export const alertComponents = [
  {
    name: 'SuccessAlert',
    component: SuccessAlert,
    code: `<div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <div>
    <h4 className="text-sm font-semibold text-green-800">Success!</h4>
    <p className="text-sm text-green-700">Your changes have been saved successfully.</p>
  </div>
</div>`,
    preview: <SuccessAlert />,
  },
  {
    name: 'ErrorAlert',
    component: ErrorAlert,
    code: `<div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <div>
    <h4 className="text-sm font-semibold text-red-800">Error!</h4>
    <p className="text-sm text-red-700">There was an error processing your request.</p>
  </div>
</div>`,
    preview: <ErrorAlert />,
  },
  {
    name: 'WarningAlert',
    component: WarningAlert,
    code: `<div className="flex items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <div>
    <h4 className="text-sm font-semibold text-yellow-800">Warning!</h4>
    <p className="text-sm text-yellow-700">Please review your information before continuing.</p>
  </div>
</div>`,
    preview: <WarningAlert />,
  },
  {
    name: 'InfoAlert',
    component: InfoAlert,
    code: `<div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <div>
    <h4 className="text-sm font-semibold text-blue-800">Info</h4>
    <p className="text-sm text-blue-700">Your session will expire in 5 minutes.</p>
  </div>
</div>`,
    preview: <InfoAlert />,
  },
];
