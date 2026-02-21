import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaEye, 
  FaRobot, 
  FaChartLine, 
  FaNetworkWired,
  FaMicrochip,
  FaCloud,
  FaShieldAlt,
  FaCode,
  FaDatabase
} from 'react-icons/fa';

function AboutSection2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="py-18 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-medium mb-6">
            <FaMicrochip className="mr-2" />
            Our Expertise
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Advancing the Frontiers of
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mt-2">
              Artificial Intelligence
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We specialize in cutting-edge AI research and development across multiple domains,
            delivering solutions that push the boundaries of what's possible.
          </motion.p>
        </motion.div>

        {/* Research Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaBrain className="text-3xl" />,
              title: "Deep Learning",
              description: "Advanced neural networks, transformers, and generative models for complex pattern recognition and prediction.",
              metrics: ["15+ Research Papers", "20+ Models Deployed"],
              color: "from-blue-500 to-cyan-500",
              iconColor: "text-blue-600",
              bgColor: "bg-blue-50"
            },
            {
              icon: <FaEye className="text-3xl" />,
              title: "Computer Vision",
              description: "State-of-the-art object detection, image segmentation, OCR, and real-time visual analytics systems.",
              metrics: ["98.5% Accuracy", "50+ Implementations"],
              color: "from-purple-500 to-pink-500",
              iconColor: "text-purple-600",
              bgColor: "bg-purple-50"
            },
            {
              icon: <FaRobot className="text-3xl" />,
              title: "Reinforcement Learning",
              description: "Intelligent agents that learn optimal decisions through interaction, perfect for automation and control systems.",
              metrics: ["DQN, PPO, SAC", "Multi-agent Systems"],
              color: "from-green-500 to-emerald-500",
              iconColor: "text-green-600",
              bgColor: "bg-green-50"
            },
            {
              icon: <FaChartLine className="text-3xl" />,
              title: "Predictive Analytics",
              description: "Time series forecasting, demand prediction, and anomaly detection using advanced ML algorithms.",
              metrics: ["95% Precision", "Real-time Analysis"],
              color: "from-orange-500 to-red-500",
              iconColor: "text-orange-600",
              bgColor: "bg-orange-50"
            },
            {
              icon: <FaNetworkWired className="text-3xl" />,
              title: "AI Integration",
              description: "Seamless integration of AI models into existing enterprise systems with scalable architecture.",
              metrics: ["99.9% Uptime", "50+ APIs Built"],
              color: "from-indigo-500 to-purple-500",
              iconColor: "text-indigo-600",
              bgColor: "bg-indigo-50"
            },
            {
              icon: <FaCloud className="text-3xl" />,
              title: "Edge AI",
              description: "Deploying optimized AI models on edge devices for real-time processing with minimal latency.",
              metrics: ["<10ms Latency", "Edge Optimized"],
              color: "from-cyan-500 to-blue-500",
              iconColor: "text-cyan-600",
              bgColor: "bg-cyan-50"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Icon with colored background */}
                <div className={`w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={item.iconColor}>
                    {item.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {item.metrics.map((metric, i) => (
                    <span key={i} className="px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 border border-gray-200">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Decorative gradient line - fixed to respect border radius */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{ 
                    borderBottomLeftRadius: '16px', 
                    borderBottomRightRadius: '16px' 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
        >
          {[
            { value: "50+", label: "AI Projects Delivered" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "15+", label: "Research Publications" },
            { value: "10+", label: "Industry Awards" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection2;