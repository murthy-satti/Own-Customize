import React from 'react';

// Checkbox
export const CheckboxInput: React.FC<{ label?: string }> = ({ label = "Accept terms and conditions" }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />
      <label className="ml-2 text-sm text-gray-700 cursor-pointer">{label}</label>
    </div>
  );
};

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

// Checkbox Group
export const CheckboxGroup: React.FC = () => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select your interests</label>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Technology</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Design</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Business</label>
      </div>
    </div>
  );
};

// Colored Checkbox
export const ColoredCheckbox: React.FC = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Green checkbox</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Purple checkbox</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-2 focus:ring-red-500 cursor-pointer" defaultChecked />
        <label className="ml-2 text-sm text-gray-700 cursor-pointer">Red checkbox</label>
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

export const selectionComponents = [
  {
    name: 'Checkbox',
    component: CheckboxInput,
    code: `<div className="flex items-center">
  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
  <label className="ml-2 text-sm text-gray-700 cursor-pointer">Accept terms and conditions</label>
</div>`,
    preview: <CheckboxInput />,
  },
  {
    name: 'CheckboxGroup',
    component: CheckboxGroup,
    code: `<div className="space-y-2">
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Technology</label>
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Design</label>
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Business</label>
  </div>
</div>`,
    preview: <CheckboxGroup />,
  },
  {
    name: 'ColoredCheckbox',
    component: ColoredCheckbox,
    code: `<div className="space-y-2">
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Green checkbox</label>
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Purple checkbox</label>
  </div>
</div>`,
    preview: <ColoredCheckbox />,
  },
  {
    name: 'RadioButton',
    component: RadioInput,
    code: `<div className="space-y-2">
  <div className="flex items-center">
    <input type="radio" name="radio" className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
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
    code: `<label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
  <input type="radio" name="size" className="w-4 h-4 text-blue-600 cursor-pointer" defaultChecked />
  <div className="ml-3">
    <div className="text-sm font-medium text-gray-900">Small</div>
    <div className="text-xs text-gray-500">Perfect for personal use</div>
  </div>
</label>`,
    preview: <RadioCards />,
  },
  {
    name: 'SelectDropdown',
    component: SelectInput,
    code: `<select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white cursor-pointer">
  <option>United States</option>
  <option>United Kingdom</option>
  <option>Canada</option>
  <option>Australia</option>
</select>`,
    preview: <SelectInput />,
  },
  {
    name: 'Switch',
    component: SwitchInput,
    code: `<div className="flex items-center justify-between">
  <span className="text-sm font-medium text-gray-700">Enable notifications</span>
  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700">
    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
  </button>
</div>`,
    preview: <SwitchInput />,
  },
];
