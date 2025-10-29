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

// Form Type 6: Professional Login Form
export const ProfessionalLoginForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
        <p className="text-sm text-gray-600 mt-1">Enter your credentials to continue</p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:text-blue-700">Forgot password?</a>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

// Form Type 7: Multi-Column Form
export const MultiColumnForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
        >
          Save Information
        </button>
      </form>
    </div>
  );
};

// Form Type 8: Card Payment Form
export const PaymentForm: React.FC = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

// Form Type 9: Feedback Form
export const FeedbackForm: React.FC = () => {
  return (
    <div className="w-full max-w-lg p-8 bg-gray-50 rounded-lg border border-gray-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">We value your feedback</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Rating</label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white">
            <option>5 - Excellent</option>
            <option>4 - Good</option>
            <option>3 - Average</option>
            <option>2 - Poor</option>
            <option>1 - Very Poor</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Comments</label>
          <textarea
            rows={4}
            placeholder="Tell us what you think..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

// Form Type 10: Inline Form
export const InlineForm: React.FC = () => {
  return (
    <div className="w-full max-w-2xl p-6 bg-blue-700 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-white mb-4">Subscribe to Newsletter</h2>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-white outline-none"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Subscribe
        </button>
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
    name: 'ProfessionalLoginForm',
    component: ProfessionalLoginForm,
    code: `<div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
  <div className="mb-6">
    <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
    <p className="text-sm text-gray-600 mt-1">Enter your credentials to continue</p>
  </div>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
      <input type="email" placeholder="name@company.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
      <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
    </div>
    <button type="submit" className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">Sign In</button>
  </form>
</div>`,
    preview: <ProfessionalLoginForm />,
  },
  {
    name: 'MultiColumnForm',
    component: MultiColumnForm,
    code: `<div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
  <form className="space-y-6">
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
        <input type="text" placeholder="John" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
        <input type="text" placeholder="Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
      </div>
    </div>
    <button type="submit" className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">Save Information</button>
  </form>
</div>`,
    preview: <MultiColumnForm />,
  },
  {
    name: 'PaymentForm',
    component: PaymentForm,
    code: `<div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Details</h2>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Card Number</label>
      <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">Expiry Date</label>
        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">CVV</label>
        <input type="text" placeholder="123" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none" />
      </div>
    </div>
    <button type="submit" className="w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">Complete Payment</button>
  </form>
</div>`,
    preview: <PaymentForm />,
  },
  {
    name: 'FeedbackForm',
    component: FeedbackForm,
    code: `<div className="w-full max-w-lg p-8 bg-gray-50 rounded-lg border border-gray-300">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">We value your feedback</h2>
  <form className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Rating</label>
      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none bg-white">
        <option>5 - Excellent</option>
        <option>4 - Good</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">Comments</label>
      <textarea rows={4} placeholder="Tell us what you think..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none resize-none" />
    </div>
    <button type="submit" className="w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors">Submit Feedback</button>
  </form>
</div>`,
    preview: <FeedbackForm />,
  },
  {
    name: 'InlineForm',
    component: InlineForm,
    code: `<div className="w-full max-w-2xl p-6 bg-blue-700 rounded-lg shadow-lg">
  <h2 className="text-xl font-bold text-white mb-4">Subscribe to Newsletter</h2>
  <form className="flex gap-2">
    <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 border-0 rounded-lg focus:ring-2 focus:ring-white outline-none" />
    <button type="submit" className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">Subscribe</button>
  </form>
</div>`,
    preview: <InlineForm />,
  },
];
