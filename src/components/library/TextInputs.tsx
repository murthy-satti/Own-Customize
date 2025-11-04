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



// Outlined Input
export const OutlinedTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Outlined Input</label>
      <input type="text" placeholder="Type here..." className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-transparent dark:text-white transition-all" />
    </div>
  );
};

// Filled Background Input
export const FilledTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Filled Input</label>
      <input type="text" placeholder="Type here..." className="w-full px-4 py-3 border-0 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-gray-200 dark:focus:bg-gray-700 outline-none transition-all" />
    </div>
  );
};

// Underlined Input
export const UnderlinedTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Underlined Input</label>
      <input type="text" placeholder="Type here..." className="w-full px-2 py-3 border-0 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors" />
    </div>
  );
};

// Modern Gradient Border Input
export const ModernTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Modern Input</label>
      <input type="text" placeholder="Enter your text..." className="w-full px-5 py-3 border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 font-medium transition-all" />
    </div>
  );
};

// Fully Rounded Input
export const RoundedTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Rounded Input</label>
      <input type="text" placeholder="Fully rounded..." className="w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
    </div>
  );
};

// Square Sharp Corners Input
export const SquareTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Square Input</label>
      <input type="text" placeholder="Sharp corners..." className="w-full px-4 py-3 border-2 border-gray-400 dark:border-gray-500 rounded-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors" />
    </div>
  );
};

// Large Size Input
export const LargeTextInput2: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-base font-semibold text-gray-900 dark:text-white mb-3">Large Input</label>
      <input type="text" placeholder="Large text input..." className="w-full px-6 py-5 text-lg border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all font-medium" />
    </div>
  );
};

// Small Compact Input
export const SmallTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">Small Input</label>
      <input type="text" placeholder="Small size..." className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
    </div>
  );
};

// Colored Border Input
export const ColoredTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-purple-700 dark:text-purple-400 mb-2">Colored Input</label>
      <input type="text" placeholder="Purple theme..." className="w-full px-4 py-3 border-2 border-purple-400 dark:border-purple-500 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-900 dark:text-purple-100 placeholder-purple-400 dark:placeholder-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-600 transition-all" />
    </div>
  );
};

// Animated Focus Input
export const AnimatedTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Animated Input</label>
      <input type="text" placeholder="Focus for animation..." className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 focus:scale-105 transition-all duration-200 shadow-sm focus:shadow-lg" />
    </div>
  );
};

// Gradient Background Input
export const GradientTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Gradient Input</label>
      <input type="text" placeholder="Gradient background..." className="w-full px-5 py-3 border-0 rounded-lg bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-indigo-900/30 text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all" />
    </div>
  );
};

// Glass Morphism Input
export const GlassTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Glass Input</label>
      <input type="text" placeholder="Glass effect..." className="w-full px-4 py-3 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-gray-700/20 rounded-xl text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 dark:focus:ring-gray-700/40 transition-all shadow-xl" />
    </div>
  );
};

// Neon Glow Input
export const NeonTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-bold text-cyan-400 mb-2">Neon Input</label>
      <input type="text" placeholder="Neon glow..." className="w-full px-4 py-3 bg-gray-900 border-2 border-cyan-400 rounded-lg text-cyan-400 placeholder-cyan-600 font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:shadow-lg focus:shadow-cyan-400/50 transition-all" />
    </div>
  );
};

// 3D Shadow Input
export const ThreeDTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">3D Input</label>
      <input type="text" placeholder="3D shadow effect..." className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 shadow-[0_4px_0_0_rgb(59,130,246)] dark:shadow-[0_4px_0_0_rgb(37,99,235)] active:shadow-[0_2px_0_0_rgb(59,130,246)] active:translate-y-0.5 transition-all" />
    </div>
  );
};

// Bold Thick Border Input
export const BoldTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-base font-bold text-gray-900 dark:text-white mb-2">Bold Input</label>
      <input type="text" placeholder="Bold borders..." className="w-full px-4 py-3 border-4 border-gray-900 dark:border-white rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all" />
    </div>
  );
};

// Bordered with Icon Left
export const BorderedTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">With Icon</label>
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
        </div>
        <input type="text" placeholder="Username..." className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
      </div>
    </div>
  );
};

// Minimal Clean Input
export const MinimalTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Minimal</label>
      <input type="text" placeholder="Clean & minimal..." className="w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors" />
    </div>
  );
};

// Material Design Input
export const MaterialTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wide">Material</label>
      <input type="text" placeholder="Material design..." className="w-full px-4 py-3 border-0 border-b-2 border-gray-300 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 transition-colors" />
    </div>
  );
};

// iOS Style Input
export const IOSTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">iOS Style</label>
      <input type="text" placeholder="iOS input..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-700 transition-all font-medium" />
    </div>
  );
};

// Android Material Input
export const AndroidTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 uppercase">Android</label>
      <input type="text" placeholder="Android style..." className="w-full px-4 py-3 border-0 border-b-2 border-gray-400 dark:border-gray-500 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:border-green-600 transition-colors" />
    </div>
  );
};

// Icon Right Input
export const IconTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Search</label>
      <div className="relative">
        <input type="text" placeholder="Search..." className="w-full pl-4 pr-11 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>
      </div>
    </div>
  );
};

// Prefix Text Input
export const PrefixTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Website URL</label>
      <div className="flex">
        <span className="inline-flex items-center px-4 bg-gray-100 dark:bg-gray-700 border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-lg text-gray-600 dark:text-gray-400 text-sm">https://</span>
        <input type="text" placeholder="example.com" className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
      </div>
    </div>
  );
};

// Suffix Text Input
export const SuffixTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
      <div className="flex">
        <input type="number" placeholder="100" className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none dark:bg-gray-700 dark:text-white transition-all" />
        <span className="inline-flex items-center px-4 bg-gray-100 dark:bg-gray-700 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg text-gray-700 dark:text-gray-300 text-sm font-semibold">USD</span>
      </div>
    </div>
  );
};

// Validation Success Input
export const ValidationTextInput: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Valid Email</label>
      <div className="relative">
        <input type="email" value="user@example.com" readOnly className="w-full px-4 py-3 pr-11 border-2 border-green-400 dark:border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all" />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 dark:text-green-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
        </div>
      </div>
      <p className="mt-1 text-xs text-green-600 dark:text-green-400">✓ Email is valid</p>
    </div>
  );
};

export const textInputComponents = [
  {
    name: 'TextInput',
    component: TextInput,
    code: `<div className="component">
  {/* TextInput */}
</div>`,
    preview: <TextInput />,
  },
  {
    name: 'EmailInput',
    component: EmailInput,
    code: `<div className="component">
  {/* EmailInput */}
</div>`,
    preview: <EmailInput />,
  },
  {
    name: 'PasswordInput',
    component: PasswordInput,
    code: `<div className="component">
  {/* PasswordInput */}
</div>`,
    preview: <PasswordInput />,
  },
  {
    name: 'SearchInput',
    component: SearchInput,
    code: `<div className="component">
  {/* SearchInput */}
</div>`,
    preview: <SearchInput />,
  },
  {
    name: 'TextArea',
    component: TextArea,
    code: `<div className="component">
  {/* TextArea */}
</div>`,
    preview: <TextArea />,
  },
  {
    name: 'PurpleInput',
    component: PurpleInput,
    code: `<div className="component">
  {/* PurpleInput */}
</div>`,
    preview: <PurpleInput />,
  },
  {
    name: 'GreenInput',
    component: GreenInput,
    code: `<div className="component">
  {/* GreenInput */}
</div>`,
    preview: <GreenInput />,
  },
  {
    name: 'PinkInput',
    component: PinkInput,
    code: `<div className="component">
  {/* PinkInput */}
</div>`,
    preview: <PinkInput />,
  },
  {
    name: 'InputWithIconRight',
    component: InputWithIconRight,
    code: `<div className="component">
  {/* InputWithIconRight */}
</div>`,
    preview: <InputWithIconRight />,
  },
  {
    name: 'FloatingLabelInput',
    component: FloatingLabelInput,
    code: `<div className="component">
  {/* FloatingLabelInput */}
</div>`,
    preview: <FloatingLabelInput />,
  },
  {
    name: 'InputWithHelper',
    component: InputWithHelper,
    code: `<div className="component">
  {/* InputWithHelper */}
</div>`,
    preview: <InputWithHelper />,
  },
  {
    name: 'ErrorInput',
    component: ErrorInput,
    code: `<div className="component">
  {/* ErrorInput */}
</div>`,
    preview: <ErrorInput />,
  },
  {
    name: 'LargeInput',
    component: LargeInput,
    code: `<div className="component">
  {/* LargeInput */}
</div>`,
    preview: <LargeInput />,
  },
  {
    name: 'InputWithPrefix',
    component: InputWithPrefix,
    code: `<div className="component">
  {/* InputWithPrefix */}
</div>`,
    preview: <InputWithPrefix />,
  },
  {
    name: 'InputWithSuffix',
    component: InputWithSuffix,
    code: `<div className="component">
  {/* InputWithSuffix */}
</div>`,
    preview: <InputWithSuffix />,
  },
  {
    name: 'DarkInput',
    component: DarkInput,
    code: `<div className="component">
  {/* DarkInput */}
</div>`,
    preview: <DarkInput />,
  },
  {
    name: 'OutlinedTextInput',
    component: OutlinedTextInput,
    code: `<div className="component">
  {/* OutlinedTextInput */}
</div>`,
    preview: <OutlinedTextInput />,
  },
  {
    name: 'FilledTextInput',
    component: FilledTextInput,
    code: `<div className="component">
  {/* FilledTextInput */}
</div>`,
    preview: <FilledTextInput />,
  },
  {
    name: 'UnderlinedTextInput',
    component: UnderlinedTextInput,
    code: `<div className="component">
  {/* UnderlinedTextInput */}
</div>`,
    preview: <UnderlinedTextInput />,
  },
  {
    name: 'ModernTextInput',
    component: ModernTextInput,
    code: `<div className="component">
  {/* ModernTextInput */}
</div>`,
    preview: <ModernTextInput />,
  },
  {
    name: 'RoundedTextInput',
    component: RoundedTextInput,
    code: `<div className="component">
  {/* RoundedTextInput */}
</div>`,
    preview: <RoundedTextInput />,
  },
  {
    name: 'SquareTextInput',
    component: SquareTextInput,
    code: `<div className="component">
  {/* SquareTextInput */}
</div>`,
    preview: <SquareTextInput />,
  },
  {
    name: 'LargeTextInput2',
    component: LargeTextInput2,
    code: `<div className="component">
  {/* LargeTextInput2 */}
</div>`,
    preview: <LargeTextInput2 />,
  },
  {
    name: 'SmallTextInput',
    component: SmallTextInput,
    code: `<div className="component">
  {/* SmallTextInput */}
</div>`,
    preview: <SmallTextInput />,
  },
  {
    name: 'ColoredTextInput',
    component: ColoredTextInput,
    code: `<div className="component">
  {/* ColoredTextInput */}
</div>`,
    preview: <ColoredTextInput />,
  },
  {
    name: 'AnimatedTextInput',
    component: AnimatedTextInput,
    code: `<div className="component">
  {/* AnimatedTextInput */}
</div>`,
    preview: <AnimatedTextInput />,
  },
  {
    name: 'GradientTextInput',
    component: GradientTextInput,
    code: `<div className="component">
  {/* GradientTextInput */}
</div>`,
    preview: <GradientTextInput />,
  },
  {
    name: 'GlassTextInput',
    component: GlassTextInput,
    code: `<div className="component">
  {/* GlassTextInput */}
</div>`,
    preview: <GlassTextInput />,
  },
  {
    name: 'NeonTextInput',
    component: NeonTextInput,
    code: `<div className="component">
  {/* NeonTextInput */}
</div>`,
    preview: <NeonTextInput />,
  },
  {
    name: 'ThreeDTextInput',
    component: ThreeDTextInput,
    code: `<div className="component">
  {/* ThreeDTextInput */}
</div>`,
    preview: <ThreeDTextInput />,
  },
  {
    name: 'BoldTextInput',
    component: BoldTextInput,
    code: `<div className="component">
  {/* BoldTextInput */}
</div>`,
    preview: <BoldTextInput />,
  },
  {
    name: 'BorderedTextInput',
    component: BorderedTextInput,
    code: `<div className="component">
  {/* BorderedTextInput */}
</div>`,
    preview: <BorderedTextInput />,
  },
  {
    name: 'MinimalTextInput',
    component: MinimalTextInput,
    code: `<div className="component">
  {/* MinimalTextInput */}
</div>`,
    preview: <MinimalTextInput />,
  },
  {
    name: 'MaterialTextInput',
    component: MaterialTextInput,
    code: `<div className="component">
  {/* MaterialTextInput */}
</div>`,
    preview: <MaterialTextInput />,
  },
  {
    name: 'IOSTextInput',
    component: IOSTextInput,
    code: `<div className="component">
  {/* IOSTextInput */}
</div>`,
    preview: <IOSTextInput />,
  },
  {
    name: 'AndroidTextInput',
    component: AndroidTextInput,
    code: `<div className="component">
  {/* AndroidTextInput */}
</div>`,
    preview: <AndroidTextInput />,
  },
  {
    name: 'IconTextInput',
    component: IconTextInput,
    code: `<div className="component">
  {/* IconTextInput */}
</div>`,
    preview: <IconTextInput />,
  },
  {
    name: 'PrefixTextInput',
    component: PrefixTextInput,
    code: `<div className="component">
  {/* PrefixTextInput */}
</div>`,
    preview: <PrefixTextInput />,
  },
  {
    name: 'SuffixTextInput',
    component: SuffixTextInput,
    code: `<div className="component">
  {/* SuffixTextInput */}
</div>`,
    preview: <SuffixTextInput />,
  },
  {
    name: 'ValidationTextInput',
    component: ValidationTextInput,
    code: `<div className="component">
  {/* ValidationTextInput */}
</div>`,
    preview: <ValidationTextInput />,
  },
];
