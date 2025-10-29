import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { allComponents, componentCategories } from '../components/library';

const Components: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Buttons');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar - Categories */}
      <div className="hidden md:block md:w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto fixed left-0 top-16 bottom-0">
        <div className="p-6">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Components</h2>
          <nav className="space-y-1">
            {componentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Content Area */}
      <div className="md:ml-64 flex-1 p-4 sm:p-6 lg:p-8 max-w-full overflow-x-hidden">
        <div className="w-full max-w-full">
          {/* Mobile Category Selector */}
          <div className="md:hidden mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 font-medium"
            >
              {componentCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 break-words">{selectedCategory}</h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Click the copy icon to get the code for any component
            </p>
          </div>

          {/* Components Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
            {allComponents[selectedCategory as keyof typeof allComponents].map((component, index) => (
              <div
                key={index}
                className={`break-inside-avoid bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all group max-w-full ${
                  selectedCategory === 'Tables' ? 'overflow-x-auto' : 'overflow-hidden'
                }`}
              >
                {/* Component Preview */}
                <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${
                  selectedCategory === 'Tables' ? 'overflow-x-auto' : 'overflow-hidden'
                } ${
                  selectedCategory === 'Headers' || selectedCategory === 'Footers'
                    ? 'p-2'
                    : 'p-3'
                }`}>
                  {/* Copy Icon */}
                  <button
                    onClick={() => handleCopyCode(component.code, index)}
                    className={`absolute top-2 right-2 p-2 rounded-lg transition-all z-10 ${
                      copiedIndex === index
                        ? 'bg-green-500 text-white shadow-lg scale-110'
                        : 'bg-white/90 text-gray-700 hover:bg-white shadow-md opacity-0 group-hover:opacity-100'
                    }`}
                    title="Copy code"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  {/* Component Display */}
                  <div className={`${
                    selectedCategory === 'Headers' || selectedCategory === 'Footers'
                      ? 'scale-50 w-full origin-top'
                      : selectedCategory === 'Tables'
                      ? 'w-full min-w-fit'
                      : ''
                  }`}>
                    {component.preview}
                  </div>
                </div>

                {/* Component Name */}
                <div className="p-4 bg-white">
                  <h3 className="text-sm font-semibold text-gray-800 text-center">
                    {component.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
