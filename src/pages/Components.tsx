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
      <div className="w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto fixed left-0 top-16 bottom-0">
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
      <div className="ml-64 flex-1 p-8">
        <div className="w-full">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedCategory}</h1>
            <p className="text-gray-600">
              Click the copy icon to get the code for any component
            </p>
          </div>

          {/* Components Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {allComponents[selectedCategory as keyof typeof allComponents].map((component, index) => (
              <div
                key={index}
                className="break-inside-avoid bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all group"
              >
                {/* Component Preview */}
                <div className={`relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${
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
                      ? 'scale-50 w-full'
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
