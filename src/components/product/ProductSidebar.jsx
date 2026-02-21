import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSatellite,
  FaMapMarkedAlt, 
  FaChartLine, 
  FaRobot,
  FaShieldAlt,
  FaCube,
  FaBrain,
  FaEye,
  FaCogs,
  FaTimes
} from 'react-icons/fa';

// Map icons to category IDs
const getCategoryIcon = (categoryId) => {
  const icons = {
    'smart-gate': <FaSatellite className="text-xl" />,
    'yard-management': <FaMapMarkedAlt className="text-xl" />,
    'ai-analytics': <FaChartLine className="text-xl" />
  };
  return icons[categoryId] || <FaCube className="text-xl" />;
};

function ProductSidebar({ 
  data, 
  activeCategory, 
  setActiveCategory, 
  selectedProduct, 
  setSelectedProduct,
  isMobile,
  setSidebarOpen 
}) {
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    if (category.products && category.products.length > 0) {
      setSelectedProduct(category.products[0]);
    }
    if (isMobile && setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800/50 flex flex-col ${
      isMobile ? 'w-full border-r-0' : 'w-80 h-screen'
    }`}>
      {/* Mobile Header with Close Button */}
      {isMobile && (
        <div className="flex items-center justify-between p-4 border-b border-gray-800/50">
          <h2 className="text-xl font-bold text-white">Products</h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
      )}

      {/* Desktop Header */}
      {!isMobile && (
        <div className="flex-shrink-0 p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Products</h2>
          <p className="text-gray-400 text-sm">AI-Powered Solutions</p>
          
          {/* Search Bar */}
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Search products..."
              className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-gray-800/70 transition-all duration-200"
            />
            <div className="absolute right-3 top-3 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Categories List */}
      <div className={`flex-1 ${isMobile ? 'p-4' : 'px-6 pb-6'}`}>
        <div className="space-y-2">
          {data.categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                activeCategory === category.id && selectedProduct 
                  ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-lg' 
                  : 'hover:bg-gray-800/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-1.5 rounded-lg ${
                  activeCategory === category.id ? 'bg-blue-500/20' : ''
                }`}>
                  <div className={`${
                    activeCategory === category.id ? 'text-blue-300' : 'text-gray-400'
                  }`}>
                    {getCategoryIcon(category.id)}
                  </div>
                </div>
                <div className="text-left">
                  <span className={`font-medium ${
                    activeCategory === category.id ? 'text-white' : 'text-gray-300'
                  }`}>
                    {category.name}
                  </span>
                </div>
              </div>
            </button>
          ))}

          {/* Coming Soon Section */}
          <div className="pt-6 mt-4 border-t border-gray-800">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Coming Soon
            </h3>
            <div className="space-y-2 opacity-50">
              <div className="flex items-center space-x-3 p-2 rounded-lg">
                <div className="p-1.5 rounded-lg bg-gray-800">
                  <FaBrain className="text-gray-500 text-sm" />
                </div>
                <span className="text-gray-400 text-sm">AI Analytics Platform</span>
              </div>
              <div className="flex items-center space-x-3 p-2 rounded-lg">
                <div className="p-1.5 rounded-lg bg-gray-800">
                  <FaCogs className="text-gray-500 text-sm" />
                </div>
                <span className="text-gray-400 text-sm">Predictive Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Hidden on mobile to save space */}
      {!isMobile && (
        <div className="flex-shrink-0 p-6 border-t border-gray-800/50">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-gray-800">
            <h4 className="text-white font-bold mb-2">Need Help?</h4>
            <p className="text-gray-400 text-sm mb-4">
              Our AI experts are ready to assist you.
            </p>
            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Contact Sales
            </button>
            <div className="mt-3 text-center">
              <span className="text-xs text-gray-500">+1 (800) 123-4567</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-xs text-gray-600">v2.0.0 • Enterprise Suite</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductSidebar;