import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDatabase, 
  FaRobot, 
  FaChartLine, 
  FaRoute, 
  FaEye, 
  FaCogs,
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaSatelliteDish,
  FaMapMarkedAlt,
  FaShieldAlt
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const steps = [
    {
      number: "01",
      title: "Data Foundation",
      description: "Collect real-time GPS, CCTV, IoT sensor data into our cloud data lake",
      icon: <FaDatabase className="text-xl" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02",
      title: "Gate Automation",
      description: "AI OCR for container numbers, damage detection, and safety monitoring",
      icon: <FaRobot className="text-xl" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Smart Slot Allocation",
      description: "ML algorithms optimize container placement minimizing re-handles",
      icon: <FaChartLine className="text-xl" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      number: "04",
      title: "Yard Traffic Optimization",
      description: "Reinforcement Learning for optimal truck and equipment routing",
      icon: <FaRoute className="text-xl" />,
      color: "from-green-500 to-green-600"
    },
    {
      number: "05",
      title: "Real-Time Dashboard",
      description: "Digital twin simulation with live yard heatmaps and predictions",
      icon: <FaEye className="text-xl" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      number: "06",
      title: "Continuous Improvement",
      description: "Weekly AI model retraining with supervisor feedback loops",
      icon: <FaCogs className="text-xl" />,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const aiFeatures = [
    {
      title: "Computer Vision AI",
      description: "YOLO, OpenCV for OCR, damage detection, and safety monitoring",
      icon: <FaEye className="text-2xl" />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Machine Learning",
      description: "XGBoost, Random Forest for predictions and optimization",
      icon: <FaBrain className="text-2xl" />,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      title: "Reinforcement Learning",
      description: "DQN, PPO for traffic flow and resource optimization",
      icon: <FaRoute className="text-2xl" />,
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600"
    },
    {
      title: "IoT Integration",
      description: "GPS, CCTV, sensors for comprehensive yard visibility",
      icon: <FaSatelliteDish className="text-2xl" />,
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      title: "Digital Twin",
      description: "AnyLogic simulation for congestion scenario testing",
      icon: <FaMapMarkedAlt className="text-2xl" />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      title: "Predictive Analytics",
      description: "Prophet, ARIMA for demand forecasting and maintenance",
      icon: <FaCloud className="text-2xl" />,
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
      
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(90deg, #4299e1 1px, transparent 1px),
                           linear-gradient(#4299e1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-medium mb-4">
              <FaShieldAlt className="mr-2" />
              Enterprise AI Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Smart Gate &
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Yard Management System
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming container yards with cutting-edge AI, machine learning, 
              and computer vision technologies for unprecedented operational efficiency.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
              Our <span className="text-blue-600">6-Step AI Implementation</span> Roadmap
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                    <div className="relative">
                  <div className="h-full p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <div className="ml-4 p-2 rounded-lg bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
                          <div className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {step.title}
                    </h4>

                    {/* Step Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress Line (for connected steps) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 opacity-30" />
                    )}
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Features Grid */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Advanced <span className="text-purple-600">AI Technology</span> Stack
                </h3>
                <p className="text-gray-600 max-w-2xl">
                  Leveraging state-of-the-art AI/ML techniques for comprehensive yard management solutions.
                </p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center group">
                Explore All Features
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`h-full p-6 rounded-xl border border-gray-200 transition-all duration-300 group-hover:border-blue-300 group-hover:shadow-lg ${feature.bgColor}`}>
                    <div className="flex items-start mb-4">
                      <div className={`p-3 rounded-lg ${feature.bgColor} border border-gray-200 group-hover:border-blue-300 transition-colors duration-300`}>
                        <div className={feature.iconColor}>
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expected Results Section */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Transformative <span className="text-blue-600">Business Impact</span>
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Proven results from AI implementation across major logistics hubs.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "30-40%", label: "Faster Truck Turnaround", color: "text-blue-600" },
                  { value: "25-35%", label: "Reduced Re-handling Costs", color: "text-purple-600" },
                  { value: "20-30%", label: "Higher Yard Throughput", color: "text-cyan-600" },
                  { value: "100%", label: "Real-time Visibility", color: "text-green-600" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Value Proposition */}
              <div className="mt-12 pt-8 border-t border-blue-200">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  Client Value Proposition
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    "Reduced manual effort with AI automation",
                    "Higher yard utilization through ML forecasting",
                    "Faster operations with reduced fraud detection"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection2;