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
    // Layout properties
    width?: string;
    height?: string;
    maxWidth?: string;
    minHeight?: string;
    // Spacing properties
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingBottom?: string;
    paddingLeft?: string;
    // Alignment
    alignment?: 'left' | 'center' | 'right' | 'justify';
    // Display
    display?: string;
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
    zIndex: isDragging ? 50 : 'auto',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group bg-white dark:bg-slate-900 rounded-lg p-4 cursor-pointer transition-all w-full ${
        isSelected ? 'ring-2 ring-blue-500 shadow-lg' : 'border-2 border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500'
      }`}
    >
      {/* Drag Handle */}
      <button
        {...attributes}
        {...listeners}
        className="absolute left-2 top-2 cursor-grab active:cursor-grabbing bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 rounded p-2.5 transition-colors z-20 touch-none"
        title="Drag to reorder"
        type="button"
      >
        <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
        </svg>
      </button>

      {/* Remove Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
        className="absolute right-2 top-2 bg-red-100 dark:bg-red-900 hover:bg-red-200 dark:hover:bg-red-800 text-red-600 dark:text-red-300 rounded p-2.5 transition-colors z-20"
        title="Remove component"
        type="button"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Component Preview - Wrapper handles spacing & layout */}
      <div
        className="pt-10"
        onClick={() => onSelect(id)}
        style={{
          // Layout properties on wrapper
          width: component.customProps.width || '100%',
          display: component.customProps.display || 'block',
          marginInline: component.customProps.alignment === 'center' ? 'auto' :
                       component.customProps.alignment === 'right' ? '0 0 0 auto' :
                       component.customProps.alignment === 'left' ? '0 auto 0 0' : 'initial',
          // Margins on wrapper - creates space BETWEEN components
          marginTop: component.customProps.marginTop || '0',
          marginRight: component.customProps.marginRight || '0',
          marginBottom: component.customProps.marginBottom || '0',
          marginLeft: component.customProps.marginLeft || '0',
        }}
      >
        {React.isValidElement(component.element) ? (() => {
            const elem = component.element as React.ReactElement<any>;
            const existingStyle = typeof elem.props?.style === 'object' ? elem.props.style : {};

            return React.cloneElement(elem, {
              style: {
                ...existingStyle,
                // Colors
                backgroundColor: component.customProps.bgColor || existingStyle?.backgroundColor,
                color: component.customProps.textColor || existingStyle?.color,
                borderColor: component.customProps.borderColor || existingStyle?.borderColor,
                // Dimensions on component
                width: '100%',
                height: component.customProps.height || existingStyle?.height,
                maxWidth: component.customProps.maxWidth && component.customProps.maxWidth !== 'none' ? component.customProps.maxWidth : existingStyle?.maxWidth,
                minHeight: component.customProps.minHeight && component.customProps.minHeight !== 'auto' ? component.customProps.minHeight : existingStyle?.minHeight,
                // Padding on component - creates space INSIDE component
                paddingTop: component.customProps.paddingTop && component.customProps.paddingTop !== '0' ? component.customProps.paddingTop : existingStyle?.paddingTop,
                paddingRight: component.customProps.paddingRight && component.customProps.paddingRight !== '0' ? component.customProps.paddingRight : existingStyle?.paddingRight,
                paddingBottom: component.customProps.paddingBottom && component.customProps.paddingBottom !== '0' ? component.customProps.paddingBottom : existingStyle?.paddingBottom,
                paddingLeft: component.customProps.paddingLeft && component.customProps.paddingLeft !== '0' ? component.customProps.paddingLeft : existingStyle?.paddingLeft,
              }
            });
          })() : component.element}
      </div>
    </div>
  );
};

const Customize: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [pageComponents, setPageComponents] = useState<PageComponent[]>([]);
  const [selectedComponentId, setSelectedComponentId] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [useSemanticHTML, setUseSemanticHTML] = useState(false);

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

  // Helper function to get semantic HTML tag for a component category
  const getSemanticTag = (category: string): string => {
    const semanticMapping: { [key: string]: string } = {
      'Headers': 'header',
      'Footers': 'footer',
      'Navigation': 'nav',
      'Cards': 'article',
      'Data Display': 'section',
      'Tables': 'section',
      'Forms': 'form',
    };
    return semanticMapping[category] || 'div';
  };

  // Helper function to generate inline styles from custom props
  const generateInlineStyles = (props: PageComponent['customProps']): string => {
    const styles: string[] = [];

    // Colors
    if (props.bgColor) styles.push(`backgroundColor: '${props.bgColor}'`);
    if (props.textColor) styles.push(`color: '${props.textColor}'`);
    if (props.borderColor) styles.push(`borderColor: '${props.borderColor}'`);

    // Dimensions
    if (props.width) styles.push(`width: '${props.width}'`);
    if (props.height) styles.push(`height: '${props.height}'`);
    if (props.maxWidth && props.maxWidth !== 'none') styles.push(`maxWidth: '${props.maxWidth}'`);
    if (props.minHeight && props.minHeight !== 'auto') styles.push(`minHeight: '${props.minHeight}'`);

    // Margins
    if (props.marginTop && props.marginTop !== '0') styles.push(`marginTop: '${props.marginTop}'`);
    if (props.marginRight && props.marginRight !== '0') styles.push(`marginRight: '${props.marginRight}'`);
    if (props.marginBottom && props.marginBottom !== '0') styles.push(`marginBottom: '${props.marginBottom}'`);
    if (props.marginLeft && props.marginLeft !== '0') styles.push(`marginLeft: '${props.marginLeft}'`);

    // Padding
    if (props.paddingTop && props.paddingTop !== '0') styles.push(`paddingTop: '${props.paddingTop}'`);
    if (props.paddingRight && props.paddingRight !== '0') styles.push(`paddingRight: '${props.paddingRight}'`);
    if (props.paddingBottom && props.paddingBottom !== '0') styles.push(`paddingBottom: '${props.paddingBottom}'`);
    if (props.paddingLeft && props.paddingLeft !== '0') styles.push(`paddingLeft: '${props.paddingLeft}'`);

    // Alignment
    if (props.alignment === 'center') styles.push(`marginInline: 'auto'`);
    else if (props.alignment === 'right') styles.push(`marginInline: '0 0 0 auto'`);
    else if (props.alignment === 'left') styles.push(`marginInline: '0 auto 0 0'`);

    if (props.display) styles.push(`display: '${props.display}'`);

    return styles.length > 0 ? ` style={{ ${styles.join(', ')} }}` : '';
  };

  const generateFullPageCode = () => {
    if (pageComponents.length === 0) {
      return '// No components added yet. Add components from the library to generate code.';
    }

    const componentCodes = pageComponents.map((comp) => {
      const styleAttr = generateInlineStyles(comp.customProps);

      // Parse the component code to add inline styles to the root element
      let componentCode = comp.code.trim();

      if (styleAttr) {
        // Find the first > after the opening tag and insert the style attribute before it
        const firstTagEnd = componentCode.indexOf('>');
        if (firstTagEnd !== -1) {
          // Check if there's already a style attribute
          const hasStyle = componentCode.substring(0, firstTagEnd).includes('style=');
          if (hasStyle) {
            // Merge with existing styles - replace the style attribute
            componentCode = componentCode.replace(/style=\{[^}]*\}/, styleAttr.trim());
          } else {
            // Insert the style attribute before the closing >
            componentCode = componentCode.substring(0, firstTagEnd) + styleAttr + componentCode.substring(firstTagEnd);
          }
        }
      }

      const indentedCode = componentCode.split('\n').map(line => '  ' + line).join('\n');

      // Wrapper for alignment
      const wrapperStyle: string[] = [];
      if (comp.customProps.width) wrapperStyle.push(`width: '${comp.customProps.width}'`);
      if (comp.customProps.alignment === 'center') wrapperStyle.push(`marginInline: 'auto'`);
      else if (comp.customProps.alignment === 'right') wrapperStyle.push(`marginInline: '0 0 0 auto'`);
      else if (comp.customProps.alignment === 'left') wrapperStyle.push(`marginInline: '0 auto 0 0'`);

      const wrapperStyleAttr = wrapperStyle.length > 0 ? ` style={{ ${wrapperStyle.join(', ')} }}` : '';

      if (useSemanticHTML) {
        const tag = getSemanticTag(comp.category);
        return `<${tag}${wrapperStyleAttr}>\n${indentedCode}\n</${tag}>`;
      }
      return `<div${wrapperStyleAttr}>\n${indentedCode}\n</div>`;
    }).join('\n\n');

    const containerTag = useSemanticHTML ? 'main' : 'div';

    return `<${containerTag} className="min-h-screen bg-gray-50 dark:bg-slate-800">
  <div className="w-full space-y-0">
${componentCodes.split('\n').map(line => '    ' + line).join('\n')}
  </div>
</${containerTag}>`;
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generateFullPageCode());
    alert('Code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-800 flex flex-col lg:flex-row overflow-x-hidden">
      {/* Left Sidebar - Component Library */}
      <div className="w-full lg:w-80 xl:w-96 bg-white dark:bg-slate-900 shadow-lg overflow-y-auto border-b lg:border-r lg:border-b-0 border-slate-200 dark:border-slate-700 max-h-96 lg:max-h-screen">
        <div className="p-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 px-2">Component Library</h2>

          {/* Categories with Expandable Components */}
          <div className="space-y-2">
            {componentCategories.map((category) => (
              <div key={category}>
                {/* Category Button */}
                <button
                  onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                  className={`w-full px-4 py-2.5 rounded-lg font-medium text-left transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600'
                  }`}
                >
                  {category}
                </button>

                {/* Component List - Shows when category is selected */}
                {selectedCategory === category && (
                  <div className="mt-2 mb-2 space-y-3 pl-2">
                    {allComponents[selectedCategory as keyof typeof allComponents].map((component, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 dark:border-slate-700 rounded-lg p-3 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md transition-all bg-white dark:bg-slate-800"
                      >
                        <div className={`mb-3 flex items-center justify-center bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden ${
                          selectedCategory === 'Headers' || selectedCategory === 'Footers'
                            ? 'min-h-[100px] p-1'
                            : 'min-h-[80px] p-3'
                        }`}>
                          <div className={`${
                            selectedCategory === 'Headers' || selectedCategory === 'Footers'
                              ? 'scale-[0.35] w-full'
                              : ''
                          }`}>
                            {component.preview}
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-100 dark:border-slate-600">
                          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{component.name}</span>
                          <button
                            onClick={() => addComponentToPage(component, selectedCategory)}
                            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-all font-medium"
                          >
                            + Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Center - Canvas Area */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto overflow-x-auto">
        <div className="w-full min-w-[1024px]">
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-4 sm:p-6 mb-6 w-full">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 break-words">
                  Canvas <span className="text-base sm:text-lg font-normal text-slate-500 dark:text-slate-400">({pageComponents.length})</span>
                </h2>

                {/* Semantic HTML Toggle */}
                <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg px-2 sm:px-3 py-1.5">
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium whitespace-nowrap">Semantic</span>
                  <button
                    onClick={() => setUseSemanticHTML(!useSemanticHTML)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      useSemanticHTML ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                    title={useSemanticHTML ? 'Using semantic tags (header, footer, nav, etc.)' : 'Using div tags'}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        useSemanticHTML ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex gap-1 items-center bg-slate-100 dark:bg-slate-800 rounded-lg p-1.5 shadow-sm border border-slate-200 dark:border-slate-600">
                {/* Preview Icon */}
                <button
                  onClick={() => {
                    setShowPreview(!showPreview);
                    setShowCode(false);
                  }}
                  className={`p-2 rounded-md transition-colors ${
                    showPreview
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
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
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700'
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
                  className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-md transition-colors"
                  title="Copy Code"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {pageComponents.length === 0 ? (
              <div className="text-center py-20 border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg bg-gray-50 dark:bg-slate-800">
                <svg className="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                  No components yet
                </p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                  Add components from the library to start building
                </p>
              </div>
            ) : (
              <div className="w-full">
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={pageComponents.map((c) => c.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <div className="space-y-3 w-full">
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
                    </div>
                  </SortableContext>
                </DndContext>
              </div>
            )}
          </div>

          {/* Code Preview */}
          {showCode && (
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-md p-4 sm:p-6 w-full">
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Generated Code</h2>
              <div className="bg-gray-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto w-full">
                <pre className="text-xs sm:text-sm text-gray-100 whitespace-pre-wrap break-words">
                  <code>{generateFullPageCode()}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Preview Modal */}
          {showPreview && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl w-full max-w-[98vw] h-[96vh] flex flex-col overflow-hidden">
                {/* Preview Header */}
                <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-gray-50 dark:bg-slate-800 dark:border-slate-700 flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">Live Preview</h2>
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-slate-700 px-2 sm:px-3 py-1 rounded-full">Desktop View</span>
                  </div>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Preview Content */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-900">
                  <div className="w-full space-y-0 p-4">
                    {pageComponents.map((component) => (
                      <div
                        key={component.id}
                        className="relative"
                        style={{
                          // Layout properties on wrapper
                          width: component.customProps.width || '100%',
                          display: component.customProps.display || 'block',
                          marginInline: component.customProps.alignment === 'center' ? 'auto' :
                                       component.customProps.alignment === 'right' ? '0 0 0 auto' :
                                       component.customProps.alignment === 'left' ? '0 auto 0 0' : 'initial',
                          // Margins on wrapper - creates space BETWEEN components (visible!)
                          marginTop: component.customProps.marginTop || '0',
                          marginRight: component.customProps.marginRight || '0',
                          marginBottom: component.customProps.marginBottom || '0',
                          marginLeft: component.customProps.marginLeft || '0',
                          // Visual indicator
                          outline: '1px dashed rgba(59, 130, 246, 0.5)',
                          outlineOffset: '2px',
                        }}
                      >
                        {React.isValidElement(component.element) ? (() => {
                            const elem = component.element as React.ReactElement<any>;
                            const existingStyle = typeof elem.props?.style === 'object' ? elem.props.style : {};

                            return React.cloneElement(elem, {
                              style: {
                                ...existingStyle,
                                // Colors
                                backgroundColor: component.customProps.bgColor || existingStyle?.backgroundColor,
                                color: component.customProps.textColor || existingStyle?.color,
                                borderColor: component.customProps.borderColor || existingStyle?.borderColor,
                                // Dimensions on component
                                width: '100%',
                                height: component.customProps.height || existingStyle?.height,
                                maxWidth: component.customProps.maxWidth && component.customProps.maxWidth !== 'none' ? component.customProps.maxWidth : existingStyle?.maxWidth,
                                minHeight: component.customProps.minHeight && component.customProps.minHeight !== 'auto' ? component.customProps.minHeight : existingStyle?.minHeight,
                                // Padding on component - creates space INSIDE component (visible!)
                                paddingTop: component.customProps.paddingTop && component.customProps.paddingTop !== '0' ? component.customProps.paddingTop : existingStyle?.paddingTop,
                                paddingRight: component.customProps.paddingRight && component.customProps.paddingRight !== '0' ? component.customProps.paddingRight : existingStyle?.paddingRight,
                                paddingBottom: component.customProps.paddingBottom && component.customProps.paddingBottom !== '0' ? component.customProps.paddingBottom : existingStyle?.paddingBottom,
                                paddingLeft: component.customProps.paddingLeft && component.customProps.paddingLeft !== '0' ? component.customProps.paddingLeft : existingStyle?.paddingLeft,
                              }
                            });
                          })() : component.element}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Sidebar - Customization Panel */}
      <div className="w-full lg:w-80 xl:w-96 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 shadow-lg overflow-y-auto border-t lg:border-l lg:border-t-0 border-slate-200 dark:border-slate-700 max-h-screen">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Customize</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Style your component</p>
            </div>
          </div>

          {selectedComponent ? (
            <div className="space-y-5">
              {/* Selected Component Info */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs font-medium opacity-90">Selected Component</p>
                </div>
                <p className="text-lg font-bold">{selectedComponent.type}</p>
              </div>

              {/* Background Color */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Background Color
                </label>
                <div className="flex gap-3">
                  <div className="relative">
                    <input
                      type="color"
                      value={selectedComponent.customProps.bgColor || '#ffffff'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { bgColor: e.target.value })}
                      className="w-14 h-14 rounded-xl border-2 border-slate-300 dark:border-slate-600 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    />
                  </div>
                  <input
                    type="text"
                    value={selectedComponent.customProps.bgColor || '#ffffff'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { bgColor: e.target.value })}
                    className="flex-1 px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none font-mono text-sm transition-all bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                    placeholder="#ffffff"
                  />
                </div>
              </div>

              {/* Text Color */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Text Color
                </label>
                <div className="flex gap-3">
                  <div className="relative">
                    <input
                      type="color"
                      value={selectedComponent.customProps.textColor || '#000000'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { textColor: e.target.value })}
                      className="w-14 h-14 rounded-xl border-2 border-slate-300 dark:border-slate-600 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    />
                  </div>
                  <input
                    type="text"
                    value={selectedComponent.customProps.textColor || '#000000'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { textColor: e.target.value })}
                    className="flex-1 px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none font-mono text-sm transition-all bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                    placeholder="#000000"
                  />
                </div>
              </div>

              {/* Border Color */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Border Color
                </label>
                <div className="flex gap-3">
                  <div className="relative">
                    <input
                      type="color"
                      value={selectedComponent.customProps.borderColor || '#e5e7eb'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { borderColor: e.target.value })}
                      className="w-14 h-14 rounded-xl border-2 border-slate-300 dark:border-slate-600 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    />
                  </div>
                  <input
                    type="text"
                    value={selectedComponent.customProps.borderColor || '#e5e7eb'}
                    onChange={(e) => updateComponentProps(selectedComponent.id, { borderColor: e.target.value })}
                    className="flex-1 px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none font-mono text-sm transition-all bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                    placeholder="#e5e7eb"
                  />
                </div>
              </div>

              {/* Custom Text */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Custom Text
                </label>
                <textarea
                  value={selectedComponent.customProps.text || ''}
                  onChange={(e) => updateComponentProps(selectedComponent.id, { text: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none transition-all bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                  rows={4}
                  placeholder="Enter custom text here..."
                />
              </div>

              {/* Dimensions Section */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  Dimensions
                </label>
                <div className="space-y-3">
                  {/* Width */}
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Width</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={selectedComponent.customProps.width || '100%'}
                        onChange={(e) => updateComponentProps(selectedComponent.id, { width: e.target.value })}
                        className="flex-1 px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                        placeholder="e.g., 100%, 500px, 50vw"
                      />
                      <select
                        onChange={(e) => updateComponentProps(selectedComponent.id, { width: e.target.value })}
                        className="px-2 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg text-xs bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      >
                        <option value="">Quick</option>
                        <option value="100%">Full</option>
                        <option value="75%">3/4</option>
                        <option value="50%">1/2</option>
                        <option value="33.333%">1/3</option>
                        <option value="25%">1/4</option>
                      </select>
                    </div>
                  </div>
                  {/* Height */}
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Height</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.height || 'auto'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { height: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="e.g., auto, 300px, 50vh"
                    />
                  </div>
                  {/* Max Width */}
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Max Width</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.maxWidth || 'none'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { maxWidth: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="e.g., none, 1200px"
                    />
                  </div>
                </div>
              </div>

              {/* Alignment */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  Alignment
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => updateComponentProps(selectedComponent.id, { alignment: 'left' })}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedComponent.customProps.alignment === 'left'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    Left
                  </button>
                  <button
                    onClick={() => updateComponentProps(selectedComponent.id, { alignment: 'center' })}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedComponent.customProps.alignment === 'center'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    Center
                  </button>
                  <button
                    onClick={() => updateComponentProps(selectedComponent.id, { alignment: 'right' })}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      selectedComponent.customProps.alignment === 'right'
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    Right
                  </button>
                </div>
              </div>

              {/* Margin Section */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Margin (Outer Spacing)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Top</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.marginTop || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { marginTop: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Bottom</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.marginBottom || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { marginBottom: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Left</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.marginLeft || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { marginLeft: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Right</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.marginRight || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { marginRight: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                </div>
              </div>

              {/* Padding Section */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Padding (Inner Spacing)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Top</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.paddingTop || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { paddingTop: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Bottom</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.paddingBottom || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { paddingBottom: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Left</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.paddingLeft || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { paddingLeft: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-600 dark:text-slate-400 mb-1 block">Right</label>
                    <input
                      type="text"
                      value={selectedComponent.customProps.paddingRight || '0'}
                      onChange={(e) => updateComponentProps(selectedComponent.id, { paddingRight: e.target.value })}
                      className="w-full px-3 py-2 border-2 border-slate-200 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-sm bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100"
                      placeholder="0px"
                    />
                  </div>
                </div>
              </div>

              {/* Apply Changes Button */}
              <button
                onClick={() => {
                  // Force re-render to show all spacing changes
                  setPageComponents([...pageComponents]);
                  // Auto-open preview to show perfect result
                  setShowPreview(true);
                }}
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Apply Changes & Preview
              </button>

              {/* Info Note */}
              <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <div className="flex gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-blue-800 dark:text-blue-300 leading-relaxed">
                    Click "Apply Changes & Preview" to see margins and padding in full desktop view. All customizations are included in exported code.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-600 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <p className="text-slate-700 dark:text-slate-200 font-semibold mb-2">No Component Selected</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm px-8">
                  Click on any component in the canvas to start customizing
                </p>
              </div>

              {/* What You Can Customize */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">What You Can Customize</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Background Color</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Change the background color of your component</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Text Color</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Modify text and typography colors</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Border Color</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Adjust border and outline colors</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-slate-800 dark:text-slate-200">Custom Text</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">Edit text content and labels</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-purple-200 dark:border-purple-800">
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">💡 Pro Tip:</span> All your customizations will be automatically included in the exported code!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customize;
