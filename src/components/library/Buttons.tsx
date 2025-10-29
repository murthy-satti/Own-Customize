import React from 'react';

// Button Type 1: Primary Button
export const PrimaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

// Button Type 2: Secondary Button
export const SecondaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 3: Outline Button
export const OutlineButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 4: Danger Button
export const DangerButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

// Button Type 5: Success Button
export const SuccessButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

export const buttonComponents = [
  {
    name: 'PrimaryButton',
    component: PrimaryButton,
    code: `<button
  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md"
>
  Primary Button
</button>`,
    preview: <PrimaryButton>Primary Button</PrimaryButton>,
  },
  {
    name: 'SecondaryButton',
    component: SecondaryButton,
    code: `<button
  className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
>
  Secondary Button
</button>`,
    preview: <SecondaryButton>Secondary Button</SecondaryButton>,
  },
  {
    name: 'OutlineButton',
    component: OutlineButton,
    code: `<button
  className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
>
  Outline Button
</button>`,
    preview: <OutlineButton>Outline Button</OutlineButton>,
  },
  {
    name: 'DangerButton',
    component: DangerButton,
    code: `<button
  className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md"
>
  Danger Button
</button>`,
    preview: <DangerButton>Danger Button</DangerButton>,
  },
  {
    name: 'SuccessButton',
    component: SuccessButton,
    code: `<button
  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md"
>
  Success Button
</button>`,
    preview: <SuccessButton>Success Button</SuccessButton>,
  },
];
