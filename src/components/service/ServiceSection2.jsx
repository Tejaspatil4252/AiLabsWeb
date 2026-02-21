import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaEye, 
  FaChartLine, 
  FaRobot,
  FaMicrochip,
  FaCloud,
  FaNetworkWired,
  FaCogs,
  FaCode,
  FaShieldAlt,
  FaDatabase,
  FaLanguage
} from 'react-icons/fa';

function ServiceSection2() {
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
      transition: { duration: 0.6 }
    }
  };

  const services = [
    {
      category: "AI Research & Development",
      items: [
        {
          icon: <FaBrain className="text-2xl" />,
          title: "Custom AI Model Development",
          description: "We design and train bespoke neural networks for classification, regression, and generation tasks tailored to your specific business logic and data architecture.",
          capabilities: ["Transformer Models", "CNNs", "RNNs", "GNNs"],
          iconBg: "bg-blue-50",
          iconColor: "text-blue-600",
          gradient: "from-blue-400 to-cyan-400"
        },
        {
          icon: <FaCode className="text-2xl" />,
          title: "Algorithm Engineering",
          description: "Our team implements and optimizes cutting-edge algorithms from academic research into production-ready code with benchmarked performance metrics.",
          capabilities: ["Optimization", "Search Algorithms", "Graph Analytics"],
          iconBg: "bg-indigo-50",
          iconColor: "text-indigo-600",
          gradient: "from-indigo-400 to-purple-400"
        }
      ]
    },
    {
      category: "Computer Vision Solutions",
      items: [
        {
          icon: <FaEye className="text-2xl" />,
          title: "Industrial Vision Systems",
          description: "Deploy computer vision pipelines for quality control, defect detection, OCR, and real-time monitoring in manufacturing and logistics environments.",
          capabilities: ["Object Detection", "Image Segmentation", "OCR/ICR"],
          iconBg: "bg-purple-50",
          iconColor: "text-purple-600",
          gradient: "from-purple-400 to-pink-400"
        },
        {
          icon: <FaRobot className="text-2xl" />,
          title: "Video Analytics",
          description: "Real-time processing of video streams for activity recognition, tracking, and anomaly detection using state-of-the-art vision transformers.",
          capabilities: ["Action Recognition", "Multi-object Tracking", "Scene Understanding"],
          iconBg: "bg-pink-50",
          iconColor: "text-pink-600",
          gradient: "from-pink-400 to-rose-400"
        }
      ]
    },
    {
      category: "Machine Learning Engineering",
      items: [
        {
          icon: <FaChartLine className="text-2xl" />,
          title: "Predictive Modeling",
          description: "Build and validate forecasting models for demand prediction, inventory optimization, and trend analysis using time-series and regression techniques.",
          capabilities: ["Time Series", "Regression", "Classification"],
          iconBg: "bg-green-50",
          iconColor: "text-green-600",
          gradient: "from-green-400 to-emerald-400"
        },
        {
          icon: <FaNetworkWired className="text-2xl" />,
          title: "Recommendation Systems",
          description: "Develop collaborative filtering and content-based recommendation engines that drive personalization and user engagement.",
          capabilities: ["Collaborative Filtering", "Content-based", "Hybrid Systems"],
          iconBg: "bg-teal-50",
          iconColor: "text-teal-600",
          gradient: "from-teal-400 to-cyan-400"
        }
      ]
    },
    {
      category: "Natural Language Processing",
      items: [
        {
          icon: <FaLanguage className="text-2xl" />,
          title: "LLM Integration & Fine-tuning",
          description: "Customize large language models for your domain, enabling document analysis, summarization, and knowledge extraction from unstructured text.",
          capabilities: ["Fine-tuning", "RAG", "Prompt Engineering"],
          iconBg: "bg-amber-50",
          iconColor: "text-amber-600",
          gradient: "from-amber-400 to-yellow-400"
        },
        {
          icon: <FaDatabase className="text-2xl" />,
          title: "Information Extraction",
          description: "Extract structured data from documents, contracts, and reports using NER, relation extraction, and document understanding models.",
          capabilities: ["NER", "Relation Extraction", "Document QA"],
          iconBg: "bg-orange-50",
          iconColor: "text-orange-600",
          gradient: "from-orange-400 to-red-400"
        }
      ]
    },
    {
      category: "MLOps & Infrastructure",
      items: [
        {
          icon: <FaCloud className="text-2xl" />,
          title: "Model Deployment & Scaling",
          description: "Containerize and deploy models to cloud, on-premise, or edge with auto-scaling, load balancing, and high-availability configurations.",
          capabilities: ["Docker/K8s", "REST/GRPC APIs", "Edge Deployment"],
          iconBg: "bg-sky-50",
          iconColor: "text-sky-600",
          gradient: "from-sky-400 to-blue-400"
        },
        {
          icon: <FaCogs className="text-2xl" />,
          title: "ML Pipeline Automation",
          description: "Build end-to-end pipelines for data ingestion, training, validation, and monitoring with CI/CD practices for machine learning.",
          capabilities: ["Data Versioning", "Model Registry", "Continuous Training"],
          iconBg: "bg-gray-50",
          iconColor: "text-gray-600",
          gradient: "from-gray-400 to-slate-400"
        }
      ]
    },
    {
      category: "AI Strategy & Governance",
      items: [
        {
          icon: <FaShieldAlt className="text-2xl" />,
          title: "Responsible AI Framework",
          description: "Implement bias detection, explainability, and fairness metrics to ensure your AI systems are transparent, ethical, and compliant.",
          capabilities: ["Bias Auditing", "XAI", "Compliance"],
          iconBg: "bg-red-50",
          iconColor: "text-red-600",
          gradient: "from-red-400 to-rose-400"
        },
        {
          icon: <FaMicrochip className="text-2xl" />,
          title: "AI Readiness Assessment",
          description: "Evaluate your organization's data infrastructure, team capabilities, and use cases to create a strategic AI roadmap aligned with business goals.",
          capabilities: ["Data Audit", "Use Case Prioritization", "ROI Analysis"],
          iconBg: "bg-violet-50",
          iconColor: "text-violet-600",
          gradient: "from-violet-400 to-purple-400"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 font-medium mb-6"
          >
            <span className="mr-2">✦</span>
            AI Service Offerings
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">AI Capabilities</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            End-to-end artificial intelligence services from research to production, tailored for enterprise-scale challenges
          </motion.p>
        </motion.div>

        {/* Services Grid - Grouped by Category */}
        <div className="space-y-16">
          {services.map((category, idx) => (
            <motion.div
              key={idx}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Title */}
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold text-gray-800 pb-2 border-b border-gray-200"
              >
                {category.category}
              </motion.h3>

              {/* Category Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    className="group relative"
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Main card */}
                    <div className="relative h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:border-transparent">
                      <div className="flex items-start space-x-5">
                        {/* Icon with hover glow */}
                        <div className="relative">
                          <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                          <div className={`relative flex-shrink-0 w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <div className={service.iconColor}>
                              {service.icon}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed mb-5">
                            {service.description}
                          </p>
                          
                          {/* Capability Tags */}
                          <div className="flex flex-wrap gap-2">
                            {service.capabilities.map((tag, i) => (
                              <span 
                                key={i}
                                className="px-3 py-1 text-xs font-medium bg-gray-50 text-gray-600 rounded-full border border-gray-200 group-hover:border-gray-300 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={itemVariants}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 text-center"
        >
          <p className="text-gray-700 text-lg">
            All services include architecture design, development, testing, documentation, and knowledge transfer.
          </p>
          <p className="text-gray-500 text-sm mt-3">
            Custom solutions tailored to your infrastructure and compliance requirements
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceSection2;