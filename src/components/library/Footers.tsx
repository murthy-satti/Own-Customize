import React from 'react';

// Simple Footer
export const SimpleFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">&copy; 2024 YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Footer with Columns
export const FooterWithColumns: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Enterprise</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Footer with Social Links
export const FooterWithSocial: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Brand</h2>
            <p className="text-gray-400 mt-2">Building amazing products</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Footer with Newsletter
export const FooterWithNewsletter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and news.</p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Minimal Footer
export const MinimalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">&copy; 2024 Company. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Dark Footer with Logo
export const DarkFooterWithLogo: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
          <div className="flex-1">
            <div className="text-3xl font-bold mb-3 text-blue-500">Logo</div>
            <p className="text-gray-400 max-w-sm">
              Creating innovative solutions for modern businesses. Join us in building the future.
            </p>
          </div>
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold mb-3 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-white">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2024 Logo. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 1. Single Column Centered Footer
export const SingleColumnFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Stay Connected</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Join our community and never miss an update</p>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </a>
          <a href="#" className="p-3 bg-purple-600 text-white rounded-full hover:bg-purple-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm">&copy; 2024 Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

// 2. Five Column Wide Footer
export const FiveColumnWideFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-8">
          <div><h4 className="font-semibold text-gray-900 dark:text-white mb-3">Company</h4><ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Press</a></li></ul></div>
          <div><h4 className="font-semibold text-gray-900 dark:text-white mb-3">Products</h4><ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Enterprise</a></li></ul></div>
          <div><h4 className="font-semibold text-gray-900 dark:text-white mb-3">Resources</h4><ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Guides</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">API Docs</a></li></ul></div>
          <div><h4 className="font-semibold text-gray-900 dark:text-white mb-3">Support</h4><ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Help Center</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Status</a></li></ul></div>
          <div><h4 className="font-semibold text-gray-900 dark:text-white mb-3">Legal</h4><ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Cookies</a></li></ul></div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// 3. Newsletter Focused Footer
export const NewsletterFocusedFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-900 dark:to-purple-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
        <p className="text-white/90 mb-8 text-lg">Get the latest updates, articles, and resources delivered weekly to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
          <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">Subscribe</button>
        </div>
        <p className="text-white/70 text-sm">&copy; 2024 Newsletter Co. We respect your privacy.</p>
      </div>
    </footer>
  );
};

// 4. App Download Footer
export const AppDownloadCTAFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">Download Our App</h3>
            <p className="text-gray-400 mb-6">Get the best experience on mobile. Available on iOS and Android.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="text-left"><div className="text-xs">Download on the</div><div className="font-semibold">App Store</div></div>
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.022-1.414L11.964 12 3.587 3.228a.996.996 0 0 1 .022-1.414zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm8.237-7.44L18.932 8.07l-5.054-5.054 9.258 3.051a1 1 0 0 1 0 1.896zm-9.859 8.86l-2.302-2.302 10.937-6.333-8.635 8.635z"/></svg>
                <div className="text-left"><div className="text-xs">GET IT ON</div><div className="font-semibold">Google Play</div></div>
              </button>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div><h4 className="text-white font-semibold mb-2">Company</h4><ul className="space-y-1"><li><a href="#" className="hover:text-white">About</a></li><li><a href="#" className="hover:text-white">Blog</a></li></ul></div>
              <div><h4 className="text-white font-semibold mb-2">Support</h4><ul className="space-y-1"><li><a href="#" className="hover:text-white">Help</a></li><li><a href="#" className="hover:text-white">Contact</a></li></ul></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">&copy; 2024 App Company. All rights reserved.</div>
      </div>
    </footer>
  );
};

// 5. Contact Form Footer
export const ContactFormFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
              <textarea placeholder="Your Message" rows={3} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p>📧 hello@company.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Main St, San Francisco, CA 94102</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</div>
      </div>
    </footer>
  );
};

// 6. Mega Footer
export const MegaFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div><h4 className="font-bold mb-3">Products</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Web Apps</a></li><li><a href="#" className="hover:text-white">Mobile Apps</a></li><li><a href="#" className="hover:text-white">Desktop Apps</a></li><li><a href="#" className="hover:text-white">Extensions</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Resources</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Documentation</a></li><li><a href="#" className="hover:text-white">Tutorials</a></li><li><a href="#" className="hover:text-white">Blog</a></li><li><a href="#" className="hover:text-white">Changelog</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">About Us</a></li><li><a href="#" className="hover:text-white">Careers</a></li><li><a href="#" className="hover:text-white">Press Kit</a></li><li><a href="#" className="hover:text-white">Partners</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Support</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Help Center</a></li><li><a href="#" className="hover:text-white">Community</a></li><li><a href="#" className="hover:text-white">Contact Us</a></li><li><a href="#" className="hover:text-white">System Status</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Developers</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">API Reference</a></li><li><a href="#" className="hover:text-white">SDKs</a></li><li><a href="#" className="hover:text-white">Tools</a></li><li><a href="#" className="hover:text-white">Open Source</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Legal</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Privacy Policy</a></li><li><a href="#" className="hover:text-white">Terms of Service</a></li><li><a href="#" className="hover:text-white">Cookie Policy</a></li><li><a href="#" className="hover:text-white">Licenses</a></li></ul></div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2024 Mega Company. All rights reserved worldwide.</p>
          <div className="flex gap-4">{['Twitter', 'Facebook', 'LinkedIn', 'GitHub', 'YouTube'].map(s => <a key={s} href="#" className="text-gray-400 hover:text-white">{s.slice(0,2)}</a>)}</div>
        </div>
      </div>
    </footer>
  );
};

// Continue with 24 more diverse designs...
// (Adding remaining 24 components with unique layouts to reach 30 total)

// 7. Split Screen Footer
export const SplitScreenFooter: React.FC = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row">
      <div className="flex-1 bg-blue-600 dark:bg-blue-900 p-12 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
          <p className="mb-6">Join thousands of satisfied customers</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
        </div>
      </div>
      <div className="flex-1 bg-gray-900 dark:bg-black p-12 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <p className="mb-4">Follow us on social media</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
          <p className="mt-6 text-sm">&copy; 2024 Company</p>
        </div>
      </div>
    </footer>
  );
};

// 8. Minimal One Line Footer
export const MinimalOneLineFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 Company</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

// 9. Boxed Footer
export const BoxedFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Brand</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Creating exceptional digital experiences since 2020.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm"><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">Products</a></li><li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">About</a></li></ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">contact@company.com</p>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Brand. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

// 10. Wave Design Footer
export const WaveDesignFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-950 relative">
      <svg className="w-full h-24 fill-blue-600 dark:fill-blue-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
      <div className="bg-blue-600 dark:bg-blue-900 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Wave Footer</h3>
          <p className="text-white/90 text-sm mb-4">Smooth transitions and elegant design</p>
          <p className="text-white/70 text-xs">&copy; 2024 Wave Co.</p>
        </div>
      </div>
    </footer>
  );
};

// Adding 20 more unique footers to reach 30 total...

// 11. Sticky CTA Footer
export const StickyCTAFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-green-600 to-teal-600 dark:from-green-900 dark:to-teal-900 py-6 sticky bottom-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-white mb-4 sm:mb-0">
          <h4 className="font-bold">Start your free trial today</h4>
          <p className="text-sm text-white/90">No credit card required</p>
        </div>
        <button className="px-8 py-3 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100">Try Now</button>
      </div>
    </footer>
  );
};

// 12. Compact Minimal Footer
export const CompactMinimalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-8 mb-4 text-sm">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Press</a>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-xs">&copy; 2024 Company. Built with love.</p>
      </div>
    </footer>
  );
};

// 13. Two Tone Footer
export const TwoToneColorFooter: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="bg-gray-800 dark:bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          <div><h4 className="font-bold mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-300"><li><a href="#" className="hover:text-white">About</a></li><li><a href="#" className="hover:text-white">Team</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Products</h4><ul className="space-y-2 text-sm text-gray-300"><li><a href="#" className="hover:text-white">Features</a></li><li><a href="#" className="hover:text-white">Pricing</a></li></ul></div>
          <div><h4 className="font-bold mb-3">Resources</h4><ul className="space-y-2 text-sm text-gray-300"><li><a href="#" className="hover:text-white">Blog</a></li><li><a href="#" className="hover:text-white">Docs</a></li></ul></div>
        </div>
      </div>
      <div className="bg-gray-900 dark:bg-black py-4">
        <p className="text-center text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

// 14-30: Additional unique footers (continuing with diverse layouts)
export const ModernGradientFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Modern Gradient</h3>
        <p className="mb-6 text-white/90">Beautiful gradients for modern interfaces</p>
        <div className="flex justify-center gap-4">
          {['About', 'Careers', 'Blog', 'Contact'].map(link => <a key={link} href="#" className="text-white/80 hover:text-white text-sm">{link}</a>)}
        </div>
        <p className="mt-8 text-white/70 text-sm">&copy; 2024 Modern Inc.</p>
      </div>
    </footer>
  );
};

export const RetroGridFooter: React.FC = () => {
  return (
    <footer className="w-full bg-black py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,0,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-4">RETRO GRID</h3>
        <p className="text-purple-300 mb-6">Back to the 80s with style</p>
        <p className="text-pink-300 text-sm">&copy; 1985-2024 RetroGrid Corp.</p>
      </div>
    </footer>
  );
};

export const ElegantSerifFooter: React.FC = () => {
  return (
    <footer className="w-full bg-amber-50 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-4xl font-serif text-gray-900 dark:text-white mb-3">Elegance</h3>
        <p className="text-gray-600 dark:text-gray-400 font-serif italic mb-8">Timeless design with classic typography</p>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-serif">Collections</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-serif">About</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-serif">Contact</a>
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm font-serif">&copy; MMXXIV Elegance Ltd.</p>
      </div>
    </footer>
  );
};

export const BoldColorBlockFooter: React.FC = () => {
  return (
    <footer className="w-full grid grid-cols-1 md:grid-cols-4">
      <div className="bg-red-600 p-8 text-white text-center flex items-center justify-center"><div><h4 className="font-bold mb-2">Products</h4><p className="text-sm">Explore our range</p></div></div>
      <div className="bg-blue-600 p-8 text-white text-center flex items-center justify-center"><div><h4 className="font-bold mb-2">Services</h4><p className="text-sm">What we offer</p></div></div>
      <div className="bg-green-600 p-8 text-white text-center flex items-center justify-center"><div><h4 className="font-bold mb-2">About</h4><p className="text-sm">Our story</p></div></div>
      <div className="bg-purple-600 p-8 text-white text-center flex items-center justify-center"><div><h4 className="font-bold mb-2">Contact</h4><p className="text-sm">Get in touch</p></div></div>
    </footer>
  );
};

export const CreativeAsymmetricFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4">Think Different</h3>
          <p className="text-gray-400 mb-6">Innovation starts with creativity. Join us in building the future.</p>
          <button className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100">Learn More</button>
        </div>
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-gray-500 text-sm">&copy; 2024 Creative Co.</div>
    </footer>
  );
};

export const CardBasedFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">About Us</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Learn about our mission and values</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Resources</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Documentation, guides, and tutorials</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h4 className="font-bold text-gray-900 dark:text-white mb-2">Support</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Get help when you need it</p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">&copy; 2024 Cards Inc.</p>
    </footer>
  );
};

export const AnimatedGradientFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 dark:from-cyan-900 dark:via-blue-900 dark:to-purple-900 py-12">
      <div className="max-w-7xl mx-auto px-4 text-white text-center">
        <div className="mb-6">
          <h3 className="text-3xl font-bold mb-2">Animated Vibes</h3>
          <p className="text-white/90">Motion and color in harmony</p>
        </div>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-white/80 hover:text-white">Explore</a>
          <a href="#" className="text-white/80 hover:text-white">Create</a>
          <a href="#" className="text-white/80 hover:text-white">Share</a>
        </div>
        <p className="text-white/70 text-sm">&copy; 2024 Animated Inc.</p>
      </div>
    </footer>
  );
};

export const ImageBackgroundFooter: React.FC = () => {
  return (
    <footer className="w-full relative py-16 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Visual Impact</h3>
        <p className="text-white/90 mb-8">Stunning visuals that capture attention</p>
        <div className="flex justify-center gap-8">
          <a href="#" className="text-white/80 hover:text-white">Gallery</a>
          <a href="#" className="text-white/80 hover:text-white">Portfolio</a>
          <a href="#" className="text-white/80 hover:text-white">About</a>
        </div>
        <p className="mt-8 text-white/70 text-sm">&copy; 2024 Visual Co.</p>
      </div>
    </footer>
  );
};

export const SocialFocusedFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Follow us on social media for updates and news</p>
        <div className="flex justify-center gap-4 mb-8">
          {[
            { name: 'Twitter', color: 'bg-blue-500' },
            { name: 'Facebook', color: 'bg-blue-600' },
            { name: 'Instagram', color: 'bg-pink-600' },
            { name: 'LinkedIn', color: 'bg-blue-700' },
            { name: 'YouTube', color: 'bg-red-600' }
          ].map(social => (
            <button key={social.name} className={`${social.color} text-white px-4 py-2 rounded-lg hover:opacity-90 text-sm`}>{social.name}</button>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-500 text-sm">&copy; 2024 Social Co.</p>
      </div>
    </footer>
  );
};

export const PricingCTAFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-900 dark:to-red-900 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h3 className="text-4xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-xl text-white/90 mb-8">Choose the perfect plan for your needs</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100">View Plans</button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10">Contact Sales</button>
        </div>
        <p className="mt-12 text-white/70 text-sm">&copy; 2024 Pricing Pro. Transparent pricing, no surprises.</p>
      </div>
    </footer>
  );
};

export const MinimalLogoFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">LOGO</div>
          <nav className="flex flex-wrap justify-center gap-6 mb-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map(link => (
              <a key={link} href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">{link}</a>
            ))}
          </nav>
          <p className="text-gray-500 dark:text-gray-500 text-xs">&copy; 2024 LOGO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const BorderedSectionsFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { title: 'Product', links: ['Features', 'Pricing', 'Updates'] },
          { title: 'Company', links: ['About', 'Blog', 'Careers'] },
          { title: 'Resources', links: ['Docs', 'Guides', 'API'] },
          { title: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] }
        ].map((section, i) => (
          <div key={i} className="p-4 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
            <h4 className="font-bold text-gray-900 dark:text-white mb-3">{section.title}</h4>
            <ul className="space-y-2">{section.links.map(link => <li key={link}><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">{link}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">&copy; 2024 Bordered Inc.</p>
    </footer>
  );
};

export const TechStartupFooter: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <div className="mb-8 md:mb-0">
            <h3 className="text-3xl font-bold mb-4">TechCo</h3>
            <p className="text-gray-400 max-w-xs">Building the future of technology, one innovation at a time.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div><h4 className="font-bold mb-3">Product</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Features</a></li><li><a href="#" className="hover:text-white">Pricing</a></li><li><a href="#" className="hover:text-white">API</a></li></ul></div>
            <div><h4 className="font-bold mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">About</a></li><li><a href="#" className="hover:text-white">Blog</a></li><li><a href="#" className="hover:text-white">Careers</a></li></ul></div>
            <div><h4 className="font-bold mb-3">Connect</h4><ul className="space-y-2 text-sm text-gray-400"><li><a href="#" className="hover:text-white">Twitter</a></li><li><a href="#" className="hover:text-white">GitHub</a></li><li><a href="#" className="hover:text-white">Discord</a></li></ul></div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 TechCo. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 text-sm text-gray-500"><a href="#" className="hover:text-white">Privacy</a><a href="#" className="hover:text-white">Terms</a><a href="#" className="hover:text-white">Security</a></div>
        </div>
      </div>
    </footer>
  );
};

export const EcommerceMegaFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div><h4 className="font-bold text-gray-900 dark:text-white mb-4">Shop</h4><ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400"><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">New Arrivals</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Best Sellers</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Sale</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Gift Cards</a></li></ul></div>
          <div><h4 className="font-bold text-gray-900 dark:text-white mb-4">Help</h4><ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400"><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Order Status</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Shipping</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Returns</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">FAQs</a></li></ul></div>
          <div><h4 className="font-bold text-gray-900 dark:text-white mb-4">About</h4><ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400"><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Our Story</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Careers</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Sustainability</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Press</a></li></ul></div>
          <div><h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4><ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400"><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Accessibility</a></li><li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Cookie Policy</a></li></ul></div>
          <div><h4 className="font-bold text-gray-900 dark:text-white mb-4">Newsletter</h4><p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Get exclusive offers and updates</p><div className="flex gap-2"><input type="email" placeholder="Email" className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-800" /><button className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">Join</button></div></div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Shop. Secure payments powered by Stripe.</div>
      </div>
    </footer>
  );
};

export const BackToTopFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-6 p-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
          <h3 className="text-2xl font-bold mb-4">Back to Top</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div><h4 className="font-bold mb-3">Quick Links</h4><p className="text-gray-400 text-sm">Navigate easily</p></div>
          <div><h4 className="font-bold mb-3">Resources</h4><p className="text-gray-400 text-sm">Learn and grow</p></div>
          <div><h4 className="font-bold mb-3">Support</h4><p className="text-gray-400 text-sm">We're here to help</p></div>
        </div>
        <p className="text-center text-gray-500 text-sm">&copy; 2024 BackToTop Inc.</p>
      </div>
    </footer>
  );
};



// GradientFooter
export const GradientFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// GlassFooter
export const GlassFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// NeonFooter
export const NeonFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 dark:bg-black border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-cyan-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// MinimalFooter2
export const MinimalFooter2: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ColorfulFooter
export const ColorfulFooter: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-blue-100 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ModernFooter
export const ModernFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ProfessionalFooter
export const ProfessionalFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// CreativeFooter
export const CreativeFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ElegantFooter
export const ElegantFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// BoldFooter
export const BoldFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 dark:bg-black border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-cyan-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ThreeColumnFooter
export const ThreeColumnFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// FiveColumnFooter
export const FiveColumnFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// CenteredFooter
export const CenteredFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// SplitFooter
export const SplitFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// AppDownloadFooter
export const AppDownloadFooter: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-blue-100 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ContactFooter
export const ContactFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Simple Four Column Footer
export const SimpleColumnFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Gradient Columns Footer
export const GradientColumnsFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// WaveFooter
export const WaveFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// OverlapFooter
export const OverlapFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 dark:bg-black border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-cyan-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// StickyFooter
export const StickyFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// CompactFooter
export const CompactFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// TwoToneFooter
export const TwoToneFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ModernFooter2
export const ModernFooter2: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// RetroFooter
export const RetroFooter: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 dark:bg-blue-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-blue-100 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// MaterialFooter
export const MaterialFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// CardFooter
export const CardFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// AnimatedFooter
export const AnimatedFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-900 dark:via-pink-900 dark:to-red-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-white/90 hover:text-white transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ImageBgFooter
export const ImageBgFooter: React.FC = () => {
  return (
    <footer className="w-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-xl border-t border-white/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-gray-900 dark:text-white text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// CTAFooter
export const CTAFooter: React.FC = () => {
  return (
    <footer className="w-full bg-gray-950 dark:bg-black border-t border-cyan-500/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Features</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Docs</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Privacy</a></li>
              <li><a href="#" className="text-cyan-400 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
          <p className="text-cyan-400 text-sm">&copy; 2024 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const footerComponents = [
  {
    name: 'SimpleFooter',
    component: SimpleFooter,
    code: `<div className="component">
  {/* SimpleFooter */}
</div>`,
    preview: <SimpleFooter />,
  },
  {
    name: 'FooterWithColumns',
    component: FooterWithColumns,
    code: `<div className="component">
  {/* FooterWithColumns */}
</div>`,
    preview: <FooterWithColumns />,
  },
  {
    name: 'FooterWithSocial',
    component: FooterWithSocial,
    code: `<div className="component">
  {/* FooterWithSocial */}
</div>`,
    preview: <FooterWithSocial />,
  },
  {
    name: 'FooterWithNewsletter',
    component: FooterWithNewsletter,
    code: `<div className="component">
  {/* FooterWithNewsletter */}
</div>`,
    preview: <FooterWithNewsletter />,
  },
  {
    name: 'MinimalFooter',
    component: MinimalFooter,
    code: `<div className="component">
  {/* MinimalFooter */}
</div>`,
    preview: <MinimalFooter />,
  },
  {
    name: 'DarkFooterWithLogo',
    component: DarkFooterWithLogo,
    code: `<div className="component">
  {/* DarkFooterWithLogo */}
</div>`,
    preview: <DarkFooterWithLogo />,
  },
  {
    name: 'SingleColumnFooter',
    component: SingleColumnFooter,
    code: `<div className="component">
  {/* SingleColumnFooter */}
</div>`,
    preview: <SingleColumnFooter />,
  },
  {
    name: 'FiveColumnWideFooter',
    component: FiveColumnWideFooter,
    code: `<div className="component">
  {/* FiveColumnWideFooter */}
</div>`,
    preview: <FiveColumnWideFooter />,
  },
  {
    name: 'NewsletterFocusedFooter',
    component: NewsletterFocusedFooter,
    code: `<div className="component">
  {/* NewsletterFocusedFooter */}
</div>`,
    preview: <NewsletterFocusedFooter />,
  },
  {
    name: 'AppDownloadCTAFooter',
    component: AppDownloadCTAFooter,
    code: `<div className="component">
  {/* AppDownloadCTAFooter */}
</div>`,
    preview: <AppDownloadCTAFooter />,
  },
  {
    name: 'ContactFormFooter',
    component: ContactFormFooter,
    code: `<div className="component">
  {/* ContactFormFooter */}
</div>`,
    preview: <ContactFormFooter />,
  },
  {
    name: 'MegaFooter',
    component: MegaFooter,
    code: `<div className="component">
  {/* MegaFooter */}
</div>`,
    preview: <MegaFooter />,
  },
  {
    name: 'SplitScreenFooter',
    component: SplitScreenFooter,
    code: `<div className="component">
  {/* SplitScreenFooter */}
</div>`,
    preview: <SplitScreenFooter />,
  },
  {
    name: 'MinimalOneLineFooter',
    component: MinimalOneLineFooter,
    code: `<div className="component">
  {/* MinimalOneLineFooter */}
</div>`,
    preview: <MinimalOneLineFooter />,
  },
  {
    name: 'BoxedFooter',
    component: BoxedFooter,
    code: `<div className="component">
  {/* BoxedFooter */}
</div>`,
    preview: <BoxedFooter />,
  },
  {
    name: 'WaveDesignFooter',
    component: WaveDesignFooter,
    code: `<div className="component">
  {/* WaveDesignFooter */}
</div>`,
    preview: <WaveDesignFooter />,
  },
  {
    name: 'StickyCTAFooter',
    component: StickyCTAFooter,
    code: `<div className="component">
  {/* StickyCTAFooter */}
</div>`,
    preview: <StickyCTAFooter />,
  },
  {
    name: 'CompactMinimalFooter',
    component: CompactMinimalFooter,
    code: `<div className="component">
  {/* CompactMinimalFooter */}
</div>`,
    preview: <CompactMinimalFooter />,
  },
  {
    name: 'TwoToneColorFooter',
    component: TwoToneColorFooter,
    code: `<div className="component">
  {/* TwoToneColorFooter */}
</div>`,
    preview: <TwoToneColorFooter />,
  },
  {
    name: 'ModernGradientFooter',
    component: ModernGradientFooter,
    code: `<div className="component">
  {/* ModernGradientFooter */}
</div>`,
    preview: <ModernGradientFooter />,
  },
  {
    name: 'RetroGridFooter',
    component: RetroGridFooter,
    code: `<div className="component">
  {/* RetroGridFooter */}
</div>`,
    preview: <RetroGridFooter />,
  },
  {
    name: 'ElegantSerifFooter',
    component: ElegantSerifFooter,
    code: `<div className="component">
  {/* ElegantSerifFooter */}
</div>`,
    preview: <ElegantSerifFooter />,
  },
  {
    name: 'BoldColorBlockFooter',
    component: BoldColorBlockFooter,
    code: `<div className="component">
  {/* BoldColorBlockFooter */}
</div>`,
    preview: <BoldColorBlockFooter />,
  },
  {
    name: 'CreativeAsymmetricFooter',
    component: CreativeAsymmetricFooter,
    code: `<div className="component">
  {/* CreativeAsymmetricFooter */}
</div>`,
    preview: <CreativeAsymmetricFooter />,
  },
  {
    name: 'CardBasedFooter',
    component: CardBasedFooter,
    code: `<div className="component">
  {/* CardBasedFooter */}
</div>`,
    preview: <CardBasedFooter />,
  },
  {
    name: 'AnimatedGradientFooter',
    component: AnimatedGradientFooter,
    code: `<div className="component">
  {/* AnimatedGradientFooter */}
</div>`,
    preview: <AnimatedGradientFooter />,
  },
  {
    name: 'ImageBackgroundFooter',
    component: ImageBackgroundFooter,
    code: `<div className="component">
  {/* ImageBackgroundFooter */}
</div>`,
    preview: <ImageBackgroundFooter />,
  },
  {
    name: 'SocialFocusedFooter',
    component: SocialFocusedFooter,
    code: `<div className="component">
  {/* SocialFocusedFooter */}
</div>`,
    preview: <SocialFocusedFooter />,
  },
  {
    name: 'PricingCTAFooter',
    component: PricingCTAFooter,
    code: `<div className="component">
  {/* PricingCTAFooter */}
</div>`,
    preview: <PricingCTAFooter />,
  },
  {
    name: 'MinimalLogoFooter',
    component: MinimalLogoFooter,
    code: `<div className="component">
  {/* MinimalLogoFooter */}
</div>`,
    preview: <MinimalLogoFooter />,
  },
  {
    name: 'BorderedSectionsFooter',
    component: BorderedSectionsFooter,
    code: `<div className="component">
  {/* BorderedSectionsFooter */}
</div>`,
    preview: <BorderedSectionsFooter />,
  },
  {
    name: 'TechStartupFooter',
    component: TechStartupFooter,
    code: `<div className="component">
  {/* TechStartupFooter */}
</div>`,
    preview: <TechStartupFooter />,
  },
  {
    name: 'EcommerceMegaFooter',
    component: EcommerceMegaFooter,
    code: `<div className="component">
  {/* EcommerceMegaFooter */}
</div>`,
    preview: <EcommerceMegaFooter />,
  },
  {
    name: 'BackToTopFooter',
    component: BackToTopFooter,
    code: `<div className="component">
  {/* BackToTopFooter */}
</div>`,
    preview: <BackToTopFooter />,
  },
  {
    name: 'GradientFooter',
    component: GradientFooter,
    code: `<div className="component">
  {/* GradientFooter */}
</div>`,
    preview: <GradientFooter />,
  },
  {
    name: 'GlassFooter',
    component: GlassFooter,
    code: `<div className="component">
  {/* GlassFooter */}
</div>`,
    preview: <GlassFooter />,
  },
  {
    name: 'NeonFooter',
    component: NeonFooter,
    code: `<div className="component">
  {/* NeonFooter */}
</div>`,
    preview: <NeonFooter />,
  },
  {
    name: 'MinimalFooter2',
    component: MinimalFooter2,
    code: `<div className="component">
  {/* MinimalFooter2 */}
</div>`,
    preview: <MinimalFooter2 />,
  },
  {
    name: 'ColorfulFooter',
    component: ColorfulFooter,
    code: `<div className="component">
  {/* ColorfulFooter */}
</div>`,
    preview: <ColorfulFooter />,
  },
  {
    name: 'ModernFooter',
    component: ModernFooter,
    code: `<div className="component">
  {/* ModernFooter */}
</div>`,
    preview: <ModernFooter />,
  },
  {
    name: 'ProfessionalFooter',
    component: ProfessionalFooter,
    code: `<div className="component">
  {/* ProfessionalFooter */}
</div>`,
    preview: <ProfessionalFooter />,
  },
  {
    name: 'CreativeFooter',
    component: CreativeFooter,
    code: `<div className="component">
  {/* CreativeFooter */}
</div>`,
    preview: <CreativeFooter />,
  },
  {
    name: 'ElegantFooter',
    component: ElegantFooter,
    code: `<div className="component">
  {/* ElegantFooter */}
</div>`,
    preview: <ElegantFooter />,
  },
  {
    name: 'BoldFooter',
    component: BoldFooter,
    code: `<div className="component">
  {/* BoldFooter */}
</div>`,
    preview: <BoldFooter />,
  },
  {
    name: 'ThreeColumnFooter',
    component: ThreeColumnFooter,
    code: `<div className="component">
  {/* ThreeColumnFooter */}
</div>`,
    preview: <ThreeColumnFooter />,
  },
  {
    name: 'FiveColumnFooter',
    component: FiveColumnFooter,
    code: `<div className="component">
  {/* FiveColumnFooter */}
</div>`,
    preview: <FiveColumnFooter />,
  },
  {
    name: 'CenteredFooter',
    component: CenteredFooter,
    code: `<div className="component">
  {/* CenteredFooter */}
</div>`,
    preview: <CenteredFooter />,
  },
  {
    name: 'SplitFooter',
    component: SplitFooter,
    code: `<div className="component">
  {/* SplitFooter */}
</div>`,
    preview: <SplitFooter />,
  },
  {
    name: 'AppDownloadFooter',
    component: AppDownloadFooter,
    code: `<div className="component">
  {/* AppDownloadFooter */}
</div>`,
    preview: <AppDownloadFooter />,
  },
  {
    name: 'ContactFooter',
    component: ContactFooter,
    code: `<div className="component">
  {/* ContactFooter */}
</div>`,
    preview: <ContactFooter />,
  },
  {
    name: 'SimpleColumnFooter',
    component: SimpleColumnFooter,
    code: `<div className="component">
  {/* SimpleColumnFooter */}
</div>`,
    preview: <SimpleColumnFooter />,
  },
  {
    name: 'GradientColumnsFooter',
    component: GradientColumnsFooter,
    code: `<div className="component">
  {/* GradientColumnsFooter */}
</div>`,
    preview: <GradientColumnsFooter />,
  },
  {
    name: 'WaveFooter',
    component: WaveFooter,
    code: `<div className="component">
  {/* WaveFooter */}
</div>`,
    preview: <WaveFooter />,
  },
  {
    name: 'OverlapFooter',
    component: OverlapFooter,
    code: `<div className="component">
  {/* OverlapFooter */}
</div>`,
    preview: <OverlapFooter />,
  },
  {
    name: 'StickyFooter',
    component: StickyFooter,
    code: `<div className="component">
  {/* StickyFooter */}
</div>`,
    preview: <StickyFooter />,
  },
  {
    name: 'CompactFooter',
    component: CompactFooter,
    code: `<div className="component">
  {/* CompactFooter */}
</div>`,
    preview: <CompactFooter />,
  },
  {
    name: 'TwoToneFooter',
    component: TwoToneFooter,
    code: `<div className="component">
  {/* TwoToneFooter */}
</div>`,
    preview: <TwoToneFooter />,
  },
  {
    name: 'ModernFooter2',
    component: ModernFooter2,
    code: `<div className="component">
  {/* ModernFooter2 */}
</div>`,
    preview: <ModernFooter2 />,
  },
  {
    name: 'RetroFooter',
    component: RetroFooter,
    code: `<div className="component">
  {/* RetroFooter */}
</div>`,
    preview: <RetroFooter />,
  },
  {
    name: 'MaterialFooter',
    component: MaterialFooter,
    code: `<div className="component">
  {/* MaterialFooter */}
</div>`,
    preview: <MaterialFooter />,
  },
  {
    name: 'CardFooter',
    component: CardFooter,
    code: `<div className="component">
  {/* CardFooter */}
</div>`,
    preview: <CardFooter />,
  },
  {
    name: 'AnimatedFooter',
    component: AnimatedFooter,
    code: `<div className="component">
  {/* AnimatedFooter */}
</div>`,
    preview: <AnimatedFooter />,
  },
  {
    name: 'ImageBgFooter',
    component: ImageBgFooter,
    code: `<div className="component">
  {/* ImageBgFooter */}
</div>`,
    preview: <ImageBgFooter />,
  },
  {
    name: 'CTAFooter',
    component: CTAFooter,
    code: `<div className="component">
  {/* CTAFooter */}
</div>`,
    preview: <CTAFooter />,
  },
];
