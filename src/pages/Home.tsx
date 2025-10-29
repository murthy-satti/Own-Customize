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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-md text-blue-700 font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Professional UI Component Library</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Professional Web Pages
            <br />
            <span className="text-blue-700">With Production-Ready Components</span>
          </h1>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Access a comprehensive library of pre-built components, customize them with an intuitive visual editor,
            and export clean, maintainable code. Streamline your development workflow.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/customize"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              <Zap className="w-5 h-5" />
              Start Building
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/components"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all"
            >
              <Package className="w-5 h-5" />
              View Components
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to enhance your development efficiency
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
              <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Package className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Extensive Component Library</h3>
              <p className="text-gray-600 leading-relaxed">
                Access over 100 pre-built, customizable components including buttons, forms, headers, footers, tables, and more.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
              <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Editor</h3>
              <p className="text-gray-600 leading-relaxed">
                Intuitive drag-and-drop interface for arranging components. Customize colors, text, and properties in real-time.
              </p>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200">
              <div className="w-14 h-14 bg-blue-700 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production-Ready Code</h3>
              <p className="text-gray-600 leading-relaxed">
                Export clean, optimized React code with Tailwind CSS. No unnecessary code, just maintainable JSX components.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-20 border-t border-gray-200">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple steps to build your application
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gray-300"></div>

              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-blue-700 text-white rounded-lg flex items-center justify-center mx-auto shadow-md">
                    <MousePointerClick className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Browse & Select</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore the component library and select the elements you need for your project.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-blue-700 text-white rounded-lg flex items-center justify-center mx-auto shadow-md">
                    <Layers className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Customize & Arrange</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use the visual editor to arrange components and customize their properties and styling.
                </p>
              </div>

              <div className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-blue-700 text-white rounded-lg flex items-center justify-center mx-auto shadow-md">
                    <Download className="w-10 h-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Export & Implement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Export clean, production-ready code and integrate it directly into your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accelerated Development</h3>
                  <p className="text-gray-600">
                    Reduce development time significantly. Eliminate repetitive component creation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Quality</h3>
                  <p className="text-gray-600">
                    All components follow industry best practices and are optimized for performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Copy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Simple Integration</h3>
                  <p className="text-gray-600">
                    Straightforward implementation. Compatible with any React project using Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Get Started</h3>
              <p className="text-gray-300 mb-6 text-lg">
                Join development teams building efficient, scalable applications.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>100+ customizable components</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Visual page builder</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Production-ready code export</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Regular updates and support</span>
                </li>
              </ul>
              <Link
                to="/customize"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 py-20 border-t border-blue-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto">
              Streamline your development process and build professional interfaces efficiently.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/customize"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <Zap className="w-5 h-5" />
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/components"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-all"
              >
                <Package className="w-5 h-5" />
                View Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
