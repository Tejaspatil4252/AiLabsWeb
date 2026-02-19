import React from 'react';
import { motion } from 'framer-motion';
import prodBG from '../../assets/bgImages/prod.jpg';

function ProductHeader() {
  return (
    <div className="relative w-full bg-gradient-to-br from-gray-950 via-blue-950/20 to-purple-950/20 border-b border-gray-800/50">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${prodBG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-transparent to-gray-950" />
        
        {/* Abstract grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(90deg, #4299e1 1px, transparent 1px),
                           linear-gradient(#4299e1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 ml-12 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >


          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-16">
            <span className="text-white">Our </span>
            <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text">
              Products
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Cutting-edge AI solutions transforming yard management and gate operations. 
            Explore our intelligent systems designed to automate, optimize, and revolutionize your logistics workflow.
          </p>

          {/* Stats or quick info */}
          <div className="flex flex-wrap gap-6 mt-8">
            {[
              { label: "AI-Powered", value: "100%" },
              { label: "Accuracy Rate", value: "98.5%" },
              { label: "Active Deployments", value: "50+" }
            ].map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mr-3" />
                <div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    </div>
  );
}

export default ProductHeader;