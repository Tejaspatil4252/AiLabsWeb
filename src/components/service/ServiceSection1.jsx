import React from 'react';
import { motion } from 'framer-motion';
import serviceAiBg from '../../assets/bgImages/serviceAiBg.jpg';
import { 
  FaBrain, 
  FaRobot, 
  FaNetworkWired, 
  FaChartLine,
  FaArrowRight,
  FaCogs,
  FaMicrochip,
  FaCode,
  FaCloud,
  FaSatellite,
  FaShieldAlt,
  FaBolt,
  FaMagic,
  FaRocket,
  FaPuzzlePiece,
  FaLightbulb
} from 'react-icons/fa';

function ServiceSection1() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Neural Network Connection Dots
  const NeuralNode = ({ x, y, delay }) => (
    <motion.div
      className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay
      }}
    />
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950/20 to-purple-950/20">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Neural Network Connections */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4299e1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#9f7aea" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#4299e1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Neural Network Lines */}
          <path d="M10,50 Q100,10 200,100 Q300,200 400,150" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" opacity="0.3">
            <animate attributeName="d" dur="20s" repeatCount="indefinite" values="
              M10,50 Q100,10 200,100 Q300,200 400,150;
              M10,100 Q150,20 250,80 Q350,150 400,100;
              M10,50 Q100,10 200,100 Q300,200 400,150;
            " />
          </path>
          <path d="M50,200 Q150,100 250,150 Q350,250 450,180" stroke="url(#neural-gradient)" strokeWidth="1" fill="none" opacity="0.3">
            <animate attributeName="d" dur="25s" repeatCount="indefinite" values="
              M50,200 Q150,100 250,150 Q350,250 450,180;
              M50,150 Q200,50 300,100 Q400,200 450,120;
              M50,200 Q150,100 250,150 Q350,250 450,180;
            " />
          </path>
        </svg>

        {/* Neural Network Nodes */}
        {[
          { x: 10, y: 20, delay: 0 },
          { x: 30, y: 60, delay: 0.3 },
          { x: 50, y: 30, delay: 0.6 },
          { x: 70, y: 50, delay: 0.9 },
          { x: 90, y: 25, delay: 1.2 },
          { x: 25, y: 75, delay: 1.5 },
          { x: 45, y: 85, delay: 1.8 },
          { x: 65, y: 70, delay: 2.1 },
          { x: 85, y: 80, delay: 2.4 }
        ].map((node, i) => (
          <NeuralNode key={i} x={node.x} y={node.y} delay={node.delay} />
        ))}
        
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${serviceAiBg})`,
            filter: 'brightness(0.3) saturate(1.2)',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay'
          }}
        />

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20" />
      </div>

      {/* Main Content - Radial Layout */}
      <div className="relative z-10 mt-10">
        <section className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            
            {/* Center Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              {/* Unique Service Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center mb-12 relative group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-blue-500/20 rounded-full"
                />

              </motion.div>

              {/* Unique Service Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none"
              >
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl" />
                  <span className="relative text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text">
                    AI
                  </span>
                </span>
                <span className="block text-4xl md:text-5xl text-gray-300 mt-6">
                  AS A
                </span>
                <span className="block text-white text-5xl md:text-7xl mt-4">
                  Service Platform
                </span>
              </motion.h1>

              {/* Unique Service Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed"
              >
                We don't just build AI—we provide <span className="text-cyan-300 font-semibold">complete intelligence ecosystems</span> 
                that scale, learn, and adapt to your business needs in real-time.
              </motion.p>

              {/* Service Process Ring */}
              <motion.div
                variants={itemVariants}
                className="relative mb-20"
              >
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting Lines */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 transform -translate-y-1/2" />
                    
                    {[
                      {
                        step: "01",
                        title: "Intelligence Discovery",
                        description: "AI capability assessment & strategy mapping",
                        icon: <FaLightbulb className="text-3xl" />,
                        color: "from-blue-500/20 to-cyan-500/20"
                      },
                      {
                        step: "02",
                        title: "AI Architecture",
                        description: "Custom model design & system integration",
                        icon: <FaPuzzlePiece className="text-3xl" />,
                        color: "from-purple-500/20 to-pink-500/20"
                      },
                      {
                        step: "03",
                        title: "Intelligence Deployment",
                        description: "Production rollout & continuous optimization",
                        icon: <FaRocket className="text-3xl" />,
                        color: "from-cyan-500/20 to-blue-500/20"
                      }
                    ].map((step, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -10 }}
                        className="relative z-10"
                      >
                        <div className={`p-8 rounded-2xl bg-gradient-to-br ${step.color} backdrop-blur-lg border border-gray-700/30 hover:border-blue-400/40 transition-all duration-300`}>
                          <div className="flex flex-col items-center text-center">
                        
                            <div className="text-white mb-4">
                              {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Service Capabilities Grid */}
              <motion.div
                variants={itemVariants}
                className="mb-16"
              >
                <h3 className="text-3xl font-bold text-white mb-12">
                  <span className="text-gray-400">Our </span>
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Service Pillars
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {[
                    {
                      title: "AI Consulting",
                      description: "Strategic AI roadmap & implementation planning",
                      icon: <FaBrain />,
                      metric: "50+ Strategies",
                      color: "text-blue-300"
                    },
                    {
                      title: "ML Engineering",
                      description: "Custom model development & training pipelines",
                      icon: <FaRobot />,
                      metric: "200+ Models",
                      color: "text-purple-300"
                    },
                    {
                      title: "AI Operations",
                      description: "24/7 monitoring, maintenance & optimization",
                      icon: <FaCogs />,
                      metric: "99.9% Uptime",
                      color: "text-cyan-300"
                    },
                    {
                      title: "AI Integration",
                      description: "Seamless API integration & system architecture",
                      icon: <FaNetworkWired />,
                      metric: "100+ APIs",
                      color: "text-indigo-300"
                    }
                  ].map((pillar, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/30 transition-all duration-300">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 ${pillar.color}`}>
                            {pillar.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white mb-2">
                              {pillar.title}
                            </h4>
                            <div className="text-sm font-bold text-blue-300">
                              {pillar.metric}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {pillar.description}
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-700/50 group-hover:border-blue-500/30 transition-colors duration-300">
                          <span className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors duration-300">
                            Learn more →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Action Section */}
              <motion.div
                variants={itemVariants}
                className="relative"
              >
                <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-cyan-900/30 backdrop-blur-lg border border-blue-500/20">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-6">
                        Ready to <span className="text-cyan-300">Automate</span> Intelligence?
                      </h3>
                      <p className="text-gray-300 mb-8">
                        Schedule a technical discovery session with our AI architects and receive a custom intelligence roadmap in 48 hours.
                      </p>
                      <div className="space-y-4">
                        {[
                          "No upfront costs",
                          "90-day implementation guarantee",
                          "24/7 AI support team",
                          "Scalable pricing models"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center">
                            <FaShieldAlt className="text-green-400 mr-3" />
                            <span className="text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center space-x-3 group"
                      >
                        <span>Request AI Consultation</span>
                        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full px-8 py-4 bg-gray-900/50 backdrop-blur-sm text-white font-bold rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300"
                      >
                        Download Service Catalog
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Service Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                  {[
                    { value: "48hr", label: "Average Deployment", suffix: "Time" },
                    { value: "99.9%", label: "System", suffix: "Reliability" },
                    { value: "50+", label: "Industry", suffix: "Verticals" },
                    { value: "24/7", label: "AI Support", suffix: "Team" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 backdrop-blur-sm border border-gray-700/30">
                      <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 font-medium">
                        {stat.label}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {stat.suffix}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ServiceSection1;