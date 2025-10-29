import React, { useState } from 'react';

// Basic Hamburger
export const BasicHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
    </button>
  );
};

// Animated X
export const AnimatedX: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <div className="w-6 h-5 relative">
        <span className={`absolute w-full h-0.5 bg-gray-900 left-0 transition-all duration-300 ${isOpen ? 'top-2.5 rotate-45' : 'top-0'}`}></span>
        <span className={`absolute w-full h-0.5 bg-gray-900 left-0 top-2.5 transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`absolute w-full h-0.5 bg-gray-900 left-0 transition-all duration-300 ${isOpen ? 'top-2.5 -rotate-45' : 'top-5'}`}></span>
      </div>
    </button>
  );
};

// Arrow Hamburger
export const ArrowHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-x-1' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-translate-x-2' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 translate-x-1' : ''}`}></span>
    </button>
  );
};

// Minimal Dots
export const MinimalDots: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <span className={`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all ${isOpen ? 'scale-0' : ''}`}></span>
      <span className={`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all ${isOpen ? 'scale-0' : ''}`}></span>
      <span className={`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all ${isOpen ? 'scale-0' : ''}`}></span>
    </button>
  );
};

// Rotate Hamburger
export const RotateHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <div className={`flex flex-col gap-1.5 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
        <span className="w-6 h-0.5 bg-gray-900"></span>
        <span className="w-6 h-0.5 bg-gray-900"></span>
        <span className="w-6 h-0.5 bg-gray-900"></span>
      </div>
    </button>
  );
};

// Plus to X
export const PlusToX: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <span className={`absolute w-6 h-0.5 bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}></span>
      <span className={`absolute w-0.5 h-6 bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-90'}`}></span>
    </button>
  );
};

// Squeeze Hamburger
export const SqueezeHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label="Menu"
    >
      <span className={`w-6 h-0.5 bg-gray-900 transition-all origin-left ${isOpen ? 'rotate-45 w-7' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'w-0 opacity-0' : ''}`}></span>
      <span className={`w-6 h-0.5 bg-gray-900 transition-all origin-left ${isOpen ? '-rotate-45 w-7' : ''}`}></span>
    </button>
  );
};

// Colored Hamburger
export const ColoredHamburger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${isOpen ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
      aria-label="Menu"
    >
      <span className={`w-6 h-0.5 transition-all ${isOpen ? 'bg-blue-600 rotate-45 translate-y-2' : 'bg-gray-900'}`}></span>
      <span className={`w-6 h-0.5 transition-all ${isOpen ? 'bg-blue-600 opacity-0' : 'bg-gray-900'}`}></span>
      <span className={`w-6 h-0.5 transition-all ${isOpen ? 'bg-blue-600 -rotate-45 -translate-y-2' : 'bg-gray-900'}`}></span>
    </button>
  );
};

export const hamburgerComponents = [
  {
    name: 'BasicHamburger',
    component: BasicHamburger,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg">
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? 'rotate-45 translate-y-2' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? 'opacity-0' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? '-rotate-45 -translate-y-2' : ''}\`}></span>
</button>`,
    preview: <BasicHamburger />,
  },
  {
    name: 'AnimatedX',
    component: AnimatedX,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
  <div className="w-6 h-5 relative">
    <span className={\`absolute w-full h-0.5 bg-gray-900 left-0 transition-all duration-300 \${isOpen ? 'top-2.5 rotate-45' : 'top-0'}\`}></span>
    <span className={\`absolute w-full h-0.5 bg-gray-900 left-0 top-2.5 transition-all duration-300 \${isOpen ? 'opacity-0' : 'opacity-100'}\`}></span>
    <span className={\`absolute w-full h-0.5 bg-gray-900 left-0 transition-all duration-300 \${isOpen ? 'top-2.5 -rotate-45' : 'top-5'}\`}></span>
  </div>
</button>`,
    preview: <AnimatedX />,
  },
  {
    name: 'ArrowHamburger',
    component: ArrowHamburger,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg">
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? 'rotate-45 translate-x-1' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? '-translate-x-2' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? '-rotate-45 translate-x-1' : ''}\`}></span>
</button>`,
    preview: <ArrowHamburger />,
  },
  {
    name: 'MinimalDots',
    component: MinimalDots,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="flex gap-1.5 p-2 hover:bg-gray-100 rounded-lg">
  <span className={\`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all \${isOpen ? 'scale-0' : ''}\`}></span>
  <span className={\`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all \${isOpen ? 'scale-0' : ''}\`}></span>
  <span className={\`w-1.5 h-1.5 bg-gray-900 rounded-full transition-all \${isOpen ? 'scale-0' : ''}\`}></span>
</button>`,
    preview: <MinimalDots />,
  },
  {
    name: 'RotateHamburger',
    component: RotateHamburger,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
  <div className={\`flex flex-col gap-1.5 transition-transform duration-300 \${isOpen ? 'rotate-90' : ''}\`}>
    <span className="w-6 h-0.5 bg-gray-900"></span>
    <span className="w-6 h-0.5 bg-gray-900"></span>
    <span className="w-6 h-0.5 bg-gray-900"></span>
  </div>
</button>`,
    preview: <RotateHamburger />,
  },
  {
    name: 'PlusToX',
    component: PlusToX,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="relative w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
  <span className={\`absolute w-6 h-0.5 bg-gray-900 transition-transform duration-300 \${isOpen ? 'rotate-45' : 'rotate-0'}\`}></span>
  <span className={\`absolute w-0.5 h-6 bg-gray-900 transition-transform duration-300 \${isOpen ? 'rotate-45' : 'rotate-90'}\`}></span>
</button>`,
    preview: <PlusToX />,
  },
  {
    name: 'SqueezeHamburger',
    component: SqueezeHamburger,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg">
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all origin-left \${isOpen ? 'rotate-45 w-7' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all \${isOpen ? 'w-0 opacity-0' : ''}\`}></span>
  <span className={\`w-6 h-0.5 bg-gray-900 transition-all origin-left \${isOpen ? '-rotate-45 w-7' : ''}\`}></span>
</button>`,
    preview: <SqueezeHamburger />,
  },
  {
    name: 'ColoredHamburger',
    component: ColoredHamburger,
    code: `const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)} className={\`flex flex-col gap-1.5 p-2 rounded-lg transition-colors \${isOpen ? 'bg-blue-100' : 'hover:bg-gray-100'}\`}>
  <span className={\`w-6 h-0.5 transition-all \${isOpen ? 'bg-blue-600 rotate-45 translate-y-2' : 'bg-gray-900'}\`}></span>
  <span className={\`w-6 h-0.5 transition-all \${isOpen ? 'bg-blue-600 opacity-0' : 'bg-gray-900'}\`}></span>
  <span className={\`w-6 h-0.5 transition-all \${isOpen ? 'bg-blue-600 -rotate-45 -translate-y-2' : 'bg-gray-900'}\`}></span>
</button>`,
    preview: <ColoredHamburger />,
  },
];
