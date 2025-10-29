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

// Purple Input
export const PurpleInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-purple-700 mb-2">Purple Theme Input</label>
      <input
        type="text"
        placeholder="Type here..."
        className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-purple-50"
      />
    </div>
  );
};

// Green Success Input
export const GreenInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-green-700 mb-2">Success Input</label>
      <input
        type="text"
        placeholder="Verified input"
        className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-green-50"
      />
    </div>
  );
};

// Pink Input
export const PinkInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-pink-700 mb-2">Pink Theme Input</label>
      <input
        type="text"
        placeholder="Enter text..."
        className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all bg-pink-50"
      />
    </div>
  );
};

// Input with Icon Right
export const InputWithIconRight: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
      <div className="relative">
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        />
        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );
};

// Floating Label Input
export const FloatingLabelInput: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <input
          type="text"
          id="floating"
          placeholder=" "
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all peer"
        />
        <label
          htmlFor="floating"
          className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 left-3 bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600"
        >
          Floating Label
        </label>
      </div>
    </div>
  );
};

// Input with Helper Text
export const InputWithHelper: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
      <input
        type="text"
        placeholder="johndoe"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
      <p className="mt-1 text-xs text-gray-500">Choose a unique username (3-20 characters)</p>
    </div>
  );
};

// Error State Input
export const ErrorInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        type="email"
        placeholder="invalid-email"
        className="w-full px-4 py-2 border-2 border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-red-50"
      />
      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
        Please enter a valid email address
      </p>
    </div>
  );
};

// Large Input
export const LargeInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-base font-semibold text-gray-800 mb-3">Large Input Field</label>
      <input
        type="text"
        placeholder="Type something..."
        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
      />
    </div>
  );
};

// Input with Prefix
export const InputWithPrefix: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">
          https://
        </span>
        <input
          type="text"
          placeholder="www.example.com"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
      </div>
    </div>
  );
};

// Input with Suffix
export const InputWithSuffix: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
      <div className="flex">
        <input
          type="number"
          placeholder="100"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <span className="inline-flex items-center px-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg">
          USD
        </span>
      </div>
    </div>
  );
};

// Dark Input
export const DarkInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-white mb-2">Dark Theme Input</label>
      <input
        type="text"
        placeholder="Type here..."
        className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-800 text-white placeholder-gray-400"
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
  {
    name: 'PurpleInput',
    component: PurpleInput,
    code: `<input
  type="text"
  placeholder="Type here..."
  className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all bg-purple-50"
/>`,
    preview: <PurpleInput />,
  },
  {
    name: 'GreenInput',
    component: GreenInput,
    code: `<input
  type="text"
  placeholder="Verified input"
  className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all bg-green-50"
/>`,
    preview: <GreenInput />,
  },
  {
    name: 'PinkInput',
    component: PinkInput,
    code: `<input
  type="text"
  placeholder="Enter text..."
  className="w-full px-4 py-3 border-2 border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all bg-pink-50"
/>`,
    preview: <PinkInput />,
  },
  {
    name: 'InputWithIconRight',
    component: InputWithIconRight,
    code: `<div className="relative">
  <input type="email" placeholder="you@example.com" className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
  <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
</div>`,
    preview: <InputWithIconRight />,
  },
  {
    name: 'FloatingLabelInput',
    component: FloatingLabelInput,
    code: `<div className="relative">
  <input type="text" id="floating" placeholder=" " className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all peer" />
  <label htmlFor="floating" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 left-3 bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-blue-600">
    Floating Label
  </label>
</div>`,
    preview: <FloatingLabelInput />,
  },
  {
    name: 'InputWithHelper',
    component: InputWithHelper,
    code: `<div>
  <input type="text" placeholder="johndoe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" />
  <p className="mt-1 text-xs text-gray-500">Choose a unique username (3-20 characters)</p>
</div>`,
    preview: <InputWithHelper />,
  },
  {
    name: 'ErrorInput',
    component: ErrorInput,
    code: `<div>
  <input type="email" placeholder="invalid-email" className="w-full px-4 py-2 border-2 border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all bg-red-50" />
  <p className="mt-1 text-xs text-red-600">Please enter a valid email address</p>
</div>`,
    preview: <ErrorInput />,
  },
  {
    name: 'LargeInput',
    component: LargeInput,
    code: `<input
  type="text"
  placeholder="Type something..."
  className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
/>`,
    preview: <LargeInput />,
  },
  {
    name: 'InputWithPrefix',
    component: InputWithPrefix,
    code: `<div className="flex">
  <span className="inline-flex items-center px-3 text-sm text-gray-600 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg">https://</span>
  <input type="text" placeholder="www.example.com" className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
</div>`,
    preview: <InputWithPrefix />,
  },
  {
    name: 'InputWithSuffix',
    component: InputWithSuffix,
    code: `<div className="flex">
  <input type="number" placeholder="100" className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
  <span className="inline-flex items-center px-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-l-0 border-gray-300 rounded-r-lg">USD</span>
</div>`,
    preview: <InputWithSuffix />,
  },
  {
    name: 'DarkInput',
    component: DarkInput,
    code: `<input
  type="text"
  placeholder="Type here..."
  className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all bg-gray-800 text-white placeholder-gray-400"
/>`,
    preview: <div className="bg-gray-900 p-4 rounded-lg"><DarkInput /></div>,
  },
];
