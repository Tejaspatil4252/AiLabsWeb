import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaCheckCircle, 
  FaUsers, 
  FaChartLine,
  FaAward,
  FaTrophy,
  FaStar,
  FaGlobe
} from 'react-icons/fa';

function AboutSection4() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark theme background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px),
                             linear-gradient(transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm md:text-base font-medium mb-4 md:mb-6 backdrop-blur-sm"
          >
            <FaStar className="mr-2 text-yellow-400 text-xs md:text-sm" />
            Our Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4"
          >
            Milestones That <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Define Us</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto px-4"
          >
            Our path to becoming leaders in AI innovation
          </motion.p>
        </div>

        {/* Timeline - Mobile Optimized */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400 rounded-full opacity-40" />
            <motion.div 
              animate={{ y: [0, 100, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -left-1.5 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"
            />
          </div>

          {[
            {
              year: "2020",
              title: "Vyantra AI Labs Founded",
              description: "Started by AI researchers from top universities",
              icon: <FaRocket />,
              color: "from-blue-400 to-cyan-400",
              achievements: ["Team of 5", "Seed Funding"]
            },
            {
              year: "2021",
              title: "First Enterprise Deployment",
              description: "AI yard management system goes live at major port",
              icon: <FaCheckCircle />,
              color: "from-green-400 to-emerald-400",
              achievements: ["98% Accuracy", "Port of Mumbai"]
            },
            {
              year: "2022",
              title: "Research Breakthrough",
              description: "Published 5 papers at top AI conferences",
              icon: <FaAward />,
              color: "from-purple-400 to-pink-400",
              achievements: ["NeurIPS", "ICML", "CVPR"]
            },
            {
              year: "2023",
              title: "50+ Projects Delivered",
              description: "Serving clients across 15+ industries",
              icon: <FaUsers />,
              color: "from-orange-400 to-red-400",
              achievements: ["Logistics", "Ports", "Manufacturing"]
            },
            {
              year: "2024",
              title: "Global Expansion",
              description: "Opened offices in US, Europe, and Asia",
              icon: <FaGlobe />,
              color: "from-indigo-400 to-purple-400",
              achievements: ["3 Continents", "100+ Team"]
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative mb-8 md:mb-16"
            >
              {/* Mobile Layout - Stacked */}
              <div className="md:hidden">
                {/* Mobile Card */}
                <div className="relative">
                  {/* Year Badge - Top Center on Mobile */}
                  <div className="flex justify-center mb-4">
                    <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold shadow-lg`}>
                      {item.year}
                    </div>
                  </div>

                  {/* Icon - Center on Mobile */}
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-xl border border-white/10`}>
                        <span className="text-2xl">
                          {item.icon}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    whileHover={{ y: -4 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl" />
                      
                      <h3 className="text-lg font-bold text-white mb-2 text-center">
                        {item.title}
                      </h3>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap justify-center gap-2">
                        {item.achievements.map((achieve, i) => (
                          <span 
                            key={i} 
                            className="px-2 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                          >
                            {achieve}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Desktop Layout - Alternating */}
              <div className="hidden md:block">
                <div className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-end' : ''
                }`}>
                  {/* Content */}
                  <div className={`w-5/12 ${
                    index % 2 === 0 ? 'text-right pr-8' : 'pl-8'
                  }`}>
                    <motion.div 
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                      
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300">
                        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl" />
                        
                        <div className={`absolute -top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold shadow-lg`}>
                          {item.year}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 mt-2">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.achievements.map((achieve, i) => (
                            <span 
                              key={i} 
                              className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-300 border border-gray-700 group-hover:border-blue-500/30 group-hover:bg-blue-500/5 transition-all duration-300"
                            >
                              {achieve}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
                      
                      <div className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-xl border border-white/10`}>
                        <span className="text-xl">
                          {item.icon}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Summary - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 md:mt-20 text-center px-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 text-gray-200 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md px-6 md:px-8 py-4 md:py-4 rounded-2xl border border-gray-700/50 shadow-2xl">
            <div className="flex items-center">
              <FaTrophy className="text-yellow-400 mr-2 text-sm md:text-base" />
              <span className="font-semibold text-sm md:text-base">5+ years</span>
              <span className="text-gray-400 ml-1 text-xs md:text-sm">of innovation</span>
            </div>
            <div className="hidden md:block w-1 h-4 bg-gray-700 rounded-full" />
            <div className="block md:hidden w-16 h-px bg-gray-700" />
            <div className="flex items-center">
              <FaAward className="text-purple-400 mr-2 text-sm md:text-base" />
              <span className="font-semibold text-sm md:text-base">15+</span>
              <span className="text-gray-400 ml-1 text-xs md:text-sm">research papers</span>
            </div>
            <div className="hidden md:block w-1 h-4 bg-gray-700 rounded-full" />
            <div className="block md:hidden w-16 h-px bg-gray-700" />
            <div className="flex items-center">
              <FaUsers className="text-blue-400 mr-2 text-sm md:text-base" />
              <span className="font-semibold text-sm md:text-base">50+</span>
              <span className="text-gray-400 ml-1 text-xs md:text-sm">successful projects</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-12 text-center px-4"
        >
          <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center justify-center space-x-2 group">
            <span className="text-sm md:text-base">Explore Our Journey</span>
            <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-sm md:text-base" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection4;