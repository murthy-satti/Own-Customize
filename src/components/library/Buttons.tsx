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

// Button Type 6: Ghost Button
export const GhostButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 7: Outline Secondary Button
export const OutlineSecondaryButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 8: Warning Button
export const WarningButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

// Button Type 9: Dark Button
export const DarkButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

// Button Type 10: Light Button
export const LightButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-300"
    >
      {children}
    </button>
  );
};

// Button Type 11: Small Button
export const SmallButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 12: Large Button
export const LargeButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
    >
      {children}
    </button>
  );
};

// Button Type 13: Pill Button
export const PillButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
    >
      {children}
    </button>
  );
};

// Button Type 14: Link Button
export const LinkButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
    >
      {children}
    </button>
  );
};

// Button Type 15: Disabled Button
export const DisabledButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      disabled
      className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed opacity-60"
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
  {
    name: 'GhostButton',
    component: GhostButton,
    code: `<button
  className="px-6 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
>
  Ghost Button
</button>`,
    preview: <GhostButton>Ghost Button</GhostButton>,
  },
  {
    name: 'OutlineSecondaryButton',
    component: OutlineSecondaryButton,
    code: `<button
  className="px-6 py-3 border-2 border-gray-400 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
>
  Outline Secondary
</button>`,
    preview: <OutlineSecondaryButton>Outline Secondary</OutlineSecondaryButton>,
  },
  {
    name: 'WarningButton',
    component: WarningButton,
    code: `<button
  className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200 shadow-md"
>
  Warning Button
</button>`,
    preview: <WarningButton>Warning Button</WarningButton>,
  },
  {
    name: 'DarkButton',
    component: DarkButton,
    code: `<button
  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-md"
>
  Dark Button
</button>`,
    preview: <DarkButton>Dark Button</DarkButton>,
  },
  {
    name: 'LightButton',
    component: LightButton,
    code: `<button
  className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 border border-gray-300"
>
  Light Button
</button>`,
    preview: <LightButton>Light Button</LightButton>,
  },
  {
    name: 'SmallButton',
    component: SmallButton,
    code: `<button
  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
>
  Small Button
</button>`,
    preview: <SmallButton>Small Button</SmallButton>,
  },
  {
    name: 'LargeButton',
    component: LargeButton,
    code: `<button
  className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
>
  Large Button
</button>`,
    preview: <LargeButton>Large Button</LargeButton>,
  },
  {
    name: 'PillButton',
    component: PillButton,
    code: `<button
  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-md"
>
  Pill Button
</button>`,
    preview: <PillButton>Pill Button</PillButton>,
  },
  {
    name: 'LinkButton',
    component: LinkButton,
    code: `<button
  className="px-4 py-2 text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
>
  Link Button
</button>`,
    preview: <LinkButton>Link Button</LinkButton>,
  },
  {
    name: 'DisabledButton',
    component: DisabledButton,
    code: `<button
  disabled
  className="px-6 py-3 bg-gray-300 text-gray-500 font-semibold rounded-lg cursor-not-allowed opacity-60"
>
  Disabled Button
</button>`,
    preview: <DisabledButton>Disabled Button</DisabledButton>,
  },
];
