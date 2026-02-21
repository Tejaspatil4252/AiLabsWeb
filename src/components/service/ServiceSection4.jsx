import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain,
  FaMicrochip,
  FaCloud,
  FaShieldAlt, 
  FaRocket,
  FaChartLine,
  FaCode,
  FaNetworkWired,
  FaCogs,
  FaRobot,
  FaEye,
  FaCube
} from 'react-icons/fa';

function ServiceSection4() {
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
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const techStack = [
    { 
      name: "TensorFlow", 
      level: "Expert", 
      icon: <FaBrain />,
      description: "Deep learning & neural networks",
      color: "blue"
    },
    { 
      name: "PyTorch", 
      level: "Expert", 
      icon: <FaCube />,
      description: "Research & production",
      color: "orange"
    },
    { 
      name: "JAX", 
      level: "Advanced", 
      icon: <FaCode />,
      description: "High-performance ML",
      color: "cyan"
    },
    { 
      name: "Hugging Face", 
      level: "Expert", 
      icon: <FaRobot />,
      description: "LLMs & transformers",
      color: "yellow"
    },
    { 
      name: "OpenCV", 
      level: "Expert", 
      icon: <FaEye />,
      description: "Computer vision",
      color: "green"
    },
    { 
      name: "CUDA", 
      level: "Advanced", 
      icon: <FaMicrochip />,
      description: "GPU acceleration",
      color: "purple"
    },
    { 
      name: "Docker/K8s", 
      level: "Expert", 
      icon: <FaCloud />,
      description: "Container orchestration",
      color: "indigo"
    },
    { 
      name: "MLflow", 
      level: "Advanced", 
      icon: <FaChartLine />,
      description: "ML lifecycle",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", light: "bg-blue-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", light: "bg-orange-100" },
      cyan: { bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", light: "bg-cyan-100" },
      yellow: { bg: "bg-yellow-50", text: "text-yellow-600", border: "border-yellow-200", light: "bg-yellow-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", light: "bg-green-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", light: "bg-purple-100" },
      indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", light: "bg-indigo-100" },
      pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200", light: "bg-pink-100" }
    };
    return colors[color] || colors.blue;
  };

  const deploymentOptions = [
    {
      title: "Cloud AI",
      desc: "AWS SageMaker, Azure ML, GCP AI Platform",
      icon: <FaCloud className="text-2xl" />,
      color: "blue",
      features: ["Auto-scaling", "Managed infrastructure", "Global deployment"]
    },
    {
      title: "On-Premise",
      desc: "Air-gapped deployment for sensitive data",
      icon: <FaShieldAlt className="text-2xl" />,
      color: "purple",
      features: ["Data sovereignty", "Low latency", "Custom hardware"]
    },
    {
      title: "Edge AI",
      desc: "Real-time inference at the source",
      icon: <FaRocket className="text-2xl" />,
      color: "green",
      features: ["IoT integration", "Offline capability", "<10ms latency"]
    },
    {
      title: "Hybrid",
      desc: "Distributed architecture across environments",
      icon: <FaNetworkWired className="text-2xl" />,
      color: "orange",
      features: ["Flexible scaling", "Cost optimization", "Resilience"]
    }
  ];

  const metrics = [
    { value: "150+", label: "Models Deployed", icon: <FaBrain />, color: "blue" },
    { value: "99.9%", label: "Production Uptime", icon: <FaCloud />, color: "purple" },
    { value: "<50ms", label: "Inference Latency", icon: <FaRocket />, color: "green" },
    { value: "24/7", label: "Model Monitoring", icon: <FaCogs />, color: "orange" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Clean background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-100 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium mb-6 shadow-lg shadow-purple-200"
          >
            <FaMicrochip className="mr-2" />
            AI Infrastructure
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built on Modern <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">AI Stack</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Enterprise-grade infrastructure powering next-generation AI solutions
          </motion.p>
        </motion.div>

        {/* Metrics Row - Simplified */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, idx) => {
            const colors = getColorClasses(metric.color);
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                  <div className={`text-3xl mb-3 ${colors.text}`}>
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-500">{metric.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tech Stack */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Frameworks & Tools</h3>
              <p className="text-gray-500">Industry-standard technologies for production AI</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {techStack.map((tech, index) => {
                const colors = getColorClasses(tech.color);
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                          <div className={colors.text}>
                            {tech.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-xs text-gray-500">{tech.description}</div>
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text} font-medium`}>
                          {tech.level}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Deployment Options */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Deployment Architecture</h3>
              <p className="text-gray-500">Flexible deployment across environments</p>
            </motion.div>

            <div className="space-y-4">
              {deploymentOptions.map((option, index) => {
                const colors = getColorClasses(option.color);
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center`}>
                          <div className={colors.text}>
                            {option.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{option.title}</h4>
                          <p className="text-sm text-gray-500 mb-2">{option.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {option.features.map((feature, i) => (
                              <span key={i} className={`text-xs px-2 py-1 ${colors.bg} ${colors.text} rounded-full`}>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Trusted By - Simplified */}
        <motion.div
          variants={itemVariants}
          className="mt-20 pt-12 border-t border-gray-200"
        >
          <p className="text-center text-gray-400 text-sm mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            {["OpenAI", "DeepMind", "Anthropic", "Cohere", "Mistral AI"].map((company, i) => (
              <span key={i} className="text-sm font-medium">{company}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceSection4;