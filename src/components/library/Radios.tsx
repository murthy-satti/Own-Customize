import React from 'react';

// Radio Button
export const RadioInput: React.FC = () => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select an option</label>
      <div className="flex items-center">
        <input type="radio" name="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Option 1</label>
      </div>
      <div className="flex items-center">
        <input type="radio" name="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Option 2</label>
      </div>
    </div>
  );
};

// Radio Group Horizontal
export const RadioGroupHorizontal: React.FC = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">Choose a plan</label>
      <div className="flex gap-6">
        <div className="flex items-center">
          <input type="radio" name="plan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">Basic</label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="plan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">Pro</label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="plan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
          <label className="ml-2 text-sm text-gray-700 cursor-pointer">Enterprise</label>
        </div>
      </div>
    </div>
  );
};

// Radio Cards
export const RadioCards: React.FC = () => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select size</label>
      <label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
        <input type="radio" name="size" className="w-4 h-4 text-blue-600 cursor-pointer" defaultChecked />
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-900">Small</div>
          <div className="text-xs text-gray-500">Perfect for personal use</div>
        </div>
      </label>
      <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
        <input type="radio" name="size" className="w-4 h-4 text-blue-600 cursor-pointer" />
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-900">Medium</div>
          <div className="text-xs text-gray-500">Great for small teams</div>
        </div>
      </label>
    </div>
  );
};

// Radio with description
export const RadioWithDescription: React.FC = () => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery method</label>
      <div className="flex items-start">
        <input type="radio" name="delivery" className="w-4 h-4 mt-1 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <div className="ml-3">
          <label className="text-sm font-medium text-gray-900 cursor-pointer">Standard Shipping</label>
          <p className="text-xs text-gray-500">Delivery in 5-7 business days</p>
        </div>
      </div>
      <div className="flex items-start">
        <input type="radio" name="delivery" className="w-4 h-4 mt-1 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <div className="ml-3">
          <label className="text-sm font-medium text-gray-900 cursor-pointer">Express Shipping</label>
          <p className="text-xs text-gray-500">Delivery in 2-3 business days</p>
        </div>
      </div>
    </div>
  );
};

// Radio Buttons Grid
export const RadioGrid: React.FC = () => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">Select color</label>
      <div className="grid grid-cols-2 gap-3">
        <label className="flex items-center p-3 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
          <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" defaultChecked />
          <span className="ml-2 text-sm font-medium text-gray-900">Blue</span>
        </label>
        <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
          <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" />
          <span className="ml-2 text-sm font-medium text-gray-900">Red</span>
        </label>
        <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
          <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" />
          <span className="ml-2 text-sm font-medium text-gray-900">Green</span>
        </label>
        <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
          <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" />
          <span className="ml-2 text-sm font-medium text-gray-900">Yellow</span>
        </label>
      </div>
    </div>
  );
};

export const radioComponents = [
  {
    name: 'RadioButton',
    component: RadioInput,
    code: `<div className="space-y-2">
  <label className="block text-sm font-medium text-gray-700 mb-2">Select an option</label>
  <div className="flex items-center">
    <input type="radio" name="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Option 1</label>
  </div>
  <div className="flex items-center">
    <input type="radio" name="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Option 2</label>
  </div>
</div>`,
    preview: <RadioInput />,
  },
  {
    name: 'RadioGroupHorizontal',
    component: RadioGroupHorizontal,
    code: `<div className="flex gap-6">
  <div className="flex items-center">
    <input type="radio" name="plan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Basic</label>
  </div>
  <div className="flex items-center">
    <input type="radio" name="plan" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Pro</label>
  </div>
</div>`,
    preview: <RadioGroupHorizontal />,
  },
  {
    name: 'RadioCards',
    component: RadioCards,
    code: `<div className="space-y-3">
  <label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
    <input type="radio" name="size" className="w-4 h-4 text-blue-600 cursor-pointer" defaultChecked />
    <div className="ml-3">
      <div className="text-sm font-medium text-gray-900">Small</div>
      <div className="text-xs text-gray-500">Perfect for personal use</div>
    </div>
  </label>
  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
    <input type="radio" name="size" className="w-4 h-4 text-blue-600 cursor-pointer" />
    <div className="ml-3">
      <div className="text-sm font-medium text-gray-900">Medium</div>
      <div className="text-xs text-gray-500">Great for small teams</div>
    </div>
  </label>
</div>`,
    preview: <RadioCards />,
  },
  {
    name: 'RadioWithDescription',
    component: RadioWithDescription,
    code: `<div className="flex items-start">
  <input type="radio" name="delivery" className="w-4 h-4 mt-1 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
  <div className="ml-3">
    <label className="text-sm font-medium text-gray-900 cursor-pointer">Standard Shipping</label>
    <p className="text-xs text-gray-500">Delivery in 5-7 business days</p>
  </div>
</div>`,
    preview: <RadioWithDescription />,
  },
  {
    name: 'RadioGrid',
    component: RadioGrid,
    code: `<div className="grid grid-cols-2 gap-3">
  <label className="flex items-center p-3 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
    <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" defaultChecked />
    <span className="ml-2 text-sm font-medium text-gray-900">Blue</span>
  </label>
  <label className="flex items-center p-3 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
    <input type="radio" name="color" className="w-4 h-4 text-blue-600 cursor-pointer" />
    <span className="ml-2 text-sm font-medium text-gray-900">Red</span>
  </label>
</div>`,
    preview: <RadioGrid />,
  },
];
