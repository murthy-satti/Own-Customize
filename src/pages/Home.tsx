import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Package,
  Palette,
  Code2,
  MousePointerClick,
  Layers,
  Download,
  ArrowRight,
  Zap,
  CheckCircle,
  Copy
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Create Beautiful UIs Instantly</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Beautiful Pages
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Without the Hassle
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Browse our extensive component library, customize them visually with drag-and-drop,
            and export clean, production-ready code. Build entire pages in minutes, not hours.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/customize"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <Zap className="w-5 h-5" />
              Start Building Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all"
            >
              <Package className="w-5 h-5" />
              Browse Components
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Fast
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to accelerate your development workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Package className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Rich Component Library</h3>
            <p className="text-gray-600 leading-relaxed">
              Access 100+ pre-built, customizable components. Buttons, forms, headers, footers, tables and more - all beautifully designed.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Palette className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Visual Page Builder</h3>
            <p className="text-gray-600 leading-relaxed">
              Drag, drop, and arrange components with ease. Customize colors, text, and properties with an intuitive interface.
            </p>
          </div>

          <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Clean Code Export</h3>
            <p className="text-gray-600 leading-relaxed">
              Export production-ready React code for your entire page. No bloat, just clean JSX with Tailwind CSS.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From idea to code in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>

            <div className="relative text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform">
                  <MousePointerClick className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Browse & Select</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore our extensive library of components. Click to view code or add to your page builder.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform">
                  <Layers className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Customize & Arrange</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag and drop to arrange components. Customize colors, text, and properties in real-time.
              </p>
            </div>

            <div className="relative text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-2xl flex items-center justify-center mx-auto shadow-xl transform hover:scale-110 transition-transform">
                  <Download className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Export & Use</h3>
              <p className="text-gray-600 leading-relaxed">
                Click copy to get clean, production-ready code. Paste into your project and you're done!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Lightning Fast Development</h3>
                <p className="text-gray-600">
                  Build pages 10x faster than traditional coding. No more repetitive work.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Production Ready</h3>
                <p className="text-gray-600">
                  All components follow best practices and are optimized for performance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Copy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Simple copy-paste workflow. Works with any React project using Tailwind CSS.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">Start Building Today</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Join developers who are building faster and shipping better products.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>100+ customizable components</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Drag & drop page builder</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Clean, production-ready code</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span>Regular updates & new components</span>
              </li>
            </ul>
            <Link
              to="/customize"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-xl"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">
            Stop wasting time on repetitive UI work. Start building beautiful pages in minutes.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/customize"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-2xl"
            >
              <Zap className="w-5 h-5" />
              Start Building Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all"
            >
              <Package className="w-5 h-5" />
              View Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
