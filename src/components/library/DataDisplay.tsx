import React from 'react';

// Avatar Component
export const Avatar: React.FC = () => {
  return (
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
      JD
    </div>
  );
};

// Badge Component
export const Badge: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-gray-700">Notifications</span>
      <span className="px-2.5 py-0.5 text-xs font-semibold bg-red-600 text-white rounded-full">5</span>
    </div>
  );
};

// Chip Component
export const Chip: React.FC = () => {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
      <span>React</span>
      <button className="hover:bg-blue-200 rounded-full p-0.5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

// Divider Component
export const Divider: React.FC = () => {
  return (
    <div className="w-full">
      <div className="border-t border-gray-300 my-4"></div>
    </div>
  );
};

// List Component
export const List: React.FC = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 cursor-pointer transition-colors">
        <p className="font-medium text-gray-800">John Doe</p>
        <p className="text-sm text-gray-500">john@example.com</p>
      </div>
      <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 cursor-pointer transition-colors">
        <p className="font-medium text-gray-800">Jane Smith</p>
        <p className="text-sm text-gray-500">jane@example.com</p>
      </div>
      <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
        <p className="font-medium text-gray-800">Bob Johnson</p>
        <p className="text-sm text-gray-500">bob@example.com</p>
      </div>
    </div>
  );
};

// Avatar Group
export const AvatarGroup: React.FC = () => {
  return (
    <div className="flex -space-x-2">
      <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
        A
      </div>
      <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
        B
      </div>
      <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
        C
      </div>
      <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center text-white font-semibold text-xs">
        +3
      </div>
    </div>
  );
};

// Status Badge
export const StatusBadge: React.FC = () => {
  return (
    <div className="flex gap-2">
      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span>
      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Pending</span>
      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Inactive</span>
    </div>
  );
};

// Icon Badge
export const IconBadge: React.FC = () => {
  return (
    <div className="relative inline-block">
      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
        3
      </span>
    </div>
  );
};

export const dataDisplayComponents = [
  {
    name: 'Avatar',
    component: Avatar,
    code: `<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
  JD
</div>`,
    preview: <Avatar />,
  },
  {
    name: 'Badge',
    component: Badge,
    code: `<div className="inline-flex items-center gap-2">
  <span className="text-gray-700">Notifications</span>
  <span className="px-2.5 py-0.5 text-xs font-semibold bg-red-600 text-white rounded-full">5</span>
</div>`,
    preview: <Badge />,
  },
  {
    name: 'Chip',
    component: Chip,
    code: `<div className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
  <span>React</span>
  <button className="hover:bg-blue-200 rounded-full p-0.5">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
</div>`,
    preview: <Chip />,
  },
  {
    name: 'Divider',
    component: Divider,
    code: `<div className="border-t border-gray-300 my-4"></div>`,
    preview: <Divider />,
  },
  {
    name: 'List',
    component: List,
    code: `<div className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 cursor-pointer">
    <p className="font-medium text-gray-800">John Doe</p>
    <p className="text-sm text-gray-500">john@example.com</p>
  </div>
  <div className="px-4 py-3 hover:bg-gray-50 border-b border-gray-200 cursor-pointer">
    <p className="font-medium text-gray-800">Jane Smith</p>
    <p className="text-sm text-gray-500">jane@example.com</p>
  </div>
  <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
    <p className="font-medium text-gray-800">Bob Johnson</p>
    <p className="text-sm text-gray-500">bob@example.com</p>
  </div>
</div>`,
    preview: <List />,
  },
  {
    name: 'AvatarGroup',
    component: AvatarGroup,
    code: `<div className="flex -space-x-2">
  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">A</div>
  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">B</div>
  <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">C</div>
  <div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white flex items-center justify-center text-white font-semibold text-xs">+3</div>
</div>`,
    preview: <AvatarGroup />,
  },
  {
    name: 'StatusBadge',
    component: StatusBadge,
    code: `<div className="flex gap-2">
  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">Active</span>
  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">Pending</span>
  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">Inactive</span>
</div>`,
    preview: <StatusBadge />,
  },
  {
    name: 'IconBadge',
    component: IconBadge,
    code: `<div className="relative inline-block">
  <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
</div>`,
    preview: <IconBadge />,
  },
];
