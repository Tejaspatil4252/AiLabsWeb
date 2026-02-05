import React from 'react';
import { motion } from 'framer-motion';
import aboutAiBg from '../../assets/bgImages/aboutAi.jpg';
import { 
  FaSatellite,     
  FaEye,           
  FaChartLine,     
  FaBrain,          
  FaRobot,          
  FaDatabase,      
  FaCogs,          
  FaSync,          
  FaShieldAlt,     
  FaMapMarkedAlt,  
  FaTachometerAlt,  
  FaNetworkWired,   
  FaArrowRight      
} from 'react-icons/fa';

function AboutSection1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

return (
  <div className="relative min-h-screen overflow-hidden">
    {/* Background Image with Overlay - Keep the same visual style */}
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${aboutAiBg})`,
          filter: 'brightness(0.5) saturate(1.4) contrast(1.1)',
          backgroundPosition: 'center 30%'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-gray-900/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/80" />
      
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px),
                           linear-gradient(transparent 79px, #4299e1 79px, #4299e1 81px, transparent 81px)`,
          backgroundSize: '100px 100px'
        }}
      />
    </div>

    {/* Main Content */}
    <div className="relative z-10 mt-24 mb-10">
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-5xl mx-auto"
          >
           


            {/* Main Title - About Us Focus */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Pioneering the Future of</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                Artificial Intelligence
              </span>
            </motion.h1>

            {/* Mission Statement */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We transform complex challenges into intelligent solutions through cutting-edge 
              AI research, machine learning innovation, and computer vision breakthroughs.
            </motion.p>

            {/* Core Values Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                {
                  title: "Innovation First",
                  description: "Pushing boundaries in AI research and development",
                  icon: <FaRobot className="text-3xl" />,
                  gradient: "from-blue-500/20 to-cyan-500/20",
                  iconColor: "text-cyan-400"
                },
                {
                  title: "Ethical AI",
                  description: "Building transparent, fair, and responsible AI systems",
                  icon: <FaShieldAlt className="text-3xl" />,
                  gradient: "from-purple-500/20 to-pink-500/20",
                  iconColor: "text-purple-400"
                },
                {
                  title: "Real-World Impact",
                  description: "Solving practical problems across industries",
                  icon: <FaChartLine className="text-3xl" />,
                  gradient: "from-green-500/20 to-emerald-500/20",
                  iconColor: "text-green-400"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative group"
                >
                  <div className={`h-full p-6 rounded-xl bg-gradient-to-br ${value.gradient} backdrop-blur-lg border border-gray-700/30 hover:border-blue-500/40 transition-all duration-300`}>
                    
                    <div className="relative mb-4 flex justify-center">
                      <div className={`${value.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <div className={`absolute -inset-4 ${value.iconColor.replace('text-', 'bg-')}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-blue-300 transition-colors duration-300">
                      {value.title}
                    </h3>

                    <p className="text-gray-200 text-sm text-center leading-relaxed">
                      {value.description}
                    </p>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-16 transition-all duration-300"></div>
                  </div>

                  <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </motion.div>

            {/* Founding Story / Brief Intro */}
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto mb-10">
              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-gray-700/30">
                <p className="text-gray-200 text-lg leading-relaxed italic">
                  "Founded by a team of AI researchers and industry experts, 
                  Vyantra AI Labs bridges the gap between academic research 
                  and practical implementation, delivering AI solutions that 
                  truly transform businesses."
                </p>
              </div>
            </motion.div>

            {/* CTA for About Us */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span className="text-lg">Meet Our Team</span>
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-bold rounded-xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group border border-gray-700"
              >
                <span className="text-lg">Our AI Research</span>
                <FaBrain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Company Milestones (Optional quick stats) */}
            <motion.div 
              variants={itemVariants}
              className="mt-16 pt-8 border-t border-gray-700/30"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "50+", label: "AI Projects" },
                  { number: "15+", label: "Industries Served" },
                  { number: "10+", label: "Research Papers" },
                  { number: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  </div>
);
}

export default AboutSection1;