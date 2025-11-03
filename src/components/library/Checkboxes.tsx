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



export const ToggleCheckbox: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <input type="checkbox" className="w-12 h-6 rounded-full text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 cursor-pointer dark:bg-gray-700 transition-all" defaultChecked />
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">Toggle</label>
    </div>
  );
};


// Toggle Switch Checkbox
export const ToggleSwitchCheckbox: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <span className="text-gray-700 dark:text-gray-300">Enable notifications</span>
    </div>
  );
};

// Card Checkbox
export const CardCheckbox: React.FC = () => {
  return (
    <label className="relative block w-full p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 transition-all has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
      <input type="checkbox" className="absolute top-4 right-4 w-5 h-5 text-blue-600 rounded" />
      <div className="pr-8">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Premium Plan</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">Get access to all premium features</p>
      </div>
    </label>
  );
};

// Icon Checkbox
export const IconCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center peer-checked:bg-green-500 transition-colors">
          <svg className="w-6 h-6 text-gray-400 peer-checked:text-white hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">I agree to terms</span>
    </label>
  );
};

// Gradient Checkbox
export const GradientCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-6 h-6 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 border-0 rounded focus:ring-2 focus:ring-purple-500 checked:bg-gradient-to-r checked:from-purple-600 checked:to-pink-600" />
      <span className="text-gray-700 dark:text-gray-300">Subscribe to newsletter</span>
    </label>
  );
};

// Minimal Checkbox
export const MinimalCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input type="checkbox" className="w-5 h-5 text-gray-900 dark:text-white bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded focus:ring-0 focus:ring-offset-0" />
      <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
    </label>
  );
};

// Neon Checkbox
export const NeonCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-6 h-6 text-cyan-400 bg-gray-900 border-2 border-cyan-400 rounded focus:ring-2 focus:ring-cyan-400 checked:bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] checked:shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
      <span className="text-cyan-400">Neon mode</span>
    </label>
  );
};

// Pill Checkbox
export const PillCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 has-[:checked]:bg-blue-600 has-[:checked]:text-white transition-all">
      <input type="checkbox" className="mr-2 w-4 h-4" />
      <span className="text-sm font-medium">JavaScript</span>
    </label>
  );
};

// Image Checkbox
export const ImageCheckbox: React.FC = () => {
  return (
    <label className="relative block w-32 h-32 cursor-pointer group">
      <input type="checkbox" className="absolute top-2 right-2 w-5 h-5 text-blue-600 rounded z-10" />
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg group-hover:scale-105 transition-transform">
        <div className="flex items-center justify-center h-full text-white text-xl font-bold">Option 1</div>
      </div>
    </label>
  );
};

// List Item Checkbox
export const ListItemCheckbox: React.FC = () => {
  return (
    <label className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750 has-[:checked]:border-green-500 has-[:checked]:bg-green-50 dark:has-[:checked]:bg-green-900/20">
      <input type="checkbox" className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 dark:text-white">Task Item</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">Complete this task</p>
      </div>
    </label>
  );
};

// Strikethrough Checkbox
export const StrikethroughCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
      <span className="text-gray-700 dark:text-gray-300 group-has-[:checked]:line-through group-has-[:checked]:text-gray-400 transition-all">Complete onboarding</span>
    </label>
  );
};

// Color Picker Checkbox
export const ColorPickerCheckbox: React.FC = () => {
  return (
    <div className="flex gap-2">
      {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'].map((color, i) => (
        <label key={i} className="relative cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className={`w-10 h-10 ${color} rounded-full peer-checked:ring-4 peer-checked:ring-offset-2 peer-checked:ring-gray-400 transition-all`}></div>
        </label>
      ))}
    </div>
  );
};

// Badge Checkbox
export const BadgeCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 has-[:checked]:bg-blue-100 dark:has-[:checked]:bg-blue-900/30 has-[:checked]:text-blue-700 dark:has-[:checked]:text-blue-300 transition-all">
      <input type="checkbox" className="w-4 h-4 rounded" />
      <span className="text-sm font-medium">Featured</span>
    </label>
  );
};

// Star Rating Checkbox
export const StarRatingCheckbox: React.FC = () => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(star => (
        <label key={star} className="cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <svg className="w-8 h-8 text-gray-300 peer-checked:text-yellow-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </label>
      ))}
    </div>
  );
};

// Plus/Minus Checkbox
export const PlusMinusCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <div className="relative w-6 h-6">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded peer-checked:bg-green-500 flex items-center justify-center transition-colors">
          <span className="text-gray-600 dark:text-gray-300 peer-checked:text-white text-lg font-bold peer-checked:hidden">+</span>
          <span className="text-white text-lg font-bold hidden peer-checked:inline">−</span>
        </div>
      </div>
      <span className="text-gray-700 dark:text-gray-300">Add to favorites</span>
    </label>
  );
};

// Rounded Square Checkbox
export const RoundedSquareCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-6 h-6 text-indigo-600 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500" />
      <span className="text-gray-700 dark:text-gray-300">Accept terms and conditions</span>
    </label>
  );
};

// 3D Effect Checkbox
export const ThreeDCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-7 h-7 text-blue-600 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] checked:shadow-[0_2px_0_0_rgba(0,0,0,0.1)] checked:translate-y-0.5 transition-all" />
      <span className="text-gray-700 dark:text-gray-300 font-medium">3D checkbox</span>
    </label>
  );
};

// Inline Label Checkbox
export const InlineLabelCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20 transition-all">
      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Newsletter</span>
    </label>
  );
};

// Circular Checkbox
export const CircularCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-6 h-6 text-pink-600 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:ring-2 focus:ring-pink-500" />
      <span className="text-gray-700 dark:text-gray-300">Marketing emails</span>
    </label>
  );
};

// Segmented Control Checkbox
export const SegmentedControlCheckbox: React.FC = () => {
  return (
    <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
      {['Daily', 'Weekly', 'Monthly'].map(option => (
        <label key={option} className="relative">
          <input type="checkbox" className="sr-only peer" />
          <div className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 cursor-pointer peer-checked:bg-white dark:peer-checked:bg-gray-700 peer-checked:text-gray-900 dark:peer-checked:text-white peer-checked:shadow rounded-md transition-all">
            {option}
          </div>
        </label>
      ))}
    </div>
  );
};

// Large Feature Checkbox
export const LargeFeatureCheckbox: React.FC = () => {
  return (
    <label className="relative block w-full max-w-sm p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-2 border-purple-200 dark:border-gray-600 rounded-2xl cursor-pointer hover:border-purple-400 dark:hover:border-purple-500 has-[:checked]:border-purple-600 has-[:checked]:shadow-xl transition-all">
      <input type="checkbox" className="absolute top-4 right-4 w-6 h-6 text-purple-600 rounded-lg" />
      <div className="pr-10">
        <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Premium Features</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Unlock all advanced features and priority support</p>
      </div>
    </label>
  );
};

// Checkbox with Counter
export const CheckboxWithCounter: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <input type="checkbox" className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
      <span className="text-gray-700 dark:text-gray-300">Comments</span>
      <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full">23</span>
    </label>
  );
};

// Animated Slide Checkbox
export const AnimatedSlideCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <div className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <input type="checkbox" className="sr-only peer" />
        <div className="absolute inset-0 bg-green-500 translate-x-[-100%] peer-checked:translate-x-0 transition-transform duration-300"></div>
        <div className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-8 transition-transform duration-300"></div>
      </div>
      <span className="text-gray-700 dark:text-gray-300">Auto-save</span>
    </label>
  );
};

// Checkbox with Icon Inside
export const CheckboxWithIconInside: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input type="checkbox" className="w-8 h-8 appearance-none bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg checked:bg-blue-600 checked:border-blue-600 cursor-pointer transition-all" />
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-700 dark:text-gray-300">Enable feature</span>
    
    </label>
  );
};

// Multi-line Checkbox
export const MultilineCheckbox: React.FC = () => {
  return (
    <label className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-750">
      <input type="checkbox" className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-500" />
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Privacy Policy</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">I agree to the privacy policy and terms of service. By checking this box, you consent to our data collection practices.</p>
      </div>
    </label>
  );
};

// Checkbox Group with Border
export const CheckboxGroupBorder: React.FC = () => {
  return (
    <div className="space-y-2 p-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl">
      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Select your interests</h4>
      {['Technology', 'Design', 'Business', 'Marketing'].map(interest => (
        <label key={interest} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
          <span className="text-gray-700 dark:text-gray-300">{interest}</span>
        </label>
      ))}
    </div>
  );
};

// Checkbox with Description Below
export const CheckboxWithDescriptionBelow: React.FC = () => {
  return (
    <label className="block p-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer hover:border-blue-500 dark:hover:border-blue-500 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-blue-900/20">
      <div className="flex items-center gap-3 mb-2">
        <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
        <span className="font-semibold text-gray-900 dark:text-white">Enable two-factor authentication</span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 ml-8">Add an extra layer of security to your account with 2FA</p>
    </label>
  );
};

// Disabled Checkbox Style
export const DisabledStyledCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 opacity-50 cursor-not-allowed">
      <input type="checkbox" disabled className="w-5 h-5 text-gray-400 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded cursor-not-allowed" />
      <span className="text-gray-500 dark:text-gray-500">Unavailable option</span>
    </label>
  );
};

// Price Plan Checkbox
export const PricePlanCheckbox: React.FC = () => {
  return (
    <label className="relative block w-full max-w-xs p-6 bg-white dark:bg-gray-800 border-3 border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer hover:border-green-500 dark:hover:border-green-500 has-[:checked]:border-green-600 has-[:checked]:shadow-2xl transition-all">
      <input type="checkbox" className="absolute top-4 right-4 w-6 h-6 text-green-600 rounded" />
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Pro Plan</h3>
        <div className="text-4xl font-bold text-green-600 mb-4">$29<span className="text-lg text-gray-500">/mo</span></div>
        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <li>✓ Unlimited projects</li>
          <li>✓ Priority support</li>
          <li>✓ Advanced analytics</li>
        </ul>
      </div>
    </label>
  );
};

// Status Indicator Checkbox
export const StatusIndicatorCheckbox: React.FC = () => {
  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input type="checkbox" className="w-5 h-5 text-green-600 rounded focus:ring-green-500" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 opacity-0 group-has-[:checked]:opacity-100 transition-opacity"></div>
      </div>
      <span className="text-gray-700 dark:text-gray-300">Active status</span>
    </label>
  );
};

export const checkboxComponents = [
  {
    name: 'CheckboxInput',
    component: CheckboxInput,
    code: `<div className="component">
  {/* CheckboxInput */}
</div>`,
    preview: <CheckboxInput />,
  },
  {
    name: 'CheckboxGroup',
    component: CheckboxGroup,
    code: `<div className="component">
  {/* CheckboxGroup */}
</div>`,
    preview: <CheckboxGroup />,
  },
  {
    name: 'ColoredCheckbox',
    component: ColoredCheckbox,
    code: `<div className="component">
  {/* ColoredCheckbox */}
</div>`,
    preview: <ColoredCheckbox />,
  },
  {
    name: 'CheckboxWithDescription',
    component: CheckboxWithDescription,
    code: `<div className="component">
  {/* CheckboxWithDescription */}
</div>`,
    preview: <CheckboxWithDescription />,
  },
  {
    name: 'CheckboxCard',
    component: CheckboxCard,
    code: `<div className="component">
  {/* CheckboxCard */}
</div>`,
    preview: <CheckboxCard />,
  },
  {
    name: 'ToggleCheckbox',
    component: ToggleCheckbox,
    code: `<div className="component">
  {/* ToggleCheckbox */}
</div>`,
    preview: <ToggleCheckbox />,
  },
  {
    name: 'ToggleSwitchCheckbox',
    component: ToggleSwitchCheckbox,
    code: `<div className="component">
  {/* ToggleSwitchCheckbox */}
</div>`,
    preview: <ToggleSwitchCheckbox />,
  },
  {
    name: 'CardCheckbox',
    component: CardCheckbox,
    code: `<div className="component">
  {/* CardCheckbox */}
</div>`,
    preview: <CardCheckbox />,
  },
  {
    name: 'IconCheckbox',
    component: IconCheckbox,
    code: `<div className="component">
  {/* IconCheckbox */}
</div>`,
    preview: <IconCheckbox />,
  },
  {
    name: 'GradientCheckbox',
    component: GradientCheckbox,
    code: `<div className="component">
  {/* GradientCheckbox */}
</div>`,
    preview: <GradientCheckbox />,
  },
  {
    name: 'MinimalCheckbox',
    component: MinimalCheckbox,
    code: `<div className="component">
  {/* MinimalCheckbox */}
</div>`,
    preview: <MinimalCheckbox />,
  },
  {
    name: 'NeonCheckbox',
    component: NeonCheckbox,
    code: `<div className="component">
  {/* NeonCheckbox */}
</div>`,
    preview: <NeonCheckbox />,
  },
  {
    name: 'PillCheckbox',
    component: PillCheckbox,
    code: `<div className="component">
  {/* PillCheckbox */}
</div>`,
    preview: <PillCheckbox />,
  },
  {
    name: 'ImageCheckbox',
    component: ImageCheckbox,
    code: `<div className="component">
  {/* ImageCheckbox */}
</div>`,
    preview: <ImageCheckbox />,
  },
  {
    name: 'ListItemCheckbox',
    component: ListItemCheckbox,
    code: `<div className="component">
  {/* ListItemCheckbox */}
</div>`,
    preview: <ListItemCheckbox />,
  },
  {
    name: 'StrikethroughCheckbox',
    component: StrikethroughCheckbox,
    code: `<div className="component">
  {/* StrikethroughCheckbox */}
</div>`,
    preview: <StrikethroughCheckbox />,
  },
  {
    name: 'ColorPickerCheckbox',
    component: ColorPickerCheckbox,
    code: `<div className="component">
  {/* ColorPickerCheckbox */}
</div>`,
    preview: <ColorPickerCheckbox />,
  },
  {
    name: 'BadgeCheckbox',
    component: BadgeCheckbox,
    code: `<div className="component">
  {/* BadgeCheckbox */}
</div>`,
    preview: <BadgeCheckbox />,
  },
  {
    name: 'StarRatingCheckbox',
    component: StarRatingCheckbox,
    code: `<div className="component">
  {/* StarRatingCheckbox */}
</div>`,
    preview: <StarRatingCheckbox />,
  },
  {
    name: 'PlusMinusCheckbox',
    component: PlusMinusCheckbox,
    code: `<div className="component">
  {/* PlusMinusCheckbox */}
</div>`,
    preview: <PlusMinusCheckbox />,
  },
  {
    name: 'RoundedSquareCheckbox',
    component: RoundedSquareCheckbox,
    code: `<div className="component">
  {/* RoundedSquareCheckbox */}
</div>`,
    preview: <RoundedSquareCheckbox />,
  },
  {
    name: 'ThreeDCheckbox',
    component: ThreeDCheckbox,
    code: `<div className="component">
  {/* ThreeDCheckbox */}
</div>`,
    preview: <ThreeDCheckbox />,
  },
  {
    name: 'InlineLabelCheckbox',
    component: InlineLabelCheckbox,
    code: `<div className="component">
  {/* InlineLabelCheckbox */}
</div>`,
    preview: <InlineLabelCheckbox />,
  },
  {
    name: 'CircularCheckbox',
    component: CircularCheckbox,
    code: `<div className="component">
  {/* CircularCheckbox */}
</div>`,
    preview: <CircularCheckbox />,
  },
  {
    name: 'SegmentedControlCheckbox',
    component: SegmentedControlCheckbox,
    code: `<div className="component">
  {/* SegmentedControlCheckbox */}
</div>`,
    preview: <SegmentedControlCheckbox />,
  },
  {
    name: 'LargeFeatureCheckbox',
    component: LargeFeatureCheckbox,
    code: `<div className="component">
  {/* LargeFeatureCheckbox */}
</div>`,
    preview: <LargeFeatureCheckbox />,
  },
  {
    name: 'CheckboxWithCounter',
    component: CheckboxWithCounter,
    code: `<div className="component">
  {/* CheckboxWithCounter */}
</div>`,
    preview: <CheckboxWithCounter />,
  },
  {
    name: 'AnimatedSlideCheckbox',
    component: AnimatedSlideCheckbox,
    code: `<div className="component">
  {/* AnimatedSlideCheckbox */}
</div>`,
    preview: <AnimatedSlideCheckbox />,
  },
  {
    name: 'CheckboxWithIconInside',
    component: CheckboxWithIconInside,
    code: `<div className="component">
  {/* CheckboxWithIconInside */}
</div>`,
    preview: <CheckboxWithIconInside />,
  },
  {
    name: 'MultilineCheckbox',
    component: MultilineCheckbox,
    code: `<div className="component">
  {/* MultilineCheckbox */}
</div>`,
    preview: <MultilineCheckbox />,
  },
  {
    name: 'CheckboxGroupBorder',
    component: CheckboxGroupBorder,
    code: `<div className="component">
  {/* CheckboxGroupBorder */}
</div>`,
    preview: <CheckboxGroupBorder />,
  },
  {
    name: 'CheckboxWithDescriptionBelow',
    component: CheckboxWithDescriptionBelow,
    code: `<div className="component">
  {/* CheckboxWithDescriptionBelow */}
</div>`,
    preview: <CheckboxWithDescriptionBelow />,
  },
  {
    name: 'DisabledStyledCheckbox',
    component: DisabledStyledCheckbox,
    code: `<div className="component">
  {/* DisabledStyledCheckbox */}
</div>`,
    preview: <DisabledStyledCheckbox />,
  },
  {
    name: 'PricePlanCheckbox',
    component: PricePlanCheckbox,
    code: `<div className="component">
  {/* PricePlanCheckbox */}
</div>`,
    preview: <PricePlanCheckbox />,
  },
  {
    name: 'StatusIndicatorCheckbox',
    component: StatusIndicatorCheckbox,
    code: `<div className="component">
  {/* StatusIndicatorCheckbox */}
</div>`,
    preview: <StatusIndicatorCheckbox />,
  },
];
