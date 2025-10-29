import React from 'react';

// Date Picker
export const DatePicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Date</label>
      <input
        type="date"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Time Picker
export const TimePicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
      <input
        type="time"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Color Picker
export const ColorPicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Choose Color</label>
      <div className="flex gap-3 items-center">
        <input
          type="color"
          defaultValue="#3B82F6"
          className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer"
        />
        <input
          type="text"
          defaultValue="#3B82F6"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>
    </div>
  );
};

// Date Range Picker
export const DateRangePicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Date Range</label>
      <div className="flex gap-2 items-center">
        <input
          type="date"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>
    </div>
  );
};

// Month Picker
export const MonthPicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
      <input
        type="month"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// Week Picker
export const WeekPicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Week</label>
      <input
        type="week"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// DateTime Picker
export const DateTimePicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Select Date & Time</label>
      <input
        type="datetime-local"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
      />
    </div>
  );
};

// File Picker
export const FilePicker: React.FC = () => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export const pickerComponents = [
  {
    name: 'DatePicker',
    component: DatePicker,
    code: `<input
  type="date"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>`,
    preview: <DatePicker />,
  },
  {
    name: 'TimePicker',
    component: TimePicker,
    code: `<input
  type="time"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>`,
    preview: <TimePicker />,
  },
  {
    name: 'ColorPicker',
    component: ColorPicker,
    code: `<div className="flex gap-3 items-center">
  <input
    type="color"
    defaultValue="#3B82F6"
    className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer"
  />
  <input
    type="text"
    defaultValue="#3B82F6"
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
  />
</div>`,
    preview: <ColorPicker />,
  },
  {
    name: 'DateRangePicker',
    component: DateRangePicker,
    code: `<div className="flex gap-2 items-center">
  <input
    type="date"
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
  />
  <span className="text-gray-500">to</span>
  <input
    type="date"
    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
  />
</div>`,
    preview: <DateRangePicker />,
  },
  {
    name: 'MonthPicker',
    component: MonthPicker,
    code: `<input
  type="month"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
/>`,
    preview: <MonthPicker />,
  },
  {
    name: 'WeekPicker',
    component: WeekPicker,
    code: `<input
  type="week"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
/>`,
    preview: <WeekPicker />,
  },
  {
    name: 'DateTimePicker',
    component: DateTimePicker,
    code: `<input
  type="datetime-local"
  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
/>`,
    preview: <DateTimePicker />,
  },
  {
    name: 'FilePicker',
    component: FilePicker,
    code: `<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
  <div className="flex flex-col items-center justify-center pt-5 pb-6">
    <svg className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
  </div>
  <input type="file" className="hidden" />
</label>`,
    preview: <FilePicker />,
  },
];
