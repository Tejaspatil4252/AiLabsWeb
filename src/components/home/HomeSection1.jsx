import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine,
  FaArrowRight,
  FaMoneyBillWave,
  FaFileContract,
  FaRobot,
    FaBrain,
  FaMicrochip,
  FaNetworkWired,
  
  FaLightbulb,
  FaCogs,
  FaDatabase,
  FaCloud,
} from 'react-icons/fa';
import AiBg from '../../assets/bgImages/aibg.jpg';

const HomeSection1 = () => {
  // Animation variants
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

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    }),
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    }
  };

const services = [
  {
    icon: <FaLightbulb className="text-3xl" />,
    title: "AI STRATEGY CONSULTING",
    description: "Develop comprehensive AI adoption roadmaps tailored to your industry and business objectives.",
    gradient: "from-blue-600/30 to-cyan-600/20",
    border: "border-blue-500/40",
    iconColor: "text-blue-400"
  },
  {
    icon: <FaCogs className="text-3xl" />,
    title: "CUSTOM AI SOLUTIONS",
    description: "End-to-end AI system development, from concept to deployment, specifically designed for your needs.",
    gradient: "from-purple-600/30 to-indigo-600/20",
    border: "border-purple-500/40",
    iconColor: "text-purple-400"
  },
  {
    icon: <FaDatabase className="text-3xl" />,
    title: "DATA INTELLIGENCE",
    description: "Leverage big data with our AI platforms to uncover hidden patterns and opportunities.",
    gradient: "from-green-600/30 to-emerald-600/20",
    border: "border-green-500/40",
    iconColor: "text-green-400"
  },
  {
    icon: <FaCloud className="text-3xl" />,
    title: "AI CLOUD INFRASTRUCTURE",
    description: "Scalable AI infrastructure and MLOps solutions for seamless model deployment and management.",
    gradient: "from-orange-600/30 to-amber-600/20",
    border: "border-orange-500/40",
    iconColor: "text-orange-400"
  }
];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* AI Background Image with Magic Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${AiBg})`,
            filter: 'brightness(0.4) saturate(1.3) contrast(1.1)',
            backgroundPosition: '70% 30%',
            
          }}
        />
        
        {/* Color Enhancement Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-900/40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/60" />
        
        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-gradient-x opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section - Left Aligned Text */}
        <section className="min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl mt-28"
            >
              {/* Badge - Left Aligned */}

{/* Main Heading - Left Aligned */}
<motion.h1 
  variants={itemVariants}
  className="text-5xl md:text-7xl lg:text-8xl font-bold mt-8 mb-6"
>
  <span className="text-white">Artificial</span>
  <br />
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
    Intelligence,
  </span>
  <br />
  <span className="text-white">Innovation &</span>
  <br />
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
    Implementation
  </span>
</motion.h1>

{/* Description - Left Aligned */}
<motion.p 
  variants={itemVariants}
  className="text-xl md:text-2xl text-gray-200 mb-10 max-w-xl leading-relaxed"
>
  Transform complex challenges into intelligent solutions with cutting-edge AI research and scalable implementations that drive real business impact.
</motion.p>

              {/* CTA Buttons - Left Aligned with reduced spacing */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-16"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span className="text-lg">Contact Us</span>
                  <div className="relative">
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 text-white font-bold rounded-xl hover:bg-gray-800/70 hover:border-blue-500/30 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span className="text-lg">Our Services</span>
                  <FaArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </motion.div>

              {/* Stats Bar - Compact and Integrated */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
              >
                {[
                  { number: "200+", label: "Projects" },
                  { number: "50+", label: "Clients" },
                  { number: "24/7", label: "Support" },
                  { number: "99%", label: "Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    className="text-center p-4 bg-gray-900/40 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm mt-1 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services Section - Moved closer to hero */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Core Services
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Delivering excellence through innovative solutions and proven methodologies
              </p>
            </motion.div>

            {/* Services Cards - Compact grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover="hover"
                  className="relative group"
                >
                  {/* Card with enhanced glass effect */}
                  <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${service.gradient} backdrop-blur-xl border ${service.border} transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20`}>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`${service.iconColor} transform group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute -inset-4 ${service.iconColor.replace('text-', 'bg-')}/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>

                    {/* Title with gradient underline */}
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300 relative">
                      {service.title}
                      <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-current to-transparent group-hover:w-12 transition-all duration-300"></div>
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-blue-300 text-sm font-medium flex items-center">
                        Learn more
                        <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Corner Glow Effects */}
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA - Reduced spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-200 text-sm">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                Ready to transform your business?
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-4 px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white text-sm font-medium hover:shadow-lg transition-shadow"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeSection1;