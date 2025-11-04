import React from 'react';

// Simple Table
export const SimpleTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Email</th>
            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">John Doe</td>
            <td className="border border-gray-300 px-4 py-2">john@example.com</td>
            <td className="border border-gray-300 px-4 py-2">Admin</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="border border-gray-300 px-4 py-2">Jane Smith</td>
            <td className="border border-gray-300 px-4 py-2">jane@example.com</td>
            <td className="border border-gray-300 px-4 py-2">User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Striped Table
export const StripedTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="px-4 py-3 text-left font-semibold">Product</th>
            <th className="px-4 py-3 text-left font-semibold">Price</th>
            <th className="px-4 py-3 text-left font-semibold">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-4 py-3">Laptop</td>
            <td className="px-4 py-3">$999</td>
            <td className="px-4 py-3">25</td>
          </tr>
          <tr className="bg-gray-50">
            <td className="px-4 py-3">Mouse</td>
            <td className="px-4 py-3">$29</td>
            <td className="px-4 py-3">150</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3">Keyboard</td>
            <td className="px-4 py-3">$79</td>
            <td className="px-4 py-3">80</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Data Table with Actions
export const DataTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 text-sm text-gray-900">#001</td>
            <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Active</span>
            </td>
            <td className="px-6 py-4 text-sm">
              <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 text-sm text-gray-900">#002</td>
            <td className="px-6 py-4 text-sm text-gray-900">Jane Smith</td>
            <td className="px-6 py-4">
              <span className="px-2 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 rounded-full">Pending</span>
            </td>
            <td className="px-6 py-4 text-sm">
              <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Pricing Table
export const PricingTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left font-bold">Feature</th>
            <th className="px-6 py-4 text-center font-bold">Basic</th>
            <th className="px-6 py-4 text-center font-bold">Pro</th>
            <th className="px-6 py-4 text-center font-bold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="px-6 py-4 font-medium">Users</td>
            <td className="px-6 py-4 text-center">5</td>
            <td className="px-6 py-4 text-center">25</td>
            <td className="px-6 py-4 text-center">Unlimited</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <td className="px-6 py-4 font-medium">Storage</td>
            <td className="px-6 py-4 text-center">10GB</td>
            <td className="px-6 py-4 text-center">100GB</td>
            <td className="px-6 py-4 text-center">1TB</td>
          </tr>
          <tr className="border-b">
            <td className="px-6 py-4 font-medium">Support</td>
            <td className="px-6 py-4 text-center">Email</td>
            <td className="px-6 py-4 text-center">Priority</td>
            <td className="px-6 py-4 text-center">24/7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Compact Table
export const CompactTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Date</th>
            <th className="px-3 py-2 text-left font-semibold text-gray-700">Transaction</th>
            <th className="px-3 py-2 text-right font-semibold text-gray-700">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-2 text-gray-600">2024-01-15</td>
            <td className="px-3 py-2 text-gray-900">Payment received</td>
            <td className="px-3 py-2 text-right text-green-600 font-semibold">+$500.00</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-2 text-gray-600">2024-01-14</td>
            <td className="px-3 py-2 text-gray-900">Subscription fee</td>
            <td className="px-3 py-2 text-right text-red-600 font-semibold">-$29.99</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="px-3 py-2 text-gray-600">2024-01-13</td>
            <td className="px-3 py-2 text-gray-900">Refund processed</td>
            <td className="px-3 py-2 text-right text-green-600 font-semibold">+$150.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};



// Modern Gradient Header Table
export const ModernTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">John Doe</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">john@example.com</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full">Active</span></td>
            <td className="px-6 py-4"><button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button></td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Jane Smith</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">jane@example.com</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full">Pending</span></td>
            <td className="px-6 py-4"><button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Minimal Clean Table
export const MinimalTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200 dark:border-gray-700">
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Product</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Stock</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Laptop</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$999</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">25 units</td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Mouse</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$29</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">150 units</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Zebra Striped Table
export const StripedTable2: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800 dark:bg-gray-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">ID</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Customer</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Amount</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white dark:bg-gray-900">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">#001</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Alice Johnson</td>
            <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">$250.00</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">2024-01-15</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">#002</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Bob Williams</td>
            <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">$175.50</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">2024-01-16</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Full Border Table
export const BorderedTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-blue-50 dark:bg-blue-900/20 border-b-2 border-gray-300 dark:border-gray-600">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">Task</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white border-r border-gray-300 dark:border-gray-600">Assignee</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300 dark:border-gray-600">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 border-r border-gray-300 dark:border-gray-600">Fix login bug</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 border-r border-gray-300 dark:border-gray-600">John</td>
            <td className="px-6 py-4"><span className="px-2 py-1 text-xs font-bold text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400 rounded">High</span></td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 border-r border-gray-300 dark:border-gray-600">Update docs</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 border-r border-gray-300 dark:border-gray-600">Jane</td>
            <td className="px-6 py-4"><span className="px-2 py-1 text-xs font-bold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded">Low</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Borderless Hover Table
export const BorderlessTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Role</th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">Department</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Sarah Connor</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Manager</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Engineering</td>
          </tr>
          <tr className="hover:bg-blue-50 dark:hover:bg-blue-900/10 cursor-pointer transition-colors">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Kyle Reese</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Developer</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Engineering</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Compact Dense Table
export const CompactTable2: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Code</th>
            <th className="px-3 py-2 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Item</th>
            <th className="px-3 py-2 text-right text-xs font-semibold text-gray-700 dark:text-gray-300">Qty</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-3 py-2 text-xs text-gray-600 dark:text-gray-400">SKU001</td>
            <td className="px-3 py-2 text-xs text-gray-900 dark:text-gray-100">Widget A</td>
            <td className="px-3 py-2 text-xs text-right text-gray-900 dark:text-gray-100">42</td>
          </tr>
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-3 py-2 text-xs text-gray-600 dark:text-gray-400">SKU002</td>
            <td className="px-3 py-2 text-xs text-gray-900 dark:text-gray-100">Widget B</td>
            <td className="px-3 py-2 text-xs text-right text-gray-900 dark:text-gray-100">18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Comfortable Spacing Table
export const ComfortableTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white">Project</th>
            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white">Progress</th>
            <th className="px-8 py-5 text-left text-sm font-semibold text-gray-900 dark:text-white">Due Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-8 py-5 text-sm font-medium text-gray-900 dark:text-gray-100">Website Redesign</td>
            <td className="px-8 py-5"><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div></div></td>
            <td className="px-8 py-5 text-sm text-gray-600 dark:text-gray-400">Mar 15, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Responsive Card Table
export const ResponsiveTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Order ID</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Customer</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Total</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-green-50 dark:hover:bg-green-900/10">
            <td className="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">#ORD-001</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Michael Scott</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100">$1,299.00</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Delivered</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Scrollable Fixed Header Table
export const ScrollableTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded-lg">
      <table className="w-full">
        <thead className="sticky top-0 bg-purple-600 text-white z-10">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">Event</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">User</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">User Login</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">10:23 AM</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">admin@example.com</td>
          </tr>
          <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">File Upload</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">10:45 AM</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">user@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Sticky Column Table
export const FixedHeaderTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="sticky left-0 z-10 bg-orange-600 px-6 py-4 text-left text-sm font-semibold">Category</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Q1</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Q2</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Q3</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Q4</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900">
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="sticky left-0 bg-white dark:bg-gray-900 px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Revenue</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">$250K</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">$300K</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">$275K</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">$325K</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Sticky First Column
export const StickyTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="sticky left-0 z-10 bg-pink-600 px-6 py-4 text-left text-sm font-semibold shadow-sm">Product</th>
            <th className="px-6 py-4 text-left text-sm font-semibold min-w-[200px]">Description</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Price</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Stock</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-pink-50 dark:hover:bg-pink-900/10">
            <td className="sticky left-0 bg-white dark:bg-gray-900 px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100 shadow-sm">MacBook Pro</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">16-inch, M3 Max, 32GB RAM</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$2,499</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Hover Effect Table
export const HoverTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Task</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Assignee</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:scale-[1.01] transition-all cursor-pointer">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Design mockups</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">In Progress</span></td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Emma Watson</td>
          </tr>
          <tr className="hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:scale-[1.01] transition-all cursor-pointer">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Code review</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">Done</span></td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Tom Hardy</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Alternating Row Colors
export const ZebraTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-teal-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Employee</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Position</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Salary</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-teal-50 dark:bg-teal-900/10">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Alice Brown</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Senior Dev</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$120,000</td>
          </tr>
          <tr className="bg-white dark:bg-gray-900">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Bob Green</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Junior Dev</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$80,000</td>
          </tr>
          <tr className="bg-teal-50 dark:bg-teal-900/10">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Carol White</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Designer</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$95,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Colorful Header Table
export const ColorfulTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-red-500 text-white text-left text-sm font-semibold">Name</th>
            <th className="px-6 py-4 bg-yellow-500 text-white text-left text-sm font-semibold">Email</th>
            <th className="px-6 py-4 bg-green-500 text-white text-left text-sm font-semibold">Phone</th>
            <th className="px-6 py-4 bg-blue-500 text-white text-left text-sm font-semibold">City</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">David Lee</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">david@email.com</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">555-0123</td>
            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">New York</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Gradient Multiple Colors
export const GradientTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Metric</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Value</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Change</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Revenue</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100">$1.2M</td>
            <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">+12.5%</td>
          </tr>
          <tr className="hover:bg-purple-50 dark:hover:bg-purple-900/10">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Users</td>
            <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-gray-100">45.2K</td>
            <td className="px-6 py-4 text-sm font-semibold text-green-600 dark:text-green-400">+8.3%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Glass Effect Table
export const GlassTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 dark:border-gray-700/20">
        <thead>
          <tr className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border-b border-white/20 dark:border-gray-700/20">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">File</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Size</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">Type</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10 dark:divide-gray-700/20">
          <tr className="hover:bg-white/10 dark:hover:bg-gray-800/10">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">document.pdf</td>
            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">2.4 MB</td>
            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">PDF</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Dark Theme Table
export const DarkTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-gray-900 rounded-lg shadow-2xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800 border-b border-gray-700">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-100">Server</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-100">Status</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-100">Uptime</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-100">prod-server-01</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-400 bg-green-900/30 rounded-full">●  Online</span></td>
            <td className="px-6 py-4 text-sm text-gray-400">99.9%</td>
          </tr>
          <tr className="hover:bg-gray-800 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-gray-100">prod-server-02</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-red-400 bg-red-900/30 rounded-full">●  Offline</span></td>
            <td className="px-6 py-4 text-sm text-gray-400">85.2%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Light Airy Table
export const LightTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl overflow-hidden">
        <thead>
          <tr className="border-b-2 border-blue-200 dark:border-blue-800">
            <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 dark:text-blue-100">Course</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 dark:text-blue-100">Instructor</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-blue-900 dark:text-blue-100">Students</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-blue-100 dark:divide-blue-800">
          <tr className="hover:bg-blue-100 dark:hover:bg-blue-800/30">
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">React Fundamentals</td>
            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Jane Doe</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">1,245</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Professional Business Table
export const ProfessionalTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 border-b-2 border-gray-300 dark:border-gray-600">
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Invoice</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Client</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">INV-2024-001</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">Acme Corp</td>
            <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-gray-100">$5,250.00</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full">Paid</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Creative Artistic Table
export const CreativeTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-orange-900/10 dark:via-pink-900/10 dark:to-purple-900/10 rounded-2xl overflow-hidden shadow-xl">
        <thead>
          <tr className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 text-white">
            <th className="px-6 py-4 text-left text-sm font-bold">Project</th>
            <th className="px-6 py-4 text-left text-sm font-bold">Designer</th>
            <th className="px-6 py-4 text-left text-sm font-bold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-pink-200 dark:divide-pink-800">
          <tr className="hover:bg-gradient-to-r hover:from-orange-100 hover:via-pink-100 hover:to-purple-100 dark:hover:from-orange-900/20 dark:hover:via-pink-900/20 dark:hover:to-purple-900/20">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Brand Identity</td>
            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Sarah Creative</td>
            <td className="px-6 py-4"><span className="px-3 py-1 text-xs font-semibold text-purple-700 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 rounded-full">In Review</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Data Grid Table
export const DataTable2: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="w-full">
        <thead>
          <tr className="bg-slate-700 text-white">
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Email</th>
            <th className="px-6 py-3 text-left text-xs font-semibold uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800">
            <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">#123</td>
            <td className="px-6 py-3 text-sm font-medium text-gray-900 dark:text-gray-100">John Smith</td>
            <td className="px-6 py-3 text-sm text-gray-600 dark:text-gray-400">john@example.com</td>
            <td className="px-6 py-3 text-sm">
              <button className="text-blue-600 hover:text-blue-800 mr-3 font-medium">Edit</button>
              <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Report Style Table
export const ReportTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Department</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Budget</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Spent</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Remaining</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-cyan-50 dark:hover:bg-cyan-900/10">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Engineering</td>
            <td className="px-6 py-4 text-sm text-right text-gray-900 dark:text-gray-100">$500,000</td>
            <td className="px-6 py-4 text-sm text-right text-red-600 dark:text-red-400">$375,000</td>
            <td className="px-6 py-4 text-sm text-right font-semibold text-green-600 dark:text-green-400">$125,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Dashboard KPI Table
export const DashboardTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-1">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-800 dark:bg-gray-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">KPI</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Current</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Target</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Progress</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Monthly Sales</td>
            <td className="px-6 py-4 text-sm text-center font-bold text-gray-900 dark:text-gray-100">$85K</td>
            <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-400">$100K</td>
            <td className="px-6 py-4"><div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-blue-600 h-2 rounded-full" style={{width: '85%'}}></div></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Financial Table
export const FinancialTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <table className="w-full">
        <thead>
          <tr className="bg-emerald-700 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Account</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Debit</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Credit</th>
            <th className="px-6 py-4 text-right text-sm font-semibold">Balance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-emerald-50 dark:hover:bg-emerald-900/10">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Cash</td>
            <td className="px-6 py-4 text-sm text-right font-mono text-gray-900 dark:text-gray-100">$10,000.00</td>
            <td className="px-6 py-4 text-sm text-right font-mono text-gray-600 dark:text-gray-400">$2,500.00</td>
            <td className="px-6 py-4 text-sm text-right font-bold font-mono text-emerald-600 dark:text-emerald-400">$7,500.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Analytics Table
export const AnalyticsTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Page</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Views</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Bounce Rate</th>
            <th className="px-6 py-4 text-center text-sm font-semibold">Avg. Time</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-violet-50 dark:hover:bg-violet-900/10">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">/home</td>
            <td className="px-6 py-4 text-sm text-center font-semibold text-gray-900 dark:text-gray-100">12,543</td>
            <td className="px-6 py-4 text-sm text-center text-green-600 dark:text-green-400">32.5%</td>
            <td className="px-6 py-4 text-sm text-center text-gray-600 dark:text-gray-400">2:34</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Timeline Event Table
export const TimelineTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-amber-600 text-white">
            <th className="px-6 py-4 text-left text-sm font-semibold">Time</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Event</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">User</th>
            <th className="px-6 py-4 text-left text-sm font-semibold">Type</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr className="hover:bg-amber-50 dark:hover:bg-amber-900/10">
            <td className="px-6 py-4 text-sm font-mono text-gray-600 dark:text-gray-400">14:32:15</td>
            <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">User logged in</td>
            <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">admin@site.com</td>
            <td className="px-6 py-4"><span className="px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded">Auth</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Kanban Board Table
export const KanbanTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-300 dark:bg-gray-700 text-left text-sm font-semibold text-gray-900 dark:text-white">To Do</th>
            <th className="px-6 py-4 bg-blue-300 dark:bg-blue-700 text-left text-sm font-semibold text-gray-900 dark:text-white">In Progress</th>
            <th className="px-6 py-4 bg-green-300 dark:bg-green-700 text-left text-sm font-semibold text-gray-900 dark:text-white">Done</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6 py-4 align-top bg-gray-50 dark:bg-gray-800">
              <div className="bg-white dark:bg-gray-700 p-3 rounded shadow-sm mb-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Design homepage</p>
              </div>
            </td>
            <td className="px-6 py-4 align-top bg-blue-50 dark:bg-blue-900/10">
              <div className="bg-white dark:bg-gray-700 p-3 rounded shadow-sm mb-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Build API</p>
              </div>
            </td>
            <td className="px-6 py-4 align-top bg-green-50 dark:bg-green-900/10">
              <div className="bg-white dark:bg-gray-700 p-3 rounded shadow-sm mb-2">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Setup repo</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Calendar Grid Table
export const CalendarTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-rose-600 text-white">
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Sun</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Mon</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Tue</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Wed</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Thu</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Fri</th>
            <th className="px-4 py-3 text-sm font-semibold border border-rose-500">Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-8 text-sm text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-700 align-top">28</td>
            <td className="px-4 py-8 text-sm text-gray-400 dark:text-gray-600 border border-gray-200 dark:border-gray-700 align-top">29</td>
            <td className="px-4 py-8 text-sm text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 align-top cursor-pointer">1</td>
            <td className="px-4 py-8 text-sm text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 align-top cursor-pointer">2</td>
            <td className="px-4 py-8 text-sm font-bold text-white bg-rose-600 border border-rose-500 align-top">3</td>
            <td className="px-4 py-8 text-sm text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 align-top cursor-pointer">4</td>
            <td className="px-4 py-8 text-sm text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-rose-50 dark:hover:bg-rose-900/10 align-top cursor-pointer">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Invoice Style Table
export const InvoiceTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">INVOICE #2024-001</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">Date: January 15, 2024</p>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-900 dark:border-white">
            <th className="px-4 py-3 text-left text-sm font-bold text-gray-900 dark:text-white">Description</th>
            <th className="px-4 py-3 text-center text-sm font-bold text-gray-900 dark:text-white">Qty</th>
            <th className="px-4 py-3 text-right text-sm font-bold text-gray-900 dark:text-white">Rate</th>
            <th className="px-4 py-3 text-right text-sm font-bold text-gray-900 dark:text-white">Amount</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr>
            <td className="px-4 py-4 text-sm text-gray-900 dark:text-gray-100">Web Development Services</td>
            <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-gray-100">40</td>
            <td className="px-4 py-4 text-sm text-right font-mono text-gray-900 dark:text-gray-100">$125.00</td>
            <td className="px-4 py-4 text-sm text-right font-mono font-semibold text-gray-900 dark:text-gray-100">$5,000.00</td>
          </tr>
          <tr className="border-t-2 border-gray-900 dark:border-white">
            <td colSpan={3} className="px-4 py-4 text-right text-base font-bold text-gray-900 dark:text-white">TOTAL:</td>
            <td className="px-4 py-4 text-right text-lg font-bold font-mono text-gray-900 dark:text-white">$5,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Comparison Pricing Table
export const ComparisonTable: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
        <thead>
          <tr>
            <th className="px-6 py-4 bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-900 dark:text-white">Feature</th>
            <th className="px-6 py-4 bg-blue-500 text-white text-center text-sm font-bold">Basic<br/><span className="text-2xl">$9</span>/mo</th>
            <th className="px-6 py-4 bg-purple-600 text-white text-center text-sm font-bold">Pro<br/><span className="text-2xl">$29</span>/mo</th>
            <th className="px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center text-sm font-bold">Enterprise<br/><span className="text-2xl">$99</span>/mo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Users</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">5</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">25</td>
            <td className="px-6 py-4 text-sm text-center font-semibold text-green-600 dark:text-green-400">Unlimited</td>
          </tr>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Storage</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">10GB</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">100GB</td>
            <td className="px-6 py-4 text-sm text-center font-semibold text-green-600 dark:text-green-400">1TB</td>
          </tr>
          <tr>
            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">Support</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">Email</td>
            <td className="px-6 py-4 text-sm text-center text-gray-900 dark:text-gray-100">Priority</td>
            <td className="px-6 py-4 text-sm text-center font-semibold text-green-600 dark:text-green-400">24/7 Phone</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const tableComponents = [
  {
    name: 'SimpleTable',
    component: SimpleTable,
    code: `<div className="component">
  {/* SimpleTable */}
</div>`,
    preview: <SimpleTable />,
  },
  {
    name: 'StripedTable',
    component: StripedTable,
    code: `<div className="component">
  {/* StripedTable */}
</div>`,
    preview: <StripedTable />,
  },
  {
    name: 'DataTable',
    component: DataTable,
    code: `<div className="component">
  {/* DataTable */}
</div>`,
    preview: <DataTable />,
  },
  {
    name: 'PricingTable',
    component: PricingTable,
    code: `<div className="component">
  {/* PricingTable */}
</div>`,
    preview: <PricingTable />,
  },
  {
    name: 'CompactTable',
    component: CompactTable,
    code: `<div className="component">
  {/* CompactTable */}
</div>`,
    preview: <CompactTable />,
  },
  {
    name: 'ModernTable',
    component: ModernTable,
    code: `<div className="component">
  {/* ModernTable */}
</div>`,
    preview: <ModernTable />,
  },
  {
    name: 'MinimalTable',
    component: MinimalTable,
    code: `<div className="component">
  {/* MinimalTable */}
</div>`,
    preview: <MinimalTable />,
  },
  {
    name: 'StripedTable2',
    component: StripedTable2,
    code: `<div className="component">
  {/* StripedTable2 */}
</div>`,
    preview: <StripedTable2 />,
  },
  {
    name: 'BorderedTable',
    component: BorderedTable,
    code: `<div className="component">
  {/* BorderedTable */}
</div>`,
    preview: <BorderedTable />,
  },
  {
    name: 'BorderlessTable',
    component: BorderlessTable,
    code: `<div className="component">
  {/* BorderlessTable */}
</div>`,
    preview: <BorderlessTable />,
  },
  {
    name: 'CompactTable2',
    component: CompactTable2,
    code: `<div className="component">
  {/* CompactTable2 */}
</div>`,
    preview: <CompactTable2 />,
  },
  {
    name: 'ComfortableTable',
    component: ComfortableTable,
    code: `<div className="component">
  {/* ComfortableTable */}
</div>`,
    preview: <ComfortableTable />,
  },
  {
    name: 'ResponsiveTable',
    component: ResponsiveTable,
    code: `<div className="component">
  {/* ResponsiveTable */}
</div>`,
    preview: <ResponsiveTable />,
  },
  {
    name: 'ScrollableTable',
    component: ScrollableTable,
    code: `<div className="component">
  {/* ScrollableTable */}
</div>`,
    preview: <ScrollableTable />,
  },
  {
    name: 'FixedHeaderTable',
    component: FixedHeaderTable,
    code: `<div className="component">
  {/* FixedHeaderTable */}
</div>`,
    preview: <FixedHeaderTable />,
  },
  {
    name: 'StickyTable',
    component: StickyTable,
    code: `<div className="component">
  {/* StickyTable */}
</div>`,
    preview: <StickyTable />,
  },
  {
    name: 'HoverTable',
    component: HoverTable,
    code: `<div className="component">
  {/* HoverTable */}
</div>`,
    preview: <HoverTable />,
  },
  {
    name: 'ZebraTable',
    component: ZebraTable,
    code: `<div className="component">
  {/* ZebraTable */}
</div>`,
    preview: <ZebraTable />,
  },
  {
    name: 'ColorfulTable',
    component: ColorfulTable,
    code: `<div className="component">
  {/* ColorfulTable */}
</div>`,
    preview: <ColorfulTable />,
  },
  {
    name: 'GradientTable',
    component: GradientTable,
    code: `<div className="component">
  {/* GradientTable */}
</div>`,
    preview: <GradientTable />,
  },
  {
    name: 'GlassTable',
    component: GlassTable,
    code: `<div className="component">
  {/* GlassTable */}
</div>`,
    preview: <GlassTable />,
  },
  {
    name: 'DarkTable',
    component: DarkTable,
    code: `<div className="component">
  {/* DarkTable */}
</div>`,
    preview: <DarkTable />,
  },
  {
    name: 'LightTable',
    component: LightTable,
    code: `<div className="component">
  {/* LightTable */}
</div>`,
    preview: <LightTable />,
  },
  {
    name: 'ProfessionalTable',
    component: ProfessionalTable,
    code: `<div className="component">
  {/* ProfessionalTable */}
</div>`,
    preview: <ProfessionalTable />,
  },
  {
    name: 'CreativeTable',
    component: CreativeTable,
    code: `<div className="component">
  {/* CreativeTable */}
</div>`,
    preview: <CreativeTable />,
  },
  {
    name: 'DataTable2',
    component: DataTable2,
    code: `<div className="component">
  {/* DataTable2 */}
</div>`,
    preview: <DataTable2 />,
  },
  {
    name: 'ReportTable',
    component: ReportTable,
    code: `<div className="component">
  {/* ReportTable */}
</div>`,
    preview: <ReportTable />,
  },
  {
    name: 'DashboardTable',
    component: DashboardTable,
    code: `<div className="component">
  {/* DashboardTable */}
</div>`,
    preview: <DashboardTable />,
  },
  {
    name: 'FinancialTable',
    component: FinancialTable,
    code: `<div className="component">
  {/* FinancialTable */}
</div>`,
    preview: <FinancialTable />,
  },
  {
    name: 'AnalyticsTable',
    component: AnalyticsTable,
    code: `<div className="component">
  {/* AnalyticsTable */}
</div>`,
    preview: <AnalyticsTable />,
  },
  {
    name: 'TimelineTable',
    component: TimelineTable,
    code: `<div className="component">
  {/* TimelineTable */}
</div>`,
    preview: <TimelineTable />,
  },
  {
    name: 'KanbanTable',
    component: KanbanTable,
    code: `<div className="component">
  {/* KanbanTable */}
</div>`,
    preview: <KanbanTable />,
  },
  {
    name: 'CalendarTable',
    component: CalendarTable,
    code: `<div className="component">
  {/* CalendarTable */}
</div>`,
    preview: <CalendarTable />,
  },
  {
    name: 'InvoiceTable',
    component: InvoiceTable,
    code: `<div className="component">
  {/* InvoiceTable */}
</div>`,
    preview: <InvoiceTable />,
  },
  {
    name: 'ComparisonTable',
    component: ComparisonTable,
    code: `<div className="component">
  {/* ComparisonTable */}
</div>`,
    preview: <ComparisonTable />,
  },
];
