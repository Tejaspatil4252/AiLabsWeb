import React from 'react'
import { useState } from 'react';
import ProductContent from '../product/ProductContent'
import ProductSidebar from '../product/ProductSidebar';
import { productsData } from '../product/productData';
import ProductHeader from '../product/ProductHeader';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('1');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900">
      {/* Header at top */}
      <ProductHeader />
      
      {/* Main content with sidebar and product display */}
      <div className="relative">
        {/* Sidebar - sticky */}
        <div className="sticky top-0 z-20 float-left">
          <ProductSidebar 
            data={productsData}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </div>
        
        {/* Content Area - with left margin to account for sidebar */}
        <div className="ml-80">
          <ProductContent 
            product={selectedProduct}
            activeCategory={activeCategory}
          />
        </div>
      </div>
    </div>
  );
}

export default Products