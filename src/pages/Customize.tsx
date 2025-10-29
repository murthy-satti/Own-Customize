import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { allComponents, componentCategories } from '../components/library';

interface PageComponent {
  id: string;
  type: string;
  category: string;
  code: string;
  element: React.ReactNode;
  customProps: {
    bgColor?: string;
    textColor?: string;
    borderColor?: string;
    text?: string;
  };
}

interface SortableItemProps {
  id: string;
  component: PageComponent;
  onRemove: (id: string) => void;
  onSelect: (id: string) => void;
  isSelected: boolean;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, component, onRemove, onSelect, isSelected }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => onSelect(id)}
      className={`relative group bg-white rounded-lg p-4 mb-3 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'border-2 border-gray-200 hover:border-blue-300'
      }`}
    >
      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute left-2 top-2 cursor-grab active:cursor-grabbing bg-gray-100 hover:bg-gray-200 rounded p-2 transition-colors z-10"
      >
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </div>

      {/* Remove Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        className="absolute right-2 top-2 bg-red-100 hover:bg-red-200 text-red-600 rounded p-2 transition-colors z-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Component Preview */}
      <div className="pt-8 flex items-center justify-center">
        {component.element}
      </div>
    </div>
  );
};

const Customize: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Buttons');
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPageComponents((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const addComponentToPage = (component: any, category: string) => {
    const newComponent: PageComponent = {
      id: `${category}-${component.name}-${Date.now()}`,
      type: component.name,
      category,
      code: component.code,
      element: component.preview,
      customProps: {},
    };
    setPageComponents([...pageComponents, newComponent]);
  };

  const removeComponent = (id: string) => {
    setPageComponents(pageComponents.filter((comp) => comp.id !== id));
    if (selectedComponentId === id) {
      setSelectedComponentId(null);
    }
  };

  const updateComponentProps = (id: string, props: Partial<PageComponent['customProps']>) => {
    setPageComponents(pageComponents.map(comp =>
      comp.id === id
        ? { ...comp, customProps: { ...comp.customProps, ...props } }
        : comp
    ));
  };

  const selectedComponent = pageComponents.find(c => c.id === selectedComponentId);

  const generateFullPageCode = () => {
    if (pageComponents.length === 0) {
      return '// No components added yet. Add components from the library to generate code.';
    }

    const componentCodes = pageComponents.map((comp) => comp.code).join('\n\n');

    return `export default function MyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
${componentCodes.split('\n').map(line => '        ' + line).join('\n')}
      </div>
    </div>
  );
}`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateFullPageCode());
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Sidebar - Component Library */}
      <div className="w-96 bg-white shadow-lg overflow-y-auto border-r border-slate-200">
        <div className="p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Component Library</h2>

          {/* Category Tabs */}
          <div className="flex flex-col gap-2">
            {componentCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-lg font-medium text-left transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Component List with Previews */}
        <div className="p-4 space-y-3 bg-slate-50">
          {allComponents[selectedCategory as keyof typeof allComponents].map((component, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all bg-white"
            >
              <div className="mb-3 flex items-center justify-center min-h-[80px] bg-slate-50 rounded-lg p-3">
                {component.preview}
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-sm font-semibold text-slate-700">{component.name}</span>
                <button
                  onClick={() => addComponentToPage(component, selectedCategory)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center - Canvas Area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Canvas <span className="text-lg font-normal text-slate-500">({pageComponents.length} components)</span>
              </h2>
              <div className="flex gap-1 items-center bg-slate-100 rounded-lg p-1.5 shadow-sm border border-slate-200">
                {/* Preview Icon */}
                <button
                  onClick={() => {
                    setShowPreview(!showPreview);
                    setShowCode(false);
                  }}
                  className={`p-2 rounded-md transition-colors ${
                    showPreview
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Preview"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                {/* Code Icon */}
                <button
                  onClick={() => {
                    setShowCode(!showCode);
                    setShowPreview(false);
                  }}
                  className={`p-2 rounded-md transition-colors ${
                    showCode
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-gray-200'
                  }`}
                  title="View Code"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </button>

                {/* Copy Icon */}
                <button
                  onClick={handleCopyCode}
                  className="p-2 text-gray-600 hover:bg-gray-200 rounded-md transition-colors"
                  title="Copy Code"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {pageComponents.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-500 text-lg font-medium">
                  No components yet
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Add components from the library to start building
                </p>
              </div>
            ) : (
              <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={pageComponents.map((c) => c.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {pageComponents.map((component) => (
                    <SortableItem
                      key={component.id}
                      id={component.id}
                      component={component}
                      onRemove={removeComponent}
                      onSelect={setSelectedComponentId}
                      isSelected={selectedComponentId === component.id}
                    />
                  ))}
                </SortableContext>
              </DndContext>
            )}
          </div>

          {/* Code Preview */}
          {showCode && (
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Generated Code</h2>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{generateFullPageCode()}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Preview Modal */}
          {showPreview && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
                {/* Preview Header */}
                <div className="flex justify-between items-center p-4 border-b bg-gray-50">
                  <h2 className="text-xl font-bold text-gray-800">Live Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Preview Content */}
                <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
                  <div className="min-h-screen bg-gray-50 py-8">
                    <div className="max-w-7xl mx-auto px-4 space-y-6">
                      {pageComponents.map((component) => (
                        <div key={component.id}>
                          {component.element}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Customization Panel */}
      <div className="w-96 bg-white shadow-lg overflow-y-auto border-l border-slate-200">
        <div className="p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Customize</h2>

          {selectedComponent ? (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-900">Selected Component</p>
                <p className="text-lg font-bold text-blue-700">{selectedComponent.type}</p>
              </div>

              {/* Background Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedComponent.customProps.bgColor || '#ffffff'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { bgColor: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={selectedComponent.customProps.bgColor || '#ffffff'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { bgColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Text Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedComponent.customProps.textColor || '#000000'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { textColor: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={selectedComponent.customProps.textColor || '#000000'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { textColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="#000000"
                  />
                </div>
              </div>

              {/* Border Color */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Border Color
                </label>
                <div className="flex gap-2">
                  <input
                    type="color"
                    value={selectedComponent.customProps.borderColor || '#e5e7eb'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { borderColor: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={selectedComponent.customProps.borderColor || '#e5e7eb'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { borderColor: e.target.value })}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="#e5e7eb"
                  />
                </div>
              </div>

              {/* Custom Text */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Text
                </label>
                <textarea
                  value={selectedComponent.customProps.text || ''}
                  onChange={(e) => updateComponentProps(selectedComponent.id, { text: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  rows={3}
                  placeholder="Enter custom text..."
                />
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-gray-500">
                  Note: Color and text customization will be reflected in the exported code.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              <p className="text-gray-500 font-medium">No component selected</p>
              <p className="text-gray-400 text-sm mt-2">
                Click on a component in the canvas to customize it
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;
