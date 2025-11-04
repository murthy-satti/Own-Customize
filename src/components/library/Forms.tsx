import React from 'react';

// Form Type 1: Login Form
export const LoginForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Form Type 2: Contact Form
export const ContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

// Form Type 3: Newsletter Form
export const NewsletterForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-3">Subscribe to our Newsletter</h2>
      <p className="text-blue-100 mb-4">Get the latest updates delivered to your inbox</p>
      <form className="space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-white outline-none"
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

// Form Type 4: Registration Form
export const RegistrationForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

// Form Type 5: Search Form
export const SearchForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl">
      <form className="flex gap-2">
        <input
          type="search"
          placeholder="Search for anything..."
          className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
        />
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

// Multi-Step Wizard Form with Progress
export const MultiStepWizardForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Step 1 of 3</span>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">33%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
      <form className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
          <input type="tel" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div className="flex gap-3 pt-4">
          <button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Back</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Next Step</button>
        </div>
      </form>
    </div>
  );
};

// Split Screen Form (Form + Image)
export const SplitLayoutForm: React.FC = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
      <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg text-white/90">Create your account and start your journey</p>
        </div>
      </div>
      <div className="md:w-1/2 p-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sign Up</h3>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          <input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Create Account</button>
        </form>
      </div>
    </div>
  );
};

// File Upload Form
export const FileUploadForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upload Documents</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Document Title</label>
          <input type="text" placeholder="Enter title" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files</label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
            <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
            <p className="text-gray-600 dark:text-gray-400 mb-1">Click to upload or drag and drop</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea rows={4} placeholder="Add a description..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
        </div>
        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Upload Document</button>
      </form>
    </div>
  );
};

// Survey/Quiz Form
export const SurveyQuizForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customer Satisfaction Survey</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Help us improve by answering a few questions</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">How satisfied are you with our service?</label>
          <div className="space-y-2">
            {['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map(option => (
              <label key={option} className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="radio" name="satisfaction" className="w-4 h-4 text-blue-600" />
                <span className="ml-3 text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">What features would you like to see?</label>
          <div className="space-y-2">
            {['Dark Mode', 'Mobile App', 'API Access', 'Advanced Analytics'].map(option => (
              <label key={option} className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
                <span className="ml-3 text-gray-700 dark:text-gray-300">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Submit Survey</button>
      </form>
    </div>
  );
};

// Floating Label Form
export const FloatingLabelForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h2>
      <form className="space-y-6">
        <div className="relative">
          <input type="text" id="floatName" placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white" />
          <label htmlFor="floatName" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Your Name</label>
        </div>
        <div className="relative">
          <input type="email" id="floatEmail" placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white" />
          <label htmlFor="floatEmail" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Email Address</label>
        </div>
        <div className="relative">
          <textarea id="floatMessage" rows={4} placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white resize-none"></textarea>
          <label htmlFor="floatMessage" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Your Message</label>
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-lg">Send Message</button>
      </form>
    </div>
  );
};

// Payment Card Form
export const CreditCardForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Details</h2>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
          <div className="relative">
            <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
            <div className="absolute right-3 top-3 flex gap-1">
              <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
            <input type="text" placeholder="MM/YY" maxLength={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CVV</label>
            <input type="text" placeholder="123" maxLength={3} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cardholder Name</label>
          <input type="text" placeholder="JOHN DOE" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white uppercase" />
        </div>
        <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg">Pay Now</button>
      </form>
    </div>
  );
};

// Profile Form with Avatar
export const ProfileEditForm: React.FC = () => {
  return (
    <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Edit Profile</h2>
      <form className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">JD</div>
          <div>
            <button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm mb-2">Change Photo</button>
            <p className="text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size 2MB</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
            <input type="text" defaultValue="John" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
            <input type="text" defaultValue="Doe" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
          <textarea rows={4} placeholder="Tell us about yourself..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
        </div>
        <div className="flex gap-3">
          <button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

// Inline Horizontal Form
export const InlineHorizontalForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-900 dark:to-blue-900 rounded-lg shadow-xl">
      <h3 className="text-xl font-bold text-white mb-4">Get Early Access</h3>
      <form className="flex flex-col md:flex-row gap-3">
        <input type="text" placeholder="Your name" className="flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white" />
        <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white" />
        <button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 whitespace-nowrap">Sign Up</button>
      </form>
    </div>
  );
};

// Conditional Fields Form
export const ConditionalFieldsForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Registration</h2>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Attendance Type</label>
          <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white">
            <option>In Person</option>
            <option>Virtual</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
          <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">In-Person Attendee Details</h4>
          <div className="space-y-3">
            <input type="text" placeholder="T-Shirt Size" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
            <input type="text" placeholder="Dietary Restrictions" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
        </div>
        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Register</button>
      </form>
    </div>
  );
};

// Subscription Pricing Form
export const SubscriptionPricingForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Choose Your Plan</h2>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Basic', price: '$9', features: ['5 Projects', '10GB Storage'] },
            { name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage'], popular: true },
            { name: 'Enterprise', price: '$99', features: ['Everything', 'Priority Support'] }
          ].map(plan => (
            <label key={plan.name} className={`relative p-6 border-2 rounded-xl cursor-pointer transition-all ${plan.popular ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'}`}>
              <input type="radio" name="plan" className="absolute top-4 right-4 w-4 h-4" defaultChecked={plan.popular} />
              {plan.popular && <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">POPULAR</span>}
              <div className="text-center mt-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white my-3">{plan.price}<span className="text-sm text-gray-500">/mo</span></p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {plan.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </label>
          ))}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-lg">Continue to Payment</button>
      </form>
    </div>
  );
};

// Adding 10 more diverse forms to reach 20 total...

// Address Form with Multiple Fields
export const AddressForm: React.FC = () => {
  return (
    <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shipping Address</h2>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          <input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <input type="text" placeholder="Street Address" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="City" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
          <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white">
            <option>State</option>
            <option>California</option>
            <option>New York</option>
            <option>Texas</option>
          </select>
          <input type="text" placeholder="ZIP Code" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Address</button>
      </form>
    </div>
  );
};

// Job Application Form
export const JobApplicationForm: React.FC = () => {
  return (
    <div className="w-full max-w-3xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join Our Team</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Fill out the application below</p>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="First Name *" className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
          <input type="text" placeholder="Last Name *" className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
        </div>
        <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
        <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Position Applying For</label>
          <select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white">
            <option>Software Engineer</option>
            <option>Product Manager</option>
            <option>Designer</option>
            <option>Marketing Manager</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Resume (PDF)</label>
          <input type="file" accept=".pdf" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cover Letter</label>
          <textarea rows={5} placeholder="Tell us why you're a great fit..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white resize-none"></textarea>
        </div>
        <button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg">Submit Application</button>
      </form>
    </div>
  );
};

// Booking Reservation Form
export const BookingReservationForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Make a Reservation</h2>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-in Date</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-out Date</label>
            <input type="date" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Guests</label>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Room Type</label>
            <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Suite</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
          <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
          <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Special Requests</label>
          <textarea rows={3} placeholder="Any special requirements..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
        </div>
        <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 shadow-lg">Book Now</button>
      </form>
    </div>
  );
};

// Feedback Rating Form
export const FeedbackRatingForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rate Your Experience</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">We'd love to hear your feedback!</p>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Overall Satisfaction</label>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button key={star} type="button" className="text-4xl text-gray-300 hover:text-yellow-400 transition-colors">★</button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Service Quality</label>
          <div className="space-y-2">
            <label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
              <span className="text-gray-700 dark:text-gray-300">Excellent</span>
              <input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
            </label>
            <label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
              <span className="text-gray-700 dark:text-gray-300">Good</span>
              <input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
            </label>
            <label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
              <span className="text-gray-700 dark:text-gray-300">Fair</span>
              <input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Additional Comments</label>
          <textarea rows={4} placeholder="Tell us more..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white resize-none"></textarea>
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 shadow-lg">Submit Feedback</button>
      </form>
    </div>
  );
};

// Compact Newsletter Form
export const CompactNewsletterForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-6 bg-gray-900 dark:bg-black rounded-xl shadow-xl">
      <h3 className="text-lg font-bold text-white mb-2">Stay in the loop</h3>
      <p className="text-gray-400 text-sm mb-4">Get updates delivered to your inbox</p>
      <form className="space-y-3">
        <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-lg border-2 border-gray-700 bg-gray-800 text-white focus:border-blue-500 outline-none" />
        <button className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Subscribe</button>
        <p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe anytime.</p>
      </form>
    </div>
  );
};

// Two Column Contact Form
export const TwoColumnContactForm: React.FC = () => {
  return (
    <div className="w-full max-w-5xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send us a message</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
            <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
            <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Send Message</button>
          </form>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-700 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📧</div>
              <div><p className="font-medium">Email</p><p className="text-sm text-gray-600 dark:text-gray-400">hello@company.com</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📞</div>
              <div><p className="font-medium">Phone</p><p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p></div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📍</div>
              <div><p className="font-medium">Address</p><p className="text-sm text-gray-600 dark:text-gray-400">123 Main St, San Francisco, CA 94102</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Settings Preferences Form
export const SettingsPreferencesForm: React.FC = () => {
  return (
    <div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
      <form className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
          <div className="space-y-3">
            {['Email notifications', 'Push notifications', 'SMS notifications'].map(pref => (
              <label key={pref} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">{pref}</span>
                <input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy</h3>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Profile visibility</span>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white">
                <option>Public</option>
                <option>Friends Only</option>
                <option>Private</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex gap-3 pt-4">
          <button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
          <button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Settings</button>
        </div>
      </form>
    </div>
  );
};

// Password Change Form
export const PasswordChangeForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Change Password</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Ensure your account is secure</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
          <input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
          <input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Must be at least 8 characters</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
          <input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">Password strength: <span className="font-semibold">Strong</span></p>
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 shadow-lg">Update Password</button>
      </form>
    </div>
  );
};

// Support Ticket Form
export const SupportTicketForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submit a Support Ticket</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Our team will respond within 24 hours</p>
      <form className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
          <input type="text" placeholder="Brief description of the issue" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
          <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white">
            <option>Technical Issue</option>
            <option>Billing Question</option>
            <option>Feature Request</option>
            <option>Account Help</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
          <div className="flex gap-2">
            {['Low', 'Medium', 'High', 'Urgent'].map(priority => (
              <label key={priority} className="flex-1 cursor-pointer">
                <input type="radio" name="priority" className="peer hidden" />
                <div className="p-3 text-center border-2 border-gray-300 dark:border-gray-600 rounded-lg peer-checked:border-purple-600 peer-checked:bg-purple-50 dark:peer-checked:bg-purple-900/20 hover:border-purple-400 transition-colors">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{priority}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea rows={6} placeholder="Please provide detailed information about your issue..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Attachments (optional)</label>
          <input type="file" multiple className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white" />
        </div>
        <button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-lg">Submit Ticket</button>
      </form>
    </div>
  );
};

// Team Invitation Form
export const TeamInvitationForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Invite Team Members</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Add new members to collaborate on your workspace</p>
      <form className="space-y-6">
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex gap-3">
              <input type="email" placeholder={`team.member${i}@company.com`} className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white" />
              <select className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white">
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
          ))}
        </div>
        <button type="button" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium text-sm">+ Add another email</button>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Personal Message (optional)</label>
          <textarea rows={3} placeholder="Add a personal message to the invitation..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white resize-none"></textarea>
        </div>
        <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 shadow-lg">Send Invitations</button>
      </form>
    </div>
  );
};

export const formComponents = [
  {
    name: 'LoginForm',
    component: LoginForm,
    code: `<div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input
type="email"
placeholder="Enter your email"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input
type="password"
placeholder="Enter your password"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
>
Login
</button>
</form>
</div>`,
    preview: <LoginForm />,
  },
  {
    name: 'ContactForm',
    component: ContactForm,
    code: `<div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
<input
type="text"
placeholder="Your name"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input
type="email"
placeholder="Your email"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
<textarea
rows={4}
placeholder="Your message"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
/>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
>
Send Message
</button>
</form>
</div>`,
    preview: <ContactForm />,
  },
  {
    name: 'NewsletterForm',
    component: NewsletterForm,
    code: `<div className="w-full max-w-md p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-white mb-3">Subscribe to our Newsletter</h2>
<p className="text-blue-100 mb-4">Get the latest updates delivered to your inbox</p>
<form className="space-y-3">
<input
type="email"
placeholder="Enter your email"
className="w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-white outline-none"
/>
<button
type="submit"
className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
>
Subscribe
</button>
</form>
</div>`,
    preview: <NewsletterForm />,
  },
  {
    name: 'RegistrationForm',
    component: RegistrationForm,
    code: `<div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Create Account</h2>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
<input
type="text"
placeholder="John Doe"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
<input
type="email"
placeholder="john@example.com"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
<input
type="password"
placeholder="Create a password"
className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
/>
</div>
<button
type="submit"
className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
>
Sign Up
</button>
</form>
</div>`,
    preview: <RegistrationForm />,
  },
  {
    name: 'SearchForm',
    component: SearchForm,
    code: `<div className="w-full max-w-2xl">
<form className="flex gap-2">
<input
type="search"
placeholder="Search for anything..."
className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
/>
<button
type="submit"
className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
>
Search
</button>
</form>
</div>`,
    preview: <SearchForm />,
  },
  {
    name: 'MultiStepWizardForm',
    component: MultiStepWizardForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<div className="mb-8">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-medium text-gray-600 dark:text-gray-400">Step 1 of 3</span>
<span className="text-sm font-medium text-gray-600 dark:text-gray-400">33%</span>
</div>
<div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
<div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
</div>
</div>
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Personal Information</h2>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
<input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
<input type="tel" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div className="flex gap-3 pt-4">
<button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Back</button>
<button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Next Step</button>
</div>
</form>
</div>`,
    preview: <MultiStepWizardForm />,
  },
  {
    name: 'SplitLayoutForm',
    component: SplitLayoutForm,
    code: `<div className="w-full max-w-5xl flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800">
<div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 flex items-center justify-center">
<div className="text-white text-center">
<h2 className="text-4xl font-bold mb-4">Join Us Today</h2>
<p className="text-lg text-white/90">Create your account and start your journey</p>
</div>
</div>
<div className="md:w-1/2 p-8">
<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sign Up</h3>
<form className="space-y-4">
<input type="text" placeholder="Full Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="email" placeholder="Email Address" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Create Account</button>
</form>
</div>
</div>`,
    preview: <SplitLayoutForm />,
  },
  {
    name: 'FileUploadForm',
    component: FileUploadForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upload Documents</h2>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Document Title</label>
<input type="text" placeholder="Enter title" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Files</label>
<div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
<svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
<p className="text-gray-600 dark:text-gray-400 mb-1">Click to upload or drag and drop</p>
<p className="text-sm text-gray-500 dark:text-gray-500">PDF, DOC, DOCX up to 10MB</p>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
<textarea rows={4} placeholder="Add a description..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
</div>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Upload Document</button>
</form>
</div>`,
    preview: <FileUploadForm />,
  },
  {
    name: 'SurveyQuizForm',
    component: SurveyQuizForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customer Satisfaction Survey</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">Help us improve by answering a few questions</p>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">How satisfied are you with our service?</label>
<div className="space-y-2">
{['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied'].map(option => (
<label key={option} className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input type="radio" name="satisfaction" className="w-4 h-4 text-blue-600" />
<span className="ml-3 text-gray-700 dark:text-gray-300">{option}</span>
</label>
))}
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">What features would you like to see?</label>
<div className="space-y-2">
{['Dark Mode', 'Mobile App', 'API Access', 'Advanced Analytics'].map(option => (
<label key={option} className="flex items-center p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
<input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
<span className="ml-3 text-gray-700 dark:text-gray-300">{option}</span>
</label>
))}
</div>
</div>
<button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">Submit Survey</button>
</form>
</div>`,
    preview: <SurveyQuizForm />,
  },
  {
    name: 'FloatingLabelForm',
    component: FloatingLabelForm,
    code: `<div className="w-full max-w-lg p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Contact Us</h2>
<form className="space-y-6">
<div className="relative">
<input type="text" id="floatName" placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white" />
<label htmlFor="floatName" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Your Name</label>
</div>
<div className="relative">
<input type="email" id="floatEmail" placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white" />
<label htmlFor="floatEmail" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Email Address</label>
</div>
<div className="relative">
<textarea id="floatMessage" rows={4} placeholder=" " className="peer w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:border-purple-500 outline-none dark:bg-gray-800 dark:text-white resize-none"></textarea>
<label htmlFor="floatMessage" className="absolute left-4 -top-2.5 bg-purple-50 dark:bg-gray-900 px-1 text-sm font-medium text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-purple-600 transition-all">Your Message</label>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 shadow-lg">Send Message</button>
</form>
</div>`,
    preview: <FloatingLabelForm />,
  },
  {
    name: 'CreditCardForm',
    component: CreditCardForm,
    code: `<div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Payment Details</h2>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
<div className="relative">
<input type="text" placeholder="1234 5678 9012 3456" maxLength={19} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
<div className="absolute right-3 top-3 flex gap-1">
<div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded"></div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
<input type="text" placeholder="MM/YY" maxLength={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">CVV</label>
<input type="text" placeholder="123" maxLength={3} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cardholder Name</label>
<input type="text" placeholder="JOHN DOE" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:bg-gray-700 dark:text-white uppercase" />
</div>
<button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg">Pay Now</button>
</form>
</div>`,
    preview: <CreditCardForm />,
  },
  {
    name: 'ProfileEditForm',
    component: ProfileEditForm,
    code: `<div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Edit Profile</h2>
<form className="space-y-6">
<div className="flex items-center gap-6">
<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">JD</div>
<div>
<button type="button" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm mb-2">Change Photo</button>
<p className="text-xs text-gray-500 dark:text-gray-400">JPG, GIF or PNG. Max size 2MB</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
<input type="text" defaultValue="John" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
<input type="text" defaultValue="Doe" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
<input type="email" defaultValue="john@example.com" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
<textarea rows={4} placeholder="Tell us about yourself..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
</div>
<div className="flex gap-3">
<button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
<button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Changes</button>
</div>
</form>
</div>`,
    preview: <ProfileEditForm />,
  },
  {
    name: 'InlineHorizontalForm',
    component: InlineHorizontalForm,
    code: `<div className="w-full max-w-4xl p-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-900 dark:to-blue-900 rounded-lg shadow-xl">
<h3 className="text-xl font-bold text-white mb-4">Get Early Access</h3>
<form className="flex flex-col md:flex-row gap-3">
<input type="text" placeholder="Your name" className="flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white" />
<input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-white" />
<button className="px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 whitespace-nowrap">Sign Up</button>
</form>
</div>`,
    preview: <InlineHorizontalForm />,
  },
  {
    name: 'ConditionalFieldsForm',
    component: ConditionalFieldsForm,
    code: `<div className="w-full max-w-lg p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Registration</h2>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Attendance Type</label>
<select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white">
<option>In Person</option>
<option>Virtual</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
<input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
<h4 className="font-medium text-gray-900 dark:text-white mb-3">In-Person Attendee Details</h4>
<div className="space-y-3">
<input type="text" placeholder="T-Shirt Size" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="text" placeholder="Dietary Restrictions" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
</div>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Register</button>
</form>
</div>`,
    preview: <ConditionalFieldsForm />,
  },
  {
    name: 'SubscriptionPricingForm',
    component: SubscriptionPricingForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Choose Your Plan</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{[
{ name: 'Basic', price: '$9', features: ['5 Projects', '10GB Storage'] },
{ name: 'Pro', price: '$29', features: ['Unlimited Projects', '100GB Storage'], popular: true },
{ name: 'Enterprise', price: '$99', features: ['Everything', 'Priority Support'] }
].map(plan => (
<label key={plan.name} className={\`relative p-6 border-2 rounded-xl cursor-pointer transition-all \${plan.popular ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600 hover:border-blue-400'}\`}>
<input type="radio" name="plan" className="absolute top-4 right-4 w-4 h-4" defaultChecked={plan.popular} />
{plan.popular && <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">POPULAR</span>}
<div className="text-center mt-4">
<h3 className="font-bold text-lg text-gray-900 dark:text-white">{plan.name}</h3>
<p className="text-3xl font-bold text-gray-900 dark:text-white my-3">{plan.price}<span className="text-sm text-gray-500">/mo</span></p>
<ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
{plan.features.map(f => <li key={f}>{f}</li>)}
</ul>
</div>
</label>
))}
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
<input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 shadow-lg">Continue to Payment</button>
</form>
</div>`,
    preview: <SubscriptionPricingForm />,
  },
  {
    name: 'AddressForm',
    component: AddressForm,
    code: `<div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Shipping Address</h2>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input type="text" placeholder="First Name" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="text" placeholder="Last Name" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<input type="text" placeholder="Street Address" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<input type="text" placeholder="City" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white">
<option>State</option>
<option>California</option>
<option>New York</option>
<option>Texas</option>
</select>
<input type="text" placeholder="ZIP Code" className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Address</button>
</form>
</div>`,
    preview: <AddressForm />,
  },
  {
    name: 'JobApplicationForm',
    component: JobApplicationForm,
    code: `<div className="w-full max-w-3xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Join Our Team</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">Fill out the application below</p>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input type="text" placeholder="First Name *" className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
<input type="text" placeholder="Last Name *" className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
</div>
<input type="email" placeholder="Email Address *" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
<input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Position Applying For</label>
<select className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white">
<option>Software Engineer</option>
<option>Product Manager</option>
<option>Designer</option>
<option>Marketing Manager</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Upload Resume (PDF)</label>
<input type="file" accept=".pdf" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Cover Letter</label>
<textarea rows={5} placeholder="Tell us why you're a great fit..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white resize-none"></textarea>
</div>
<button className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 shadow-lg">Submit Application</button>
</form>
</div>`,
    preview: <JobApplicationForm />,
  },
  {
    name: 'BookingReservationForm',
    component: BookingReservationForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Make a Reservation</h2>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-in Date</label>
<input type="date" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-out Date</label>
<input type="date" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Guests</label>
<select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white">
<option>1 Guest</option>
<option>2 Guests</option>
<option>3 Guests</option>
<option>4+ Guests</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Room Type</label>
<select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white">
<option>Standard</option>
<option>Deluxe</option>
<option>Suite</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
<input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
<input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Special Requests</label>
<textarea rows={3} placeholder="Any special requirements..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
</div>
<button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 shadow-lg">Book Now</button>
</form>
</div>`,
    preview: <BookingReservationForm />,
  },
  {
    name: 'FeedbackRatingForm',
    component: FeedbackRatingForm,
    code: `<div className="w-full max-w-lg p-8 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Rate Your Experience</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">We'd love to hear your feedback!</p>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Overall Satisfaction</label>
<div className="flex justify-center gap-2">
{[1, 2, 3, 4, 5].map(star => (
<button key={star} type="button" className="text-4xl text-gray-300 hover:text-yellow-400 transition-colors">★</button>
))}
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 dark:text-white mb-3">Service Quality</label>
<div className="space-y-2">
<label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
<span className="text-gray-700 dark:text-gray-300">Excellent</span>
<input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
</label>
<label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
<span className="text-gray-700 dark:text-gray-300">Good</span>
<input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
</label>
<label className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg cursor-pointer">
<span className="text-gray-700 dark:text-gray-300">Fair</span>
<input type="radio" name="quality" className="w-5 h-5 text-yellow-600" />
</label>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Additional Comments</label>
<textarea rows={4} placeholder="Tell us more..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none dark:text-white resize-none"></textarea>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-600 hover:to-orange-600 shadow-lg">Submit Feedback</button>
</form>
</div>`,
    preview: <FeedbackRatingForm />,
  },
  {
    name: 'CompactNewsletterForm',
    component: CompactNewsletterForm,
    code: `<div className="w-full max-w-md p-6 bg-gray-900 dark:bg-black rounded-xl shadow-xl">
<h3 className="text-lg font-bold text-white mb-2">Stay in the loop</h3>
<p className="text-gray-400 text-sm mb-4">Get updates delivered to your inbox</p>
<form className="space-y-3">
<input type="email" placeholder="you@example.com" className="w-full px-4 py-2 rounded-lg border-2 border-gray-700 bg-gray-800 text-white focus:border-blue-500 outline-none" />
<button className="w-full px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Subscribe</button>
<p className="text-xs text-gray-500 text-center">We respect your privacy. Unsubscribe anytime.</p>
</form>
</div>`,
    preview: <CompactNewsletterForm />,
  },
  {
    name: 'TwoColumnContactForm',
    component: TwoColumnContactForm,
    code: `<div className="w-full max-w-5xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Send us a message</h3>
<form className="space-y-4">
<input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white" />
<textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
<button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Send Message</button>
</form>
</div>
<div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-700 p-8 rounded-xl">
<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
<div className="space-y-4 text-gray-700 dark:text-gray-300">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📧</div>
<div><p className="font-medium">Email</p><p className="text-sm text-gray-600 dark:text-gray-400">hello@company.com</p></div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📞</div>
<div><p className="font-medium">Phone</p><p className="text-sm text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p></div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">📍</div>
<div><p className="font-medium">Address</p><p className="text-sm text-gray-600 dark:text-gray-400">123 Main St, San Francisco, CA 94102</p></div>
</div>
</div>
</div>
</div>
</div>`,
    preview: <TwoColumnContactForm />,
  },
  {
    name: 'SettingsPreferencesForm',
    component: SettingsPreferencesForm,
    code: `<div className="w-full max-w-3xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Account Settings</h2>
<form className="space-y-8">
<div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notifications</h3>
<div className="space-y-3">
{['Email notifications', 'Push notifications', 'SMS notifications'].map(pref => (
<label key={pref} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
<span className="text-gray-700 dark:text-gray-300">{pref}</span>
<input type="checkbox" className="w-5 h-5 text-blue-600 rounded" />
</label>
))}
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Privacy</h3>
<div className="space-y-3">
<label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
<span className="text-gray-700 dark:text-gray-300">Profile visibility</span>
<select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-800 dark:text-white">
<option>Public</option>
<option>Friends Only</option>
<option>Private</option>
</select>
</label>
</div>
</div>
<div className="flex gap-3 pt-4">
<button type="button" className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
<button type="submit" className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Save Settings</button>
</div>
</form>
</div>`,
    preview: <SettingsPreferencesForm />,
  },
  {
    name: 'PasswordChangeForm',
    component: PasswordChangeForm,
    code: `<div className="w-full max-w-lg p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Change Password</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">Ensure your account is secure</p>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Password</label>
<input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 outline-none dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">New Password</label>
<input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
<p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Must be at least 8 characters</p>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm New Password</label>
<input type="password" className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 outline-none dark:text-white" />
</div>
<div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
<p className="text-sm text-blue-800 dark:text-blue-300">Password strength: <span className="font-semibold">Strong</span></p>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-teal-700 shadow-lg">Update Password</button>
</form>
</div>`,
    preview: <PasswordChangeForm />,
  },
  {
    name: 'SupportTicketForm',
    component: SupportTicketForm,
    code: `<div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Submit a Support Ticket</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">Our team will respond within 24 hours</p>
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
<input type="text" placeholder="Brief description of the issue" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
<select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white">
<option>Technical Issue</option>
<option>Billing Question</option>
<option>Feature Request</option>
<option>Account Help</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
<div className="flex gap-2">
{['Low', 'Medium', 'High', 'Urgent'].map(priority => (
<label key={priority} className="flex-1 cursor-pointer">
<input type="radio" name="priority" className="peer hidden" />
<div className="p-3 text-center border-2 border-gray-300 dark:border-gray-600 rounded-lg peer-checked:border-purple-600 peer-checked:bg-purple-50 dark:peer-checked:bg-purple-900/20 hover:border-purple-400 transition-colors">
<span className="text-sm font-medium text-gray-700 dark:text-gray-300">{priority}</span>
</div>
</label>
))}
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
<textarea rows={6} placeholder="Please provide detailed information about your issue..." className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white resize-none"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Attachments (optional)</label>
<input type="file" multiple className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none dark:bg-gray-700 dark:text-white" />
</div>
<button className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-lg">Submit Ticket</button>
</form>
</div>`,
    preview: <SupportTicketForm />,
  },
  {
    name: 'TeamInvitationForm',
    component: TeamInvitationForm,
    code: `<div className="w-full max-w-2xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-xl">
<h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Invite Team Members</h2>
<p className="text-gray-600 dark:text-gray-400 mb-6">Add new members to collaborate on your workspace</p>
<form className="space-y-6">
<div className="space-y-3">
{[1, 2, 3].map(i => (
<div key={i} className="flex gap-3">
<input type="email" placeholder={\`team.member\${i}@company.com\`} className="flex-1 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white" />
<select className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white">
<option>Admin</option>
<option>Editor</option>
<option>Viewer</option>
</select>
</div>
))}
</div>
<button type="button" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium text-sm">+ Add another email</button>
<div>
<label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Personal Message (optional)</label>
<textarea rows={3} placeholder="Add a personal message to the invitation..." className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none dark:text-white resize-none"></textarea>
</div>
<button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 shadow-lg">Send Invitations</button>
</form>
</div>`,
    preview: <TeamInvitationForm />,
  },
];
