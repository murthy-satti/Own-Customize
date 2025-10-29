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

export const tableComponents = [
  {
    name: 'SimpleTable',
    component: SimpleTable,
    code: `<table className="w-full border-collapse border border-gray-300">
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
  </tbody>
</table>`,
    preview: <SimpleTable />,
  },
  {
    name: 'StripedTable',
    component: StripedTable,
    code: `<table className="w-full">
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
  </tbody>
</table>`,
    preview: <StripedTable />,
  },
  {
    name: 'DataTable',
    component: DataTable,
    code: `<div className="w-full bg-white rounded-lg shadow">
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
        <td className="px-6 py-4 text-sm">#001</td>
        <td className="px-6 py-4 text-sm">John Doe</td>
        <td className="px-6 py-4"><span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Active</span></td>
        <td className="px-6 py-4 text-sm">
          <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
          <button className="text-red-600 hover:text-red-800">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    preview: <DataTable />,
  },
  {
    name: 'PricingTable',
    component: PricingTable,
    code: `<table className="w-full bg-white rounded-lg shadow-lg">
  <thead>
    <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <th className="px-6 py-4 text-left font-bold">Feature</th>
      <th className="px-6 py-4 text-center font-bold">Basic</th>
      <th className="px-6 py-4 text-center font-bold">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b">
      <td className="px-6 py-4 font-medium">Users</td>
      <td className="px-6 py-4 text-center">5</td>
      <td className="px-6 py-4 text-center">25</td>
    </tr>
  </tbody>
</table>`,
    preview: <PricingTable />,
  },
  {
    name: 'CompactTable',
    component: CompactTable,
    code: `<table className="w-full text-sm">
  <thead>
    <tr className="border-b-2 border-gray-300">
      <th className="px-3 py-2 text-left font-semibold">Date</th>
      <th className="px-3 py-2 text-left font-semibold">Transaction</th>
      <th className="px-3 py-2 text-right font-semibold">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border-b hover:bg-gray-50">
      <td className="px-3 py-2">2024-01-15</td>
      <td className="px-3 py-2">Payment received</td>
      <td className="px-3 py-2 text-right text-green-600">+$500.00</td>
    </tr>
  </tbody>
</table>`,
    preview: <CompactTable />,
  },
];
