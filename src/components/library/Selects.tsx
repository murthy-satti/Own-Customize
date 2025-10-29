import React from 'react';

// Select Dropdown
export const SelectInput: React.FC<{ label?: string }> = ({ label = "Select Country" }) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer">
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Australia</option>
      </select>
    </div>
  );
};

// Multi Select
export const MultiSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select multiple options</label>
      <select multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer" size={4}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
      </select>
    </div>
  );
};

// Select with Icon
export const SelectWithIcon: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
      <div className="relative">
        <select className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer appearance-none">
          <option>USD - US Dollar</option>
          <option>EUR - Euro</option>
          <option>GBP - British Pound</option>
          <option>JPY - Japanese Yen</option>
        </select>
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

// Switch/Toggle
export const SwitchInput: React.FC<{ label?: string }> = ({ label = "Enable notifications" }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
      </button>
    </div>
  );
};

// Switch with Description
export const SwitchWithDescription: React.FC = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-900">Email Notifications</span>
        <p className="text-xs text-gray-500 mt-1">Receive email updates about your account activity</p>
      </div>
      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700 ml-4">
        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
      </button>
    </div>
  );
};

// Small Switch
export const SmallSwitch: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300 transition-colors hover:bg-gray-400">
        <span className="inline-block h-3 w-3 transform rounded-full bg-white transition-transform translate-x-1" />
      </button>
      <span className="text-xs font-medium text-gray-700">Small toggle</span>
    </div>
  );
};

export const selectComponents = [
  {
    name: 'SelectDropdown',
    component: SelectInput,
    code: `<div className="w-full">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select Country</label>
  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer">
    <option>United States</option>
    <option>United Kingdom</option>
    <option>Canada</option>
    <option>Australia</option>
  </select>
</div>`,
    preview: <SelectInput />,
  },
  {
    name: 'MultiSelect',
    component: MultiSelect,
    code: `<div className="w-full">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select multiple options</label>
  <select multiple className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer" size={4}>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
  </select>
</div>`,
    preview: <MultiSelect />,
  },
  {
    name: 'SelectWithIcon',
    component: SelectWithIcon,
    code: `<div className="relative">
  <select className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer appearance-none">
    <option>USD - US Dollar</option>
    <option>EUR - Euro</option>
  </select>
  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2..." />
    </svg>
  </div>
</div>`,
    preview: <SelectWithIcon />,
  },
  {
    name: 'Switch',
    component: SwitchInput,
    code: `<div className="flex items-center justify-between">
  <span className="text-sm font-medium text-gray-700">Enable notifications</span>
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
  </button>
</div>`,
    preview: <SwitchInput />,
  },
  {
    name: 'SwitchWithDescription',
    component: SwitchWithDescription,
    code: `<div className="flex items-start justify-between">
  <div className="flex-1">
    <span className="text-sm font-medium text-gray-900">Email Notifications</span>
    <p className="text-xs text-gray-500 mt-1">Receive email updates about your account activity</p>
  </div>
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700 ml-4">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
  </button>
</div>`,
    preview: <SwitchWithDescription />,
  },
  {
    name: 'SmallSwitch',
    component: SmallSwitch,
    code: `<div className="flex items-center gap-2">
  <button className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-300 transition-colors hover:bg-gray-400">
    <span className="inline-block h-3 w-3 transform rounded-full bg-white transition-transform translate-x-1" />
  </button>
  <span className="text-xs font-medium text-gray-700">Small toggle</span>
</div>`,
    preview: <SmallSwitch />,
  },
];
