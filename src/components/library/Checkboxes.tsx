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

// Checkbox with description
export const CheckboxWithDescription: React.FC = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-start">
        <input type="checkbox" className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <div className="ml-3">
          <label className="text-sm font-medium text-gray-900 cursor-pointer">Email notifications</label>
          <p className="text-xs text-gray-500">Receive updates via email</p>
        </div>
      </div>
      <div className="flex items-start">
        <input type="checkbox" className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <div className="ml-3">
          <label className="text-sm font-medium text-gray-900 cursor-pointer">SMS notifications</label>
          <p className="text-xs text-gray-500">Get alerts on your phone</p>
        </div>
      </div>
    </div>
  );
};

// Checkbox Card
export const CheckboxCard: React.FC = () => {
  return (
    <div className="space-y-3">
      <label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-900">Premium Features</div>
          <div className="text-xs text-gray-500">Advanced analytics and reporting</div>
        </div>
      </label>
      <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-blue-400">
        <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <div className="ml-3">
          <div className="text-sm font-medium text-gray-900">Priority Support</div>
          <div className="text-xs text-gray-500">24/7 dedicated assistance</div>
        </div>
      </label>
    </div>
  );
};

export const checkboxComponents = [
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
  <label className="block text-sm font-medium text-gray-700 mb-2">Select your interests</label>
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Technology</label>
  </div>
  <div className="flex items-center">
    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
    <label className="ml-2 text-sm text-gray-700 cursor-pointer">Design</label>
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
    name: 'CheckboxWithDescription',
    component: CheckboxWithDescription,
    code: `<div className="flex items-start">
  <input type="checkbox" className="w-5 h-5 mt-1 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
  <div className="ml-3">
    <label className="text-sm font-medium text-gray-900 cursor-pointer">Email notifications</label>
    <p className="text-xs text-gray-500">Receive updates via email</p>
  </div>
</div>`,
    preview: <CheckboxWithDescription />,
  },
  {
    name: 'CheckboxCard',
    component: CheckboxCard,
    code: `<label className="flex items-center p-4 border-2 border-blue-600 bg-blue-50 rounded-lg cursor-pointer">
  <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
  <div className="ml-3">
    <div className="text-sm font-medium text-gray-900">Premium Features</div>
    <div className="text-xs text-gray-500">Advanced analytics and reporting</div>
  </div>
</label>`,
    preview: <CheckboxCard />,
  },
];
