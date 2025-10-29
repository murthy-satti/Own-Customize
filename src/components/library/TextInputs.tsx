import React from 'react';

// Text Input
export const TextInput: React.FC<{ placeholder?: string; label?: string }> = ({ placeholder = "Enter text...", label }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Email Input
export const EmailInput: React.FC<{ placeholder?: string; label?: string }> = ({ placeholder = "Enter email...", label }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        type="email"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Password Input
export const PasswordInput: React.FC<{ placeholder?: string; label?: string }> = ({ placeholder = "Enter password...", label }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <input
        type="password"
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Search Input
export const SearchInput: React.FC<{ placeholder?: string }> = ({ placeholder = "Search..." }) => {
  return (
    <div className="w-full relative">
      <input
        type="search"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
      <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

// Textarea
export const TextArea: React.FC<{ placeholder?: string; label?: string; rows?: number }> = ({ placeholder = "Enter text...", label, rows = 4 }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <textarea
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
      />
    </div>
  );
};

export const textInputComponents = [
  {
    name: 'TextInput',
    component: TextInput,
    code: `<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
/>`,
    preview: <TextInput placeholder="Enter text..." label="Text Input" />,
  },
  {
    name: 'EmailInput',
    component: EmailInput,
    code: `<input
  type="email"
  placeholder="Enter email..."
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
/>`,
    preview: <EmailInput placeholder="Enter email..." label="Email Input" />,
  },
  {
    name: 'PasswordInput',
    component: PasswordInput,
    code: `<input
  type="password"
  placeholder="Enter password..."
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
/>`,
    preview: <PasswordInput placeholder="Enter password..." label="Password Input" />,
  },
  {
    name: 'SearchInput',
    component: SearchInput,
    code: `<div className="w-full relative">
  <input
    type="search"
    placeholder="Search..."
    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
  />
  <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
</div>`,
    preview: <SearchInput placeholder="Search..." />,
  },
  {
    name: 'TextArea',
    component: TextArea,
    code: `<textarea
  placeholder="Enter text..."
  rows={4}
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
/>`,
    preview: <TextArea placeholder="Enter text..." label="Textarea" />,
  },
];
