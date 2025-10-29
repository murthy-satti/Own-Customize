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
];
