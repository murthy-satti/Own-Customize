import React, { useState } from 'react';
import { allComponents, componentCategories } from '../components/library';

const Components: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Buttons');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Sidebar - Categories */}
      <div className="w-64 bg-white shadow-lg border-r border-slate-200 overflow-y-auto fixed left-0 top-16 bottom-0">
        <div className="p-6">
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">Components</h2>
          <nav className="space-y-1">
            {componentCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setExpandedIndex(null);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                    : 'text-slate-700 hover:bg-slate-50 border-l-4 border-transparent'
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">{selectedCategory}</h1>
            <p className="text-lg text-slate-600">
              Browse {selectedCategory.toLowerCase()} components. Click the arrow to view and copy code.
            </p>
          </div>

          {/* Components Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {allComponents[selectedCategory as keyof typeof allComponents].map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                {/* Preview Section */}
                <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200 flex items-center justify-center min-h-[200px]">
                  {component.preview}
                </div>

                {/* Info Section */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-slate-800">{component.name}</h3>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                      title={expandedIndex === index ? "Hide code" : "Show code"}
                    >
                      <svg
                        className={`w-5 h-5 text-slate-600 transition-transform ${expandedIndex === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expandable Code Section */}
                  {expandedIndex === index && (
                    <div className="mt-4 animate-fadeIn">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-600">Code</span>
                        <button
                          onClick={() => handleCopyCode(component.code, index)}
                          className={`px-3 py-1 text-sm rounded-lg font-medium transition-colors ${
                            copiedIndex === index
                              ? 'bg-green-600 text-white'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
                        >
                          {copiedIndex === index ? '✓ Copied!' : 'Copy Code'}
                        </button>
                      </div>
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto max-h-64 overflow-y-auto">
                        <pre className="text-xs text-slate-100">
                          <code>{component.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}
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
