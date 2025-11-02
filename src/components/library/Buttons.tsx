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

// Button Type 16: Gradient Button 
export const GradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      
      className="px-5 py-2.5 rounded-xl text-white font-medium 
bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
hover:from-pink-500 hover:to-yellow-500 
transition-all duration-300 shadow-md hover:shadow-lg"
    >
      {children}
    </button>
  );
};

// Button Type 16: Gradient Button 
export const GradientButton2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      
      className="px-6 py-2.5 rounded-full text-white font-semibold 
bg-gradient-to-r from-teal-400 to-lime-500 
hover:scale-105 hover:shadow-[0_0_15px_rgba(72,211,148,0.6)] 
transition-all duration-300"
    >
      {children}
    </button>
  );
};

// Button Type 16: Shadow Button 
export const ShadowButton: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button
      
      className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg 
shadow-[0_0_12px_rgba(239,68,68,0.7)] 
hover:shadow-[0_0_20px_rgba(239,68,68,0.9)] 
transition-all duration-300"
    >
      {children}
    </button>
  );
};

// Button Type 17: Glass Button
export const GlassButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 backdrop-blur-md bg-black/10 text-black dark:text-white font-semibold rounded-lg border border-black/20 
    hover:bg-black/20 hover:border-black/40 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
  >
    {children}
  </button>
);

// Button Type 18: Neon Button
export const NeonButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-black text-cyan-400 font-semibold rounded-lg border border-cyan-400 
    shadow-[0_0_12px_rgba(34,211,238,0.7)] hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] 
    transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 19: Gradient Border Button
export const GradientBorderButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 rounded-lg font-semibold text-white bg-gray-900 overflow-hidden
    before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
    before:bg-gradient-to-r before:from-pink-500 before:to-yellow-500 
    before:-z-10 hover:before:opacity-80 transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 20: Shimmer Button
export const ShimmerButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg 
    relative overflow-hidden transition-all duration-300 hover:scale-105 
    before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent 
    before:translate-x-[-100%] hover:before:translate-x-[100%] before:duration-700 before:transition-transform"
  >
    {children}
  </button>
);

// Button Type 21: Outline Glow Button
export const OutlineGlowButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 text-blue-500 border-2 border-blue-500 font-semibold rounded-lg 
    hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] 
    transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 22: Shadow Lift Button
export const ShadowLiftButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg 
    shadow-md hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 23: Transparent Border Button
export const TransparentBorderButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 text-black dark:text-white font-semibold rounded-lg border border-white/50 
    hover:bg-white/10 transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 24: Dual Color Button
export const DualColorButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-br from-blue-500 to-green-500 
    hover:from-green-500 hover:to-blue-500 transition-all duration-300 shadow-md"
  >
    {children}
  </button>
);

// Button Type 25: Press Effect Button
export const PressButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg 
    shadow-[0_4px_0_#4c1d95] active:translate-y-[3px] active:shadow-[0_1px_0_#4c1d95] transition-all duration-150"
  >
    {children}
  </button>
);

// Button Type 26: Soft Shadow Button
export const SoftShadowButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg 
    shadow-[4px_4px_0_#00000020] hover:shadow-[8px_8px_0_#00000030] 
    transition-all duration-300 border border-gray-200"
  >
    {children}
  </button>
);

// Button Type 27: Frosted Glass Button
export const FrostedGlassButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-black/30 dark:bg-white/30 text-black dark:text-white font-semibold rounded-lg backdrop-blur-xl 
    border border-black/40 hover:bg-black/40 hover:dark:bg-white/40 transition-all duration-300 shadow-md"
  >
    {children}
  </button>
);

// Button Type 28: Retro Pixel Button
export const RetroPixelButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-yellow-300 dark:bg-yellow-400 text-black dark:text-black font-bold 
    border-4 border-black rounded-none hover:translate-y-1 active:translate-y-2 
    transition-all duration-200 shadow-[4px_4px_0_#000]"
  >
    {children}
  </button>
);

// Button Type 29: Metallic Button
export const MetallicButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 
    text-black dark:text-black font-semibold rounded-lg shadow-inner 
    hover:brightness-110 transition-all duration-300 border border-gray-500"
  >
    {children}
  </button>
);

// Button Type 30: 3D Depth Button
export const DepthButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-blue-700 text-white dark:text-black font-semibold rounded-lg 
    shadow-[0_6px_0_#1e3a8a] active:translate-y-[3px] active:shadow-[0_2px_0_#1e3a8a] 
    transition-all duration-200"
  >
    {children}
  </button>
);

// Button Type 31: Outline Gradient Button
export const OutlineGradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 text-white dark:text-black font-semibold rounded-lg 
    border-2 border-transparent bg-clip-padding 
    bg-gradient-to-r from-pink-500 to-violet-500 
    hover:bg-gradient-to-l transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 32: Minimal Text Button
export const MinimalTextButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-4 py-2 bg-transparent text-gray-800 dark:text-gray-200 font-medium 
    hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline transition-all duration-200"
  >
    {children}
  </button>
);

// Button Type 33: IconGlowButton
export const IconGlowButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg 
    hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300"
  >
    {children}
  </button>
);

// Button Type 34: Stripe Button
export const StripeButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 text-white dark:text-black font-semibold rounded-lg 
    bg-[linear-gradient(45deg,#6366f1_25%,#a855f7_25%,#a855f7_50%,#6366f1_50%,#6366f1_75%,#a855f7_75%,#a855f7_100%)] 
    bg-[length:20px_20px] hover:bg-[length:30px_30px] transition-all duration-300 shadow-md"
  >
    {children}
  </button>
);

// Button Type 35: Tilt Button
export const TiltButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white dark:text-black font-semibold rounded-lg 
    transform hover:rotate-[-3deg] hover:scale-105 transition-transform duration-300 shadow-md"
  >
    {children}
  </button>
);

// Button Type 36: Border Slide Button
export const BorderSlideButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 text-black dark:text-white font-semibold rounded-lg overflow-hidden
  border border-transparent hover:border-blue-500 
  before:absolute before:inset-0 before:translate-x-[-100%] 
  before:bg-blue-500 before:transition-transform before:duration-300 
  hover:before:translate-x-0 "
  >
    <span className="relative z-10">{children}</span>
  </button>
);

// Button Type 36: StylishButton
export const GreenStyle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 text-green-700 dark:text-green-800 font-semibold rounded-lg overflow-hidden
  border border-green-300 bg-green-100"
  >
    <span className="relative z-10">{children}</span>
  </button>
);

// Button Type 36: StylishButton
export const RedStyle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 text-red-700 dark:text-red-800 font-semibold rounded-lg overflow-hidden
  border border-red-300 bg-red-100"
  >
    <span className="relative z-10">{children}</span>
  </button>
);

// Button Type 36: StylishButton
export const BlueStyle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 text-blue-700 dark:text-blue-800 font-semibold rounded-lg overflow-hidden
  border border-blue-300 bg-blue-100"
  >
    <span className="relative z-10">{children}</span>
  </button>
);

// Button Type 36: StylishButton
export const YellowStyle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button
    className="relative px-6 py-3 text-yellow-700 dark:text-yellow-800 font-semibold rounded-lg overflow-hidden
  border border-yellow-300 bg-yellow-100"
  >
    <span className="relative z-10">{children}</span>
  </button>
);







export const buttonComponents = [
  {
    name: 'RedStyle',
    component: RedStyle,
    code: `<button
  className="relative px-6 py-3 text-green-700 dark:text-white font-semibold rounded-lg overflow-hidden
  border border-green-300 bg-green-100"
>
  Primary Button
</button>`,
    preview: <RedStyle>Red Stylish </RedStyle>,
  },
   {
    name: 'GreenStyle',
    component: GreenStyle,
    code: `<button
  className="relative px-6 py-3 text-green-700 dark:text-white font-semibold rounded-lg overflow-hidden
  border border-green-300 bg-green-100"
>
  Primary Button
</button>`,
    preview: <GreenStyle>Green Stylish </GreenStyle>,
  },
   {
    name: 'BlueStyle',
    component: BlueStyle,
    code: `<button
  className="relative px-6 py-3 text-blue-700 dark:text-white font-semibold rounded-lg overflow-hidden
  border border-blue-300 bg-blue-100"
>
  Primary Button
</button>`,
    preview: <BlueStyle>Blue Stylish </BlueStyle>,
  },
   {
    name: 'YellowStyle',
    component: YellowStyle,
    code: `<button
  className="relative px-6 py-3 text-yellow-700 dark:text-white font-semibold rounded-lg overflow-hidden
  border border-yellow-300 bg-yellow-100"
>
  Primary Button
</button>`,
    preview: <YellowStyle>Yellow Stylish </YellowStyle>,
  },
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
    name: 'GradientButton',
    component: GradientButton,
    code: `<button
  className="px-5 py-2.5 rounded-xl text-white font-medium 
bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
hover:from-pink-500 hover:to-yellow-500 
transition-all duration-300 shadow-md hover:shadow-lg"
>
  Link Button
</button>`,
    preview: <GradientButton>Gradient Button</GradientButton>,
  },
  {
    name: 'GradientButton2',
    component: GradientButton2,
    code: `<button
  className="px-6 py-2.5 rounded-full text-white font-semibold 
bg-gradient-to-r from-teal-400 to-lime-500 
hover:scale-105 hover:shadow-[0_0_15px_rgba(72,211,148,0.6)] 
transition-all duration-300"
>
  Link Button
</button>`,
    preview: <GradientButton2>Gradient Button 2</GradientButton2>,
  },
  {
    name: 'ShadowButton',
    component: ShadowButton,
    code: `<button
  className="px-6 py-2.5 bg-red-600 text-white font-semibold rounded-lg 
shadow-[0_0_12px_rgba(239,68,68,0.7)] 
hover:shadow-[0_0_20px_rgba(239,68,68,0.9)] 
transition-all duration-300"
>
  Link Button
</button>`,
    preview: <ShadowButton>Shadow Button</ShadowButton>,
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

  {
  name: 'GlassButton',
  component: GlassButton,
  code: `<button
  className="px-6 py-3 backdrop-blur-md bg-black/10 text-black dark:text-white font-semibold rounded-lg border border-black/20 
    hover:bg-black/20 hover:border-black/40 transition-all duration-300 shadow-[0_4px_30px_rgba(255,255,255,0.1)]"
>
  Glass Button
</button>`,
  preview: <GlassButton>Glass Button</GlassButton>,
},
{
  name: 'NeonButton',
  component: NeonButton,
  code: `<button
  className="px-6 py-3 bg-black text-cyan-400 font-semibold rounded-lg border border-cyan-400 
  shadow-[0_0_12px_rgba(34,211,238,0.7)] hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] 
  transition-all duration-300"
>
  Neon Button
</button>`,
  preview: <NeonButton>Neon Button</NeonButton>,
},
{
  name: 'GradientBorderButton',
  component: GradientBorderButton,
  code: `<button
  className="relative px-6 py-3 rounded-lg font-semibold text-white bg-gray-900 overflow-hidden
  before:absolute before:inset-0 before:rounded-lg before:p-[2px] 
  before:bg-gradient-to-r before:from-pink-500 before:to-yellow-500 
  before:-z-10 hover:before:opacity-80 transition-all duration-300"
>
  Gradient Border Button
</button>`,
  preview: <GradientBorderButton>Gradient Border Button</GradientBorderButton>,
},
{
  name: 'ShimmerButton',
  component: ShimmerButton,
  code: `<button
  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg 
  relative overflow-hidden transition-all duration-300 hover:scale-105 
  before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent 
  before:translate-x-[-100%] hover:before:translate-x-[100%] before:duration-700 before:transition-transform"
>
  Shimmer Button
</button>`,
  preview: <ShimmerButton>Shimmer Button</ShimmerButton>,
},
{
  name: 'OutlineGlowButton',
  component: OutlineGlowButton,
  code: `<button
  className="px-6 py-3 text-blue-500 border-2 border-blue-500 font-semibold rounded-lg 
  hover:text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] 
  transition-all duration-300"
>
  Outline Glow Button
</button>`,
  preview: <OutlineGlowButton>Outline Glow Button</OutlineGlowButton>,
},
{
  name: 'ShadowLiftButton',
  component: ShadowLiftButton,
  code: `<button
  className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg 
  shadow-md hover:translate-y-[-4px] hover:shadow-xl transition-all duration-300"
>
  Shadow Lift Button
</button>`,
  preview: <ShadowLiftButton>Shadow Lift Button</ShadowLiftButton>,
},
{
  name: 'TransparentBorderButton',
  component: TransparentBorderButton,
  code: `<button
  className="px-6 py-3 text-white font-semibold rounded-lg border border-white/50 
  hover:bg-white/10 transition-all duration-300"
>
  Transparent Border Button
</button>`,
  preview: <TransparentBorderButton>Transparent Border Button</TransparentBorderButton>,
},
{
  name: 'DualColorButton',
  component: DualColorButton,
  code: `<button
  className="px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-br from-blue-500 to-green-500 
  hover:from-green-500 hover:to-blue-500 transition-all duration-300 shadow-md"
>
  Dual Color Button
</button>`,
  preview: <DualColorButton>Dual Color Button</DualColorButton>,
},
{
  name: 'PressButton',
  component: PressButton,
  code: `<button
  className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-lg 
  shadow-[0_4px_0_#4c1d95] active:translate-y-[3px] active:shadow-[0_1px_0_#4c1d95] transition-all duration-150"
>
  Press Button
</button>`,
  preview: <PressButton>Press Button</PressButton>,
},
{
  name: 'SoftShadowButton',
  component: SoftShadowButton,
  code: `<button
  className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg 
  shadow-[4px_4px_0_#00000020] hover:shadow-[8px_8px_0_#00000030] 
  transition-all duration-300 border border-gray-200"
>
  Soft Shadow Button
</button>`,
  preview: <SoftShadowButton>Soft Shadow Button</SoftShadowButton>,
},
{
  name: 'FrostedGlassButton',
  component: FrostedGlassButton,
  code: `<button
  className="px-6 py-3 bg-black/30 dark:bg-white/30 text-black dark:text-white font-semibold rounded-lg backdrop-blur-xl 
    border border-black/40 hover:bg-black/40 hover:dark:bg-white/40 transition-all duration-300 shadow-md"
>
  Frosted Glass Button
</button>`,
  preview: <FrostedGlassButton>Frosted Glass Button</FrostedGlassButton>,
},
{
  name: 'RetroPixelButton',
  component: RetroPixelButton,
  code: `<button
  className="px-6 py-3 bg-yellow-300 dark:bg-yellow-400 text-black dark:text-black font-bold 
  border-4 border-black rounded-none hover:translate-y-1 active:translate-y-2 
  transition-all duration-200 shadow-[4px_4px_0_#000]"
>
  Retro Pixel Button
</button>`,
  preview: <RetroPixelButton>Retro Pixel Button</RetroPixelButton>,
},
{
  name: 'MetallicButton',
  component: MetallicButton,
  code: `<button
  className="px-6 py-3 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 
  text-black dark:text-black font-semibold rounded-lg shadow-inner 
  hover:brightness-110 transition-all duration-300 border border-gray-500"
>
  Metallic Button
</button>`,
  preview: <MetallicButton>Metallic Button</MetallicButton>,
},
{
  name: 'DepthButton',
  component: DepthButton,
  code: `<button
  className="px-6 py-3 bg-blue-700 text-white dark:text-black font-semibold rounded-lg 
  shadow-[0_6px_0_#1e3a8a] active:translate-y-[3px] active:shadow-[0_2px_0_#1e3a8a] 
  transition-all duration-200"
>
  3D Depth Button
</button>`,
  preview: <DepthButton>3D Depth Button</DepthButton>,
},
{
  name: 'OutlineGradientButton',
  component: OutlineGradientButton,
  code: `<button
  className="px-6 py-3 text-white dark:text-black font-semibold rounded-lg 
  border-2 border-transparent bg-clip-padding 
  bg-gradient-to-r from-pink-500 to-violet-500 
  hover:bg-gradient-to-l transition-all duration-300"
>
  Outline Gradient Button
</button>`,
  preview: <OutlineGradientButton>Outline Gradient Button</OutlineGradientButton>,
},
{
  name: 'MinimalTextButton',
  component: MinimalTextButton,
  code: `<button
  className="px-4 py-2 bg-transparent text-gray-800 dark:text-gray-200 font-medium 
  hover:text-blue-600 dark:hover:text-blue-400 underline-offset-4 hover:underline transition-all duration-200"
>
  Minimal Text Button
</button>`,
  preview: <MinimalTextButton>Minimal Text Button</MinimalTextButton>,
},
{
  name: 'IconGlowButton',
  component: IconGlowButton,
  code: `<button
  className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg 
  hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300"
>
  Icon Glow Button
</button>`,
  preview: <IconGlowButton>Icon Glow Button</IconGlowButton>,
},
{
  name: 'StripeButton',
  component: StripeButton,
  code: `<button
  className="px-6 py-3 text-white dark:text-black font-semibold rounded-lg 
  bg-[linear-gradient(45deg,#6366f1_25%,#a855f7_25%,#a855f7_50%,#6366f1_50%,#6366f1_75%,#a855f7_75%,#a855f7_100%)] 
  bg-[length:20px_20px] hover:bg-[length:30px_30px] transition-all duration-300 shadow-md"
>
  Stripe Button
</button>`,
  preview: <StripeButton>Stripe Button</StripeButton>,
},
{
  name: 'TiltButton',
  component: TiltButton,
  code: `<button
  className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white dark:text-black font-semibold rounded-lg 
  transform hover:rotate-[-3deg] hover:scale-105 transition-transform duration-300 shadow-md"
>
  Tilt Button
</button>`,
  preview: <TiltButton>Tilt Button</TiltButton>,
},
{
  name: 'BorderSlideButton',
  component: BorderSlideButton,
  code: `<button
  className="relative px-6 py-3 text-black dark:text-white font-semibold rounded-lg overflow-hidden
  border border-transparent hover:border-blue-500 
  before:absolute before:inset-0 before:translate-x-[-100%] 
  before:bg-blue-500 before:transition-transform before:duration-300 
  hover:before:translate-x-0 "
>
  <span className="relative z-10">Border Slide Button</span>
</button>`,
  preview: <BorderSlideButton>Border Slide Button</BorderSlideButton>,
},


];
