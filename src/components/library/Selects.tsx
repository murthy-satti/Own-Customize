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



// Native Styled Select
export const ModernSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
      <select className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all shadow-sm">
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Canada</option>
        <option>Australia</option>
      </select>
    </div>
  );
};

// Select with Floating Label
export const MinimalSelect: React.FC = () => {
  return (
    <div className="w-full relative">
      <select className="w-full px-4 pt-6 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all peer">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </select>
      <label className="absolute left-4 top-2 text-xs text-gray-500 dark:text-gray-400">Select Option</label>
    </div>
  );
};

// Gradient Border Select
export const RoundedSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Choose Plan</label>
      <select className="w-full px-4 py-3 border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400">
        <option className="bg-gray-800">Basic - $9/mo</option>
        <option className="bg-gray-800">Pro - $29/mo</option>
        <option className="bg-gray-800">Enterprise - $99/mo</option>
      </select>
    </div>
  );
};

// Icon Left Select
export const SquareSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
        </div>
        <select className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
};

// Large Select with Description
export const LargeSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-base font-semibold text-gray-900 dark:text-white mb-1">Priority Level</label>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Select the urgency of your request</p>
      <select className="w-full px-5 py-4 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all font-medium">
        <option>🔴 High - Urgent</option>
        <option>🟡 Medium - Normal</option>
        <option>🟢 Low - Can Wait</option>
      </select>
    </div>
  );
};

// Compact Select
export const SmallSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Size</label>
      <select className="w-full px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all">
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>
  );
};

// Colored Background Select
export const ColoredSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-purple-700 dark:text-purple-400 mb-2">Theme</label>
      <select className="w-full px-4 py-3 border-0 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all">
        <option>Light Mode</option>
        <option>Dark Mode</option>
        <option>Auto</option>
      </select>
    </div>
  );
};

// Multi-Select
export const AnimatedSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Multiple</label>
      <select multiple className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all" size={4}>
        <option className="py-2">JavaScript</option>
        <option className="py-2">Python</option>
        <option className="py-2">TypeScript</option>
        <option className="py-2">Rust</option>
      </select>
    </div>
  );
};

// Grouped Select
export const GradientSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Framework</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white cursor-pointer transition-all">
        <optgroup label="Frontend">
          <option>React</option>
          <option>Vue</option>
          <option>Angular</option>
        </optgroup>
        <optgroup label="Backend">
          <option>Node.js</option>
          <option>Django</option>
          <option>Laravel</option>
        </optgroup>
      </select>
    </div>
  );
};

// Glass Morphism Select
export const GlassSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Glass Effect</label>
      <select className="w-full px-4 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border border-white/30 dark:border-gray-700/30 rounded-xl text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all shadow-lg">
        <option className="bg-gray-800">Option 1</option>
        <option className="bg-gray-800">Option 2</option>
        <option className="bg-gray-800">Option 3</option>
      </select>
    </div>
  );
};

// Neon Select
export const NeonSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-cyan-400 mb-2">Neon Style</label>
      <select className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-400 rounded-lg text-cyan-400 font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition-all">
        <option className="bg-gray-800">Neon Blue</option>
        <option className="bg-gray-800">Neon Pink</option>
        <option className="bg-gray-800">Neon Green</option>
      </select>
    </div>
  );
};

// 3D Shadow Select
export const ThreeDSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">3D Select</label>
      <select className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_4px_0_0_rgb(59,130,246)] dark:shadow-[0_4px_0_0_rgb(37,99,235)] active:shadow-[0_2px_0_0_rgb(59,130,246)] active:translate-y-0.5 transition-all">
        <option>3D Option 1</option>
        <option>3D Option 2</option>
        <option>3D Option 3</option>
      </select>
    </div>
  );
};

// Bold Border Select
export const BoldSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-base font-bold text-gray-900 dark:text-white mb-2">Bold Select</label>
      <select className="w-full px-4 py-3 border-4 border-gray-900 dark:border-white rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all">
        <option>Bold 1</option>
        <option>Bold 2</option>
        <option>Bold 3</option>
      </select>
    </div>
  );
};

// Dotted Border Select
export const BorderedSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Dotted Border</label>
      <select className="w-full px-4 py-3 border-2 border-dashed border-gray-400 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:border-solid focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
        <option>Option A</option>
        <option>Option B</option>
        <option>Option C</option>
      </select>
    </div>
  );
};

// Filled Background Select
export const FilledSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filled Select</label>
      <select className="w-full px-4 py-3 border-0 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-gray-100 dark:focus:bg-gray-600 transition-all">
        <option>Filled 1</option>
        <option>Filled 2</option>
        <option>Filled 3</option>
      </select>
    </div>
  );
};

// Outlined Subtle Select
export const OutlinedSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Outlined</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
        <option className="bg-white dark:bg-gray-800">Outlined 1</option>
        <option className="bg-white dark:bg-gray-800">Outlined 2</option>
        <option className="bg-white dark:bg-gray-800">Outlined 3</option>
      </select>
    </div>
  );
};

// Material Design Select
export const MaterialSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">Material Select</label>
      <select className="w-full px-4 py-3 border-0 border-b-2 border-gray-300 dark:border-gray-600 rounded-none bg-transparent text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:border-blue-600 transition-all">
        <option>Material 1</option>
        <option>Material 2</option>
        <option>Material 3</option>
      </select>
    </div>
  );
};

// iOS Style Select
export const IOSSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">iOS Select</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-700 transition-all font-medium">
        <option>iOS Option 1</option>
        <option>iOS Option 2</option>
        <option>iOS Option 3</option>
      </select>
    </div>
  );
};

// Android Material Select
export const AndroidSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 uppercase tracking-wide">Android Select</label>
      <select className="w-full px-4 py-3 border-0 border-b-2 border-gray-400 dark:border-gray-500 rounded-none bg-transparent text-gray-900 dark:text-white cursor-pointer focus:outline-none focus:border-green-600 transition-all">
        <option>Android 1</option>
        <option>Android 2</option>
        <option>Android 3</option>
      </select>
    </div>
  );
};

// Custom Dropdown Select
export const DropdownSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Custom Dropdown</label>
      <div className="relative">
        <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10 transition-all">
          <option>Dropdown Option 1</option>
          <option>Dropdown Option 2</option>
          <option>Dropdown Option 3</option>
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>
  );
};

// Multi Select with Tags Visual
export const MultiSelect2: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Multi Select</label>
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">Tag 1 ×</span>
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">Tag 2 ×</span>
      </div>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
        <option>Add more...</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
  );
};

// Searchable Select Visual
export const SearchableSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Searchable Select</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
        <select className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
          <option>Search and select...</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>
  );
};

// Grouped Optgroup Select
export const GroupedSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Grouped Options</label>
      <select className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
        <optgroup label="🎨 Design">
          <option>Figma</option>
          <option>Sketch</option>
        </optgroup>
        <optgroup label="💻 Development">
          <option>VS Code</option>
          <option>WebStorm</option>
        </optgroup>
      </select>
    </div>
  );
};

// Icon Prefix Select
export const IconSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">With Icon</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
        <select className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
          <option>New York, USA</option>
          <option>London, UK</option>
          <option>Tokyo, Japan</option>
        </select>
      </div>
    </div>
  );
};

// Flag Country Select
export const FlagSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Country</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium">
        <option>🇺🇸 United States</option>
        <option>🇬🇧 United Kingdom</option>
        <option>🇨🇦 Canada</option>
        <option>🇦🇺 Australia</option>
      </select>
    </div>
  );
};

// Timezone Select
export const TimeZoneSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Timezone</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
        <option>(GMT-05:00) Eastern Time</option>
        <option>(GMT-08:00) Pacific Time</option>
        <option>(GMT+00:00) UTC</option>
        <option>(GMT+01:00) Central European Time</option>
      </select>
    </div>
  );
};

// Currency Select
export const CurrencySelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Currency</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400 font-semibold">$</div>
        <select className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
          <option>USD - US Dollar</option>
          <option>EUR - Euro</option>
          <option>GBP - British Pound</option>
          <option>JPY - Japanese Yen</option>
        </select>
      </div>
    </div>
  );
};

// Language Select
export const LanguageSelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Language</label>
      <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
        <option>🌍 English</option>
        <option>🌍 Español</option>
        <option>🌍 Français</option>
        <option>🌍 Deutsch</option>
        <option>🌍 中文</option>
      </select>
    </div>
  );
};

// Country Code Select
export const CountrySelect: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select Country</label>
      <select className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-sm">
        <option>🇺🇸 United States (+1)</option>
        <option>🇬🇧 United Kingdom (+44)</option>
        <option>🇨🇦 Canada (+1)</option>
        <option>🇦🇺 Australia (+61)</option>
        <option>🇩🇪 Germany (+49)</option>
      </select>
    </div>
  );
};

export const selectComponents = [
  {
    name: 'SelectInput',
    component: SelectInput,
    code: `<div className="component">
  {/* SelectInput */}
</div>`,
    preview: <SelectInput />,
  },
  {
    name: 'MultiSelect',
    component: MultiSelect,
    code: `<div className="component">
  {/* MultiSelect */}
</div>`,
    preview: <MultiSelect />,
  },
  {
    name: 'SelectWithIcon',
    component: SelectWithIcon,
    code: `<div className="component">
  {/* SelectWithIcon */}
</div>`,
    preview: <SelectWithIcon />,
  },
  {
    name: 'SwitchInput',
    component: SwitchInput,
    code: `<div className="component">
  {/* SwitchInput */}
</div>`,
    preview: <SwitchInput />,
  },
  {
    name: 'SwitchWithDescription',
    component: SwitchWithDescription,
    code: `<div className="component">
  {/* SwitchWithDescription */}
</div>`,
    preview: <SwitchWithDescription />,
  },
  {
    name: 'SmallSwitch',
    component: SmallSwitch,
    code: `<div className="component">
  {/* SmallSwitch */}
</div>`,
    preview: <SmallSwitch />,
  },
  {
    name: 'ModernSelect',
    component: ModernSelect,
    code: `<div className="component">
  {/* ModernSelect */}
</div>`,
    preview: <ModernSelect />,
  },
  {
    name: 'MinimalSelect',
    component: MinimalSelect,
    code: `<div className="component">
  {/* MinimalSelect */}
</div>`,
    preview: <MinimalSelect />,
  },
  {
    name: 'RoundedSelect',
    component: RoundedSelect,
    code: `<div className="component">
  {/* RoundedSelect */}
</div>`,
    preview: <RoundedSelect />,
  },
  {
    name: 'SquareSelect',
    component: SquareSelect,
    code: `<div className="component">
  {/* SquareSelect */}
</div>`,
    preview: <SquareSelect />,
  },
  {
    name: 'LargeSelect',
    component: LargeSelect,
    code: `<div className="component">
  {/* LargeSelect */}
</div>`,
    preview: <LargeSelect />,
  },
  {
    name: 'SmallSelect',
    component: SmallSelect,
    code: `<div className="component">
  {/* SmallSelect */}
</div>`,
    preview: <SmallSelect />,
  },
  {
    name: 'ColoredSelect',
    component: ColoredSelect,
    code: `<div className="component">
  {/* ColoredSelect */}
</div>`,
    preview: <ColoredSelect />,
  },
  {
    name: 'AnimatedSelect',
    component: AnimatedSelect,
    code: `<div className="component">
  {/* AnimatedSelect */}
</div>`,
    preview: <AnimatedSelect />,
  },
  {
    name: 'GradientSelect',
    component: GradientSelect,
    code: `<div className="component">
  {/* GradientSelect */}
</div>`,
    preview: <GradientSelect />,
  },
  {
    name: 'GlassSelect',
    component: GlassSelect,
    code: `<div className="component">
  {/* GlassSelect */}
</div>`,
    preview: <GlassSelect />,
  },
  {
    name: 'NeonSelect',
    component: NeonSelect,
    code: `<div className="component">
  {/* NeonSelect */}
</div>`,
    preview: <NeonSelect />,
  },
  {
    name: 'ThreeDSelect',
    component: ThreeDSelect,
    code: `<div className="component">
  {/* ThreeDSelect */}
</div>`,
    preview: <ThreeDSelect />,
  },
  {
    name: 'BoldSelect',
    component: BoldSelect,
    code: `<div className="component">
  {/* BoldSelect */}
</div>`,
    preview: <BoldSelect />,
  },
  {
    name: 'BorderedSelect',
    component: BorderedSelect,
    code: `<div className="component">
  {/* BorderedSelect */}
</div>`,
    preview: <BorderedSelect />,
  },
  {
    name: 'FilledSelect',
    component: FilledSelect,
    code: `<div className="component">
  {/* FilledSelect */}
</div>`,
    preview: <FilledSelect />,
  },
  {
    name: 'OutlinedSelect',
    component: OutlinedSelect,
    code: `<div className="component">
  {/* OutlinedSelect */}
</div>`,
    preview: <OutlinedSelect />,
  },
  {
    name: 'MaterialSelect',
    component: MaterialSelect,
    code: `<div className="component">
  {/* MaterialSelect */}
</div>`,
    preview: <MaterialSelect />,
  },
  {
    name: 'IOSSelect',
    component: IOSSelect,
    code: `<div className="component">
  {/* IOSSelect */}
</div>`,
    preview: <IOSSelect />,
  },
  {
    name: 'AndroidSelect',
    component: AndroidSelect,
    code: `<div className="component">
  {/* AndroidSelect */}
</div>`,
    preview: <AndroidSelect />,
  },
  {
    name: 'DropdownSelect',
    component: DropdownSelect,
    code: `<div className="component">
  {/* DropdownSelect */}
</div>`,
    preview: <DropdownSelect />,
  },
  {
    name: 'MultiSelect2',
    component: MultiSelect2,
    code: `<div className="component">
  {/* MultiSelect2 */}
</div>`,
    preview: <MultiSelect2 />,
  },
  {
    name: 'SearchableSelect',
    component: SearchableSelect,
    code: `<div className="component">
  {/* SearchableSelect */}
</div>`,
    preview: <SearchableSelect />,
  },
  {
    name: 'GroupedSelect',
    component: GroupedSelect,
    code: `<div className="component">
  {/* GroupedSelect */}
</div>`,
    preview: <GroupedSelect />,
  },
  {
    name: 'IconSelect',
    component: IconSelect,
    code: `<div className="component">
  {/* IconSelect */}
</div>`,
    preview: <IconSelect />,
  },
  {
    name: 'FlagSelect',
    component: FlagSelect,
    code: `<div className="component">
  {/* FlagSelect */}
</div>`,
    preview: <FlagSelect />,
  },
  {
    name: 'TimeZoneSelect',
    component: TimeZoneSelect,
    code: `<div className="component">
  {/* TimeZoneSelect */}
</div>`,
    preview: <TimeZoneSelect />,
  },
  {
    name: 'CurrencySelect',
    component: CurrencySelect,
    code: `<div className="component">
  {/* CurrencySelect */}
</div>`,
    preview: <CurrencySelect />,
  },
  {
    name: 'LanguageSelect',
    component: LanguageSelect,
    code: `<div className="component">
  {/* LanguageSelect */}
</div>`,
    preview: <LanguageSelect />,
  },
  {
    name: 'CountrySelect',
    component: CountrySelect,
    code: `<div className="component">
  {/* CountrySelect */}
</div>`,
    preview: <CountrySelect />,
  },
];
