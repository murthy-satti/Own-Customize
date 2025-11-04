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



export const ModernRadio: React.FC = () => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Modern</label>
      <div className="flex items-center space-x-3">
        <input type="radio" name="ModernRadio" className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
        <label className="text-sm text-gray-700 dark:text-gray-300">Option 1</label>
      </div>
      <div className="flex items-center space-x-3">
        <input type="radio" name="ModernRadio" className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
        <label className="text-sm text-gray-700 dark:text-gray-300">Option 2</label>
      </div>
    </div>
  );
};

// Card Radio
export const CardRadio: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
        <label key={i} className="relative block p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
          <input type="radio" name="planCard" className="absolute top-4 right-4 w-5 h-5 text-blue-600" defaultChecked={i === 1} />
          <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{plan}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">$9/mo</p>
        </label>
      ))}
    </div>
  );
};

// Icon Radio
export const IconRadio: React.FC = () => {
  const icons = ['🚀', '⚡', '🎨', '💎'];
  return (
    <div className="flex gap-3">
      {icons.map((icon, i) => (
        <label key={i} className="relative cursor-pointer">
          <input type="radio" name="iconRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="w-16 h-16 flex items-center justify-center text-3xl bg-gray-100 dark:bg-gray-800 rounded-xl peer-checked:bg-purple-500 peer-checked:scale-110 transition-all">
            {icon}
          </div>
        </label>
      ))}
    </div>
  );
};

// Pill Radio
export const PillRadio: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {['React', 'Vue', 'Angular', 'Svelte'].map((tech, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="pillRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full peer-checked:bg-blue-600 peer-checked:text-white transition-all font-medium text-sm">
            {tech}
          </div>
        </label>
      ))}
    </div>
  );
};

// Image Radio
export const ImageRadio: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {['Light', 'Dark'].map((theme, i) => (
        <label key={i} className="relative block cursor-pointer">
          <input type="radio" name="imageRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className={'h-32 rounded-xl peer-checked:ring-4 peer-checked:ring-blue-500 transition-all ' + (i === 0 ? 'bg-gradient-to-br from-blue-100 to-purple-100' : 'bg-gradient-to-br from-gray-800 to-gray-900')}>
            <div className="flex items-center justify-center h-full">
              <span className={'text-xl font-bold ' + (i === 0 ? 'text-gray-900' : 'text-white')}>{theme}</span>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

// Minimal Radio
export const MinimalRadio: React.FC = () => {
  return (
    <div className="space-y-2">
      {['Small', 'Medium', 'Large'].map((size, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="minimalRadio" className="w-4 h-4 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 focus:ring-0" defaultChecked={i === 1} />
          <span className="text-gray-700 dark:text-gray-300">{size}</span>
        </label>
      ))}
    </div>
  );
};

// Toggle Radio
export const ToggleRadio: React.FC = () => {
  return (
    <div className="flex gap-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      {['Day', 'Week', 'Month', 'Year'].map((period, i) => (
        <label key={i} className="flex-1 relative">
          <input type="radio" name="toggleRadio" className="sr-only peer" defaultChecked={i === 2} />
          <div className="px-4 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white transition-all border-r border-gray-300 dark:border-gray-600 last:border-r-0">
            {period}
          </div>
        </label>
      ))}
    </div>
  );
};

// Color Swatch Radio
export const ColorSwatchRadio: React.FC = () => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  return (
    <div className="flex gap-3">
      {colors.map((color, i) => (
        <label key={i} className="relative cursor-pointer">
          <input type="radio" name="colorRadio" className="sr-only peer" defaultChecked={i === 2} />
          <div className={'w-12 h-12 ' + color + ' rounded-lg peer-checked:ring-4 peer-checked:ring-offset-2 peer-checked:ring-gray-400 transition-all'}></div>
        </label>
      ))}
    </div>
  );
};

// List Radio
export const ListRadio: React.FC = () => {
  const options = [
    { title: 'Standard Shipping', desc: '5-7 business days', price: 'Free' },
    { title: 'Express Shipping', desc: '2-3 business days', price: '$9.99' },
    { title: 'Overnight', desc: 'Next day delivery', price: '$24.99' }
  ];
  return (
    <div className="space-y-3">
      {options.map((opt, i) => (
        <label key={i} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
          <input type="radio" name="listRadio" className="w-5 h-5 text-blue-600" defaultChecked={i === 1} />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 dark:text-white">{opt.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{opt.desc}</p>
          </div>
          <span className="font-bold text-gray-900 dark:text-white">{opt.price}</span>
        </label>
      ))}
    </div>
  );
};

// Badge Radio
export const BadgeRadio: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="badgeRadio" className="sr-only peer" defaultChecked={i === 2} />
          <div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white text-gray-700 dark:text-gray-300 font-medium transition-all">
            {size}
          </div>
        </label>
      ))}
    </div>
  );
};

// Continue with 20 more diverse radio designs...
export const GradientRadio: React.FC = () => {
  return (
    <div className="space-y-3">
      {['Option A', 'Option B', 'Option C'].map((opt, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="gradientRadio" className="w-5 h-5 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 border-0 checked:bg-gradient-to-r checked:from-purple-600 checked:to-pink-600" defaultChecked={i === 0} />
          <span className="text-gray-700 dark:text-gray-300">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export const NeonRadio: React.FC = () => {
  return (
    <div className="space-y-3 bg-black p-6 rounded-xl">
      {['Neon Blue', 'Neon Pink', 'Neon Green'].map((opt, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="neonRadio" className="w-5 h-5 text-cyan-400 bg-gray-900 border-2 border-cyan-400 checked:shadow-[0_0_10px_rgba(34,211,238,0.8)]" defaultChecked={i === 0} />
          <span className="text-cyan-400">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export const SegmentedRadio: React.FC = () => {
  return (
    <div className="inline-flex border-2 border-gray-200 dark:border-gray-700 rounded-xl p-1">
      {['Personal', 'Business', 'Enterprise'].map((type, i) => (
        <label key={i} className="relative">
          <input type="radio" name="segmentedRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="px-6 py-2 text-sm font-medium cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white rounded-lg transition-all text-gray-700 dark:text-gray-300">
            {type}
          </div>
        </label>
      ))}
    </div>
  );
};

export const BoxRadio: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map(num => (
        <label key={num} className="relative block p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:shadow-xl">
          <input type="radio" name="boxRadio" className="absolute top-4 right-4 w-6 h-6 text-blue-600" defaultChecked={num === 1} />
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{num}</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Option {num}</p>
          </div>
        </label>
      ))}
    </div>
  );
};

export const TabRadio: React.FC = () => {
  return (
    <div className="border-b-2 border-gray-200 dark:border-gray-700">
      <div className="flex gap-8">
        {['Profile', 'Settings', 'Notifications'].map((tab, i) => (
          <label key={i} className="relative cursor-pointer">
            <input type="radio" name="tabRadio" className="sr-only peer" defaultChecked={i === 0} />
            <div className="pb-4 text-gray-600 dark:text-gray-400 peer-checked:text-blue-600 peer-checked:border-b-2 peer-checked:border-blue-600 font-medium transition-all">
              {tab}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export const CompactRadio: React.FC = () => {
  return (
    <div className="inline-flex gap-1">
      {['1x', '2x', '4x', '8x'].map((multiplier, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="compactRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 peer-checked:bg-green-600 peer-checked:text-white rounded transition-all">
            {multiplier}
          </div>
        </label>
      ))}
    </div>
  );
};

export const StarRatingRadio: React.FC = () => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map(star => (
        <label key={star} className="cursor-pointer">
          <input type="radio" name="starRadio" className="sr-only peer" defaultChecked={star === 4} />
          <svg className="w-10 h-10 text-gray-300 peer-checked:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </label>
      ))}
    </div>
  );
};

export const EmojiFeedbackRadio: React.FC = () => {
  const emojis = ['😞', '😐', '🙂', '😊', '🤩'];
  return (
    <div className="flex justify-between gap-2">
      {emojis.map((emoji, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="emojiRadio" className="sr-only peer" defaultChecked={i === 3} />
          <div className="text-5xl opacity-40 peer-checked:opacity-100 peer-checked:scale-125 transition-all">
            {emoji}
          </div>
        </label>
      ))}
    </div>
  );
};

export const ThumbsRadio: React.FC = () => {
  return (
    <div className="flex gap-4">
      {['👍', '👎'].map((thumb, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="thumbsRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="text-6xl opacity-30 peer-checked:opacity-100 peer-checked:scale-110 transition-all">
            {thumb}
          </div>
        </label>
      ))}
    </div>
  );
};

export const DotRadio: React.FC = () => {
  return (
    <div className="flex gap-3">
      {[1, 2, 3, 4, 5].map(dot => (
        <label key={dot} className="cursor-pointer">
          <input type="radio" name="dotRadio" className="sr-only peer" defaultChecked={dot === 3} />
          <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 peer-checked:scale-150 transition-all"></div>
        </label>
      ))}
    </div>
  );
};

export const VerticalRadio: React.FC = () => {
  return (
    <div className="space-y-2">
      {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((opt, i) => (
        <label key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-blue-100 dark:has-[:checked]:bg-blue-900/30">
          <input type="radio" name="verticalRadio" className="w-4 h-4 text-blue-600" defaultChecked={i === 0} />
          <span className="text-gray-700 dark:text-gray-300">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export const MaterialRadio: React.FC = () => {
  return (
    <div className="space-y-3">
      {['Option A', 'Option B', 'Option C'].map((opt, i) => (
        <label key={i} className="flex items-center gap-3 cursor-pointer">
          <div className="relative">
            <input type="radio" name="materialRadio" className="w-5 h-5 appearance-none bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full checked:border-blue-600 checked:border-[6px] cursor-pointer transition-all" defaultChecked={i === 0} />
          </div>
          <span className="text-gray-700 dark:text-gray-300">{opt}</span>
        </label>
      ))}
    </div>
  );
};

export const ChipRadio: React.FC = () => {
  const tags = ['Design', 'Development', 'Marketing', 'Sales', 'Support'];
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <label key={i} className="cursor-pointer">
          <input type="radio" name="chipRadio" className="sr-only peer" defaultChecked={i === 0} />
          <div className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white text-gray-700 dark:text-gray-300 font-medium text-sm transition-all">
            {tag}
          </div>
        </label>
      ))}
    </div>
  );
};

export const IconLabelRadio: React.FC = () => {
  const options = [
    { icon: '📱', label: 'Mobile' },
    { icon: '💻', label: 'Desktop' },
    { icon: '⌚', label: 'Watch' }
  ];
  return (
    <div className="flex gap-4">
      {options.map((opt, i) => (
        <label key={i} className="relative block w-32 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20 text-center">
          <input type="radio" name="iconLabelRadio" className="sr-only" defaultChecked={i === 0} />
          <div className="text-4xl mb-2">{opt.icon}</div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{opt.label}</div>
        </label>
      ))}
    </div>
  );
};

export const TileRadio: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
        <label key={num} className="cursor-pointer">
          <input type="radio" name="tileRadio" className="sr-only peer" defaultChecked={num === 3} />
          <div className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white text-gray-700 dark:text-gray-300 font-bold text-xl transition-all">
            {num}
          </div>
        </label>
      ))}
    </div>
  );
};

export const PricingRadio: React.FC = () => {
  const plans = [
    { name: 'Starter', price: 9, features: ['5 Projects', '10GB Storage'] },
    { name: 'Pro', price: 29, features: ['Unlimited', '100GB Storage'], popular: true },
    { name: 'Enterprise', price: 99, features: ['Everything', 'Priority Support'] }
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {plans.map((plan, i) => (
        <label key={i} className={'relative block p-6 border-2 rounded-xl cursor-pointer ' + (plan.popular ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-blue-500')}>
          <input type="radio" name="pricingRadio" className="absolute top-4 right-4 w-5 h-5 text-blue-600" defaultChecked={plan.popular} />
          {plan.popular && <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">POPULAR</span>}
          <div className="text-center mt-4">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white">{plan.name}</h3>
            <p className="text-3xl font-bold text-gray-900 dark:text-white my-2">$29<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mt-3">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </label>
      ))}
    </div>
  );
};

export const TimelineRadio: React.FC = () => {
  return (
    <div className="space-y-4">
      {['Morning', 'Afternoon', 'Evening'].map((time, i) => (
        <label key={i} className="flex items-center gap-4 cursor-pointer group">
          <input type="radio" name="timelineRadio" className="w-6 h-6 text-purple-600" defaultChecked={i === 0} />
          <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg group-has-[:checked]:bg-purple-100 dark:group-has-[:checked]:bg-purple-900/20 transition-all">
            <span className="font-medium text-gray-900 dark:text-white">{time}</span>
          </div>
        </label>
      ))}
    </div>
  );
};

export const StackedRadio: React.FC = () => {
  const options = [
    { title: 'Today', desc: 'Get it today', badge: 'Fastest' },
    { title: 'Tomorrow', desc: 'Get it tomorrow', badge: 'Popular' },
    { title: 'This Week', desc: 'Get it this week', badge: 'Cheapest' }
  ];
  return (
    <div className="space-y-3">
      {options.map((opt, i) => (
        <label key={i} className="block p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
          <div className="flex items-center gap-4">
            <input type="radio" name="stackedRadio" className="w-5 h-5 text-blue-600" defaultChecked={i === 1} />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-gray-900 dark:text-white">{opt.title}</h4>
                <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-bold rounded">{opt.badge}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{opt.desc}</p>
            </div>
          </div>
        </label>
      ))}
    </div>
  );
};

export const radioComponents = [
  {
    name: 'RadioInput',
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
    code: `<div>
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
</div>`,
    preview: <RadioGroupHorizontal />,
  },
  {
    name: 'RadioCards',
    component: RadioCards,
    code: `<div className="space-y-3">
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
</div>`,
    preview: <RadioCards />,
  },
  {
    name: 'RadioWithDescription',
    component: RadioWithDescription,
    code: `<div className="space-y-3">
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
</div>`,
    preview: <RadioWithDescription />,
  },
  {
    name: 'RadioGrid',
    component: RadioGrid,
    code: `<div>
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
</div>`,
    preview: <RadioGrid />,
  },
  {
    name: 'ModernRadio',
    component: ModernRadio,
    code: `<div className="space-y-3">
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Modern</label>
<div className="flex items-center space-x-3">
<input type="radio" name="ModernRadio" className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" defaultChecked />
<label className="text-sm text-gray-700 dark:text-gray-300">Option 1</label>
</div>
<div className="flex items-center space-x-3">
<input type="radio" name="ModernRadio" className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 cursor-pointer" />
<label className="text-sm text-gray-700 dark:text-gray-300">Option 2</label>
</div>
</div>`,
    preview: <ModernRadio />,
  },
  {
    name: 'CardRadio',
    component: CardRadio,
    code: `<div className="grid grid-cols-3 gap-4">
{['Basic', 'Pro', 'Enterprise'].map((plan, i) => (
<label key={i} className="relative block p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
<input type="radio" name="planCard" className="absolute top-4 right-4 w-5 h-5 text-blue-600" defaultChecked={i === 1} />
<h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{plan}</h3>
<p className="text-gray-600 dark:text-gray-400 text-sm">$9/mo</p>
</label>
))}
</div>`,
    preview: <CardRadio />,
  },
  {
    name: 'IconRadio',
    component: IconRadio,
    code: `<div className="component">
  {/* IconRadio */}
</div>`,
    preview: <IconRadio />,
  },
  {
    name: 'PillRadio',
    component: PillRadio,
    code: `<div className="flex flex-wrap gap-2">
{['React', 'Vue', 'Angular', 'Svelte'].map((tech, i) => (
<label key={i} className="cursor-pointer">
<input type="radio" name="pillRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full peer-checked:bg-blue-600 peer-checked:text-white transition-all font-medium text-sm">
{tech}
</div>
</label>
))}
</div>`,
    preview: <PillRadio />,
  },
  {
    name: 'ImageRadio',
    component: ImageRadio,
    code: `<div className="grid grid-cols-2 gap-4">
{['Light', 'Dark'].map((theme, i) => (
<label key={i} className="relative block cursor-pointer">
<input type="radio" name="imageRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className={'h-32 rounded-xl peer-checked:ring-4 peer-checked:ring-blue-500 transition-all ' + (i === 0 ? 'bg-gradient-to-br from-blue-100 to-purple-100' : 'bg-gradient-to-br from-gray-800 to-gray-900')}>
<div className="flex items-center justify-center h-full">
<span className={'text-xl font-bold ' + (i === 0 ? 'text-gray-900' : 'text-white')}>{theme}</span>
</div>
</div>
</label>
))}
</div>`,
    preview: <ImageRadio />,
  },
  {
    name: 'MinimalRadio',
    component: MinimalRadio,
    code: `<div className="space-y-2">
{['Small', 'Medium', 'Large'].map((size, i) => (
<label key={i} className="flex items-center gap-3 cursor-pointer">
<input type="radio" name="minimalRadio" className="w-4 h-4 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 focus:ring-0" defaultChecked={i === 1} />
<span className="text-gray-700 dark:text-gray-300">{size}</span>
</label>
))}
</div>`,
    preview: <MinimalRadio />,
  },
  {
    name: 'ToggleRadio',
    component: ToggleRadio,
    code: `<div className="flex gap-0 border-2 border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
{['Day', 'Week', 'Month', 'Year'].map((period, i) => (
<label key={i} className="flex-1 relative">
<input type="radio" name="toggleRadio" className="sr-only peer" defaultChecked={i === 2} />
<div className="px-4 py-3 text-center text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white transition-all border-r border-gray-300 dark:border-gray-600 last:border-r-0">
{period}
</div>
</label>
))}
</div>`,
    preview: <ToggleRadio />,
  },
  {
    name: 'ColorSwatchRadio',
    component: ColorSwatchRadio,
    code: `<div className="component">
  {/* ColorSwatchRadio */}
</div>`,
    preview: <ColorSwatchRadio />,
  },
  {
    name: 'ListRadio',
    component: ListRadio,
    code: `<div className="component">
  {/* ListRadio */}
</div>`,
    preview: <ListRadio />,
  },
  {
    name: 'BadgeRadio',
    component: BadgeRadio,
    code: `<div className="flex flex-wrap gap-2">
{['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size, i) => (
<label key={i} className="cursor-pointer">
<input type="radio" name="badgeRadio" className="sr-only peer" defaultChecked={i === 2} />
<div className="w-12 h-12 flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white text-gray-700 dark:text-gray-300 font-medium transition-all">
{size}
</div>
</label>
))}
</div>`,
    preview: <BadgeRadio />,
  },
  {
    name: 'GradientRadio',
    component: GradientRadio,
    code: `<div className="space-y-3">
{['Option A', 'Option B', 'Option C'].map((opt, i) => (
<label key={i} className="flex items-center gap-3 cursor-pointer">
<input type="radio" name="gradientRadio" className="w-5 h-5 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 border-0 checked:bg-gradient-to-r checked:from-purple-600 checked:to-pink-600" defaultChecked={i === 0} />
<span className="text-gray-700 dark:text-gray-300">{opt}</span>
</label>
))}
</div>`,
    preview: <GradientRadio />,
  },
  {
    name: 'NeonRadio',
    component: NeonRadio,
    code: `<div className="space-y-3 bg-black p-6 rounded-xl">
{['Neon Blue', 'Neon Pink', 'Neon Green'].map((opt, i) => (
<label key={i} className="flex items-center gap-3 cursor-pointer">
<input type="radio" name="neonRadio" className="w-5 h-5 text-cyan-400 bg-gray-900 border-2 border-cyan-400 checked:shadow-[0_0_10px_rgba(34,211,238,0.8)]" defaultChecked={i === 0} />
<span className="text-cyan-400">{opt}</span>
</label>
))}
</div>`,
    preview: <NeonRadio />,
  },
  {
    name: 'SegmentedRadio',
    component: SegmentedRadio,
    code: `<div className="inline-flex border-2 border-gray-200 dark:border-gray-700 rounded-xl p-1">
{['Personal', 'Business', 'Enterprise'].map((type, i) => (
<label key={i} className="relative">
<input type="radio" name="segmentedRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className="px-6 py-2 text-sm font-medium cursor-pointer peer-checked:bg-blue-600 peer-checked:text-white rounded-lg transition-all text-gray-700 dark:text-gray-300">
{type}
</div>
</label>
))}
</div>`,
    preview: <SegmentedRadio />,
  },
  {
    name: 'BoxRadio',
    component: BoxRadio,
    code: `<div className="grid grid-cols-2 gap-4">
{[1, 2, 3, 4].map(num => (
<label key={num} className="relative block p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-2xl cursor-pointer hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:shadow-xl">
<input type="radio" name="boxRadio" className="absolute top-4 right-4 w-6 h-6 text-blue-600" defaultChecked={num === 1} />
<div className="text-center">
<div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{num}</div>
<p className="text-sm text-gray-600 dark:text-gray-400">Option {num}</p>
</div>
</label>
))}
</div>`,
    preview: <BoxRadio />,
  },
  {
    name: 'TabRadio',
    component: TabRadio,
    code: `<div className="border-b-2 border-gray-200 dark:border-gray-700">
<div className="flex gap-8">
{['Profile', 'Settings', 'Notifications'].map((tab, i) => (
<label key={i} className="relative cursor-pointer">
<input type="radio" name="tabRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className="pb-4 text-gray-600 dark:text-gray-400 peer-checked:text-blue-600 peer-checked:border-b-2 peer-checked:border-blue-600 font-medium transition-all">
{tab}
</div>
</label>
))}
</div>
</div>`,
    preview: <TabRadio />,
  },
  {
    name: 'CompactRadio',
    component: CompactRadio,
    code: `<div className="inline-flex gap-1">
{['1x', '2x', '4x', '8x'].map((multiplier, i) => (
<label key={i} className="cursor-pointer">
<input type="radio" name="compactRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className="px-3 py-1 text-xs font-bold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 peer-checked:bg-green-600 peer-checked:text-white rounded transition-all">
{multiplier}
</div>
</label>
))}
</div>`,
    preview: <CompactRadio />,
  },
  {
    name: 'StarRatingRadio',
    component: StarRatingRadio,
    code: `<div className="flex gap-2">
{[1, 2, 3, 4, 5].map(star => (
<label key={star} className="cursor-pointer">
<input type="radio" name="starRadio" className="sr-only peer" defaultChecked={star === 4} />
<svg className="w-10 h-10 text-gray-300 peer-checked:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
</svg>
</label>
))}
</div>`,
    preview: <StarRatingRadio />,
  },
  {
    name: 'EmojiFeedbackRadio',
    component: EmojiFeedbackRadio,
    code: `<div className="component">
  {/* EmojiFeedbackRadio */}
</div>`,
    preview: <EmojiFeedbackRadio />,
  },
  {
    name: 'ThumbsRadio',
    component: ThumbsRadio,
    code: `<div className="flex gap-4">
{['👍', '👎'].map((thumb, i) => (
<label key={i} className="cursor-pointer">
<input type="radio" name="thumbsRadio" className="sr-only peer" defaultChecked={i === 0} />
<div className="text-6xl opacity-30 peer-checked:opacity-100 peer-checked:scale-110 transition-all">
{thumb}
</div>
</label>
))}
</div>`,
    preview: <ThumbsRadio />,
  },
  {
    name: 'DotRadio',
    component: DotRadio,
    code: `<div className="flex gap-3">
{[1, 2, 3, 4, 5].map(dot => (
<label key={dot} className="cursor-pointer">
<input type="radio" name="dotRadio" className="sr-only peer" defaultChecked={dot === 3} />
<div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-blue-600 peer-checked:scale-150 transition-all"></div>
</label>
))}
</div>`,
    preview: <DotRadio />,
  },
  {
    name: 'VerticalRadio',
    component: VerticalRadio,
    code: `<div className="space-y-2">
{['Option 1', 'Option 2', 'Option 3', 'Option 4'].map((opt, i) => (
<label key={i} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 has-[:checked]:bg-blue-100 dark:has-[:checked]:bg-blue-900/30">
<input type="radio" name="verticalRadio" className="w-4 h-4 text-blue-600" defaultChecked={i === 0} />
<span className="text-gray-700 dark:text-gray-300">{opt}</span>
</label>
))}
</div>`,
    preview: <VerticalRadio />,
  },
  {
    name: 'MaterialRadio',
    component: MaterialRadio,
    code: `<div className="space-y-3">
{['Option A', 'Option B', 'Option C'].map((opt, i) => (
<label key={i} className="flex items-center gap-3 cursor-pointer">
<div className="relative">
<input type="radio" name="materialRadio" className="w-5 h-5 appearance-none bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full checked:border-blue-600 checked:border-[6px] cursor-pointer transition-all" defaultChecked={i === 0} />
</div>
<span className="text-gray-700 dark:text-gray-300">{opt}</span>
</label>
))}
</div>`,
    preview: <MaterialRadio />,
  },
  {
    name: 'ChipRadio',
    component: ChipRadio,
    code: `<div className="component">
  {/* ChipRadio */}
</div>`,
    preview: <ChipRadio />,
  },
  {
    name: 'IconLabelRadio',
    component: IconLabelRadio,
    code: `<div className="component">
  {/* IconLabelRadio */}
</div>`,
    preview: <IconLabelRadio />,
  },
  {
    name: 'TileRadio',
    component: TileRadio,
    code: `<div className="grid grid-cols-4 gap-3">
{[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
<label key={num} className="cursor-pointer">
<input type="radio" name="tileRadio" className="sr-only peer" defaultChecked={num === 3} />
<div className="aspect-square flex items-center justify-center bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg peer-checked:border-blue-600 peer-checked:bg-blue-600 peer-checked:text-white text-gray-700 dark:text-gray-300 font-bold text-xl transition-all">
{num}
</div>
</label>
))}
</div>`,
    preview: <TileRadio />,
  },
  {
    name: 'PricingRadio',
    component: PricingRadio,
    code: `<div className="component">
  {/* PricingRadio */}
</div>`,
    preview: <PricingRadio />,
  },
  {
    name: 'TimelineRadio',
    component: TimelineRadio,
    code: `<div className="space-y-4">
{['Morning', 'Afternoon', 'Evening'].map((time, i) => (
<label key={i} className="flex items-center gap-4 cursor-pointer group">
<input type="radio" name="timelineRadio" className="w-6 h-6 text-purple-600" defaultChecked={i === 0} />
<div className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg group-has-[:checked]:bg-purple-100 dark:group-has-[:checked]:bg-purple-900/20 transition-all">
<span className="font-medium text-gray-900 dark:text-white">{time}</span>
</div>
</label>
))}
</div>`,
    preview: <TimelineRadio />,
  },
  {
    name: 'StackedRadio',
    component: StackedRadio,
    code: `<div className="component">
  {/* StackedRadio */}
</div>`,
    preview: <StackedRadio />,
  },
];
