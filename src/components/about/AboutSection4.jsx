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
    <section className="py-24 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 font-medium mb-6 backdrop-blur-sm"
          >
            <FaStar className="mr-2 text-yellow-400" />
            Our Journey
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Milestones That <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Define Us</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Our path to becoming leaders in AI innovation
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
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
              position: "left",
              color: "from-blue-400 to-cyan-400",
              achievements: ["Team of 5", "Seed Funding"]
            },
            {
              year: "2021",
              title: "First Enterprise Deployment",
              description: "AI yard management system goes live at major port",
              icon: <FaCheckCircle />,
              position: "right",
              color: "from-green-400 to-emerald-400",
              achievements: ["98% Accuracy", "Port of Mumbai"]
            },
            {
              year: "2022",
              title: "Research Breakthrough",
              description: "Published 5 papers at top AI conferences",
              icon: <FaAward />,
              position: "left",
              color: "from-purple-400 to-pink-400",
              achievements: ["NeurIPS", "ICML", "CVPR"]
            },
            {
              year: "2023",
              title: "50+ Projects Delivered",
              description: "Serving clients across 15+ industries",
              icon: <FaUsers />,
              position: "right",
              color: "from-orange-400 to-red-400",
              achievements: ["Logistics", "Ports", "Manufacturing"]
            },
            {
              year: "2024",
              title: "Global Expansion",
              description: "Opened offices in US, Europe, and Asia",
              icon: <FaGlobe />,
              position: "left",
              color: "from-indigo-400 to-purple-400",
              achievements: ["3 Continents", "100+ Team"]
            }
          ].map((item, index) => (
   <motion.div
  key={index}
  initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.15 }}
  className={`relative flex items-center mb-16 ${
    item.position === 'left' ? 'justify-end' : ''
  }`}
>
  {/* Content - Enhanced Card */}
  <div className={`w-5/12 ${
    item.position === 'left' ? 'text-right pr-8' : 'pl-8'
  }`}>
    <motion.div 
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative"
    >
      {/* Soft glow effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl border border-gray-700/50 group-hover:border-blue-500/30 transition-all duration-300">
        {/* Corner accents - top left and bottom right */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-blue-400/30 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-400/30 rounded-br-2xl" />
        
        {/* Year badge */}
        <div className={`absolute -top-4 ${item.position === 'left' ? 'right-4' : 'left-4'} px-4 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-sm font-bold shadow-lg`}>
          {item.year}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 mt-2">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        
        {/* Achievement tags */}
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

  {/* Center Icon - Enhanced */}
  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
    <motion.div 
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className="relative"
    >
      {/* Soft glow */}
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`} />
      
      {/* Icon container */}
      <div className={`relative w-14 h-14 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-xl border border-white/10`}>
        <span className="text-xl">
          {item.icon}
        </span>
      </div>
    </motion.div>
  </div>
</motion.div>
          ))}
        </div>

        {/* Achievement Summary - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-4 text-gray-200 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md px-8 py-4 rounded-2xl border border-gray-700/50 shadow-2xl">
            <div className="flex items-center">
              <FaTrophy className="text-yellow-400 mr-2" />
              <span className="font-semibold">5+ years</span>
              <span className="text-gray-400 ml-1">of innovation</span>
            </div>
            <div className="w-1 h-4 bg-gray-700 rounded-full" />
            <div className="flex items-center">
              <FaAward className="text-purple-400 mr-2" />
              <span className="font-semibold">15+</span>
              <span className="text-gray-400 ml-1">research papers</span>
            </div>
            <div className="w-1 h-4 bg-gray-700 rounded-full" />
            <div className="flex items-center">
              <FaUsers className="text-blue-400 mr-2" />
              <span className="font-semibold">50+</span>
              <span className="text-gray-400 ml-1">successful projects</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center space-x-2 group">
            <span>Explore Our Journey</span>
            <FaRocket className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection4;