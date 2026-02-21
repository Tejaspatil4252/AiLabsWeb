import React from 'react'
import { useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductContent from '../product/ProductContent'
import ProductSidebar from '../product/ProductSidebar';
import { productsData } from '../product/productData';
import ProductHeader from '../product/ProductHeader';

import { FaBars } from 'react-icons/fa';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('1');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Header at top */}
      <ProductHeader />
      
      {/* Mobile Menu Button - Below header */}
      {isMobile && (
        <div className="sticky top-0 z-30 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <FaBars className="text-xl" />
              <span className="text-sm font-medium">Products Menu</span>
            </button>
          </div>
        </div>
      )}

      {/* Main content with sidebar and product display */}
      <div className="relative">
        {/* Overlay for mobile */}
        <AnimatePresence>
          {isMobile && sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSidebarOpen(false)}
           
              style={{ top: '120px' }} // Adjust based on your header height
            />
          )}
        </AnimatePresence>

        {/* Sidebar - slides down from top on mobile */}
        <AnimatePresence>
          {(!isMobile || sidebarOpen) && (
            <motion.div
              initial={isMobile ? { height: 0, opacity: 0 } : false}
              animate={isMobile ? { height: 'auto', opacity: 1 } : false}
              exit={isMobile ? { height: 0, opacity: 0 } : false}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`${isMobile ? 'overflow-hidden' : ''}`}
            >
              <div className={`${isMobile ? '' : 'sticky top-0 z-20 float-left'}`}>
                <ProductSidebar 
                  data={productsData}
                  activeCategory={activeCategory}
                  setActiveCategory={setActiveCategory}
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProduct}
                  isMobile={isMobile}
                  setSidebarOpen={setSidebarOpen}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Content Area */}
        <div className={`transition-all duration-300 ${
          !isMobile ? 'ml-80' : 'ml-0'
        }`}>
          <ProductContent 
            product={selectedProduct}
            activeCategory={activeCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default Products;

