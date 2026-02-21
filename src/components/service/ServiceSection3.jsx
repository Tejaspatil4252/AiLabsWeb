import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShip, 
  FaTruck, 
  FaWarehouse, 
  FaIndustry,
  FaTrain,
  FaHospital,
  FaUniversity,
  FaOilCan,
  FaBrain,
  FaMicrochip,
  FaRocket
} from 'react-icons/fa';

function ServiceSection3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const industries = [
    {
      icon: <FaShip className="text-2xl" />,
      title: "Maritime & Ports",
      description: "AI-powered gate automation, container tracking, vessel scheduling, and yard optimization for port operations.",
      metrics: ["30% faster turnaround", "25% cost reduction"],
      gradient: "from-blue-400 to-cyan-400",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Logistics & Supply Chain",
      description: "Intelligent routing, demand forecasting, and fleet management systems for logistics optimization.",
      metrics: ["38% idle reduction", "99.5% on-time"],
      gradient: "from-green-400 to-emerald-400",
      iconBg: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: <FaWarehouse className="text-2xl" />,
      title: "Warehousing",
      description: "AI warehouse management for inventory optimization, automation, and space utilization.",
      metrics: ["40% efficiency", "99.9% accuracy"],
      gradient: "from-purple-400 to-pink-400",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <FaIndustry className="text-2xl" />,
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and production optimization with computer vision.",
      metrics: ["99.7% detection", "45% less downtime"],
      gradient: "from-orange-400 to-red-400",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: <FaTrain className="text-2xl" />,
      title: "Rail & Intermodal",
      description: "AI solutions for rail operations, maintenance forecasting, and intermodal container tracking.",
      metrics: ["35% faster", "28% savings"],
      gradient: "from-amber-400 to-yellow-400",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600"
    },
    {
      icon: <FaHospital className="text-2xl" />,
      title: "Healthcare",
      description: "AI diagnostics, patient flow optimization, and operational efficiency for healthcare facilities.",
      metrics: ["94% accuracy", "30% less wait"],
      gradient: "from-rose-400 to-pink-400",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600"
    },
    {
      icon: <FaUniversity className="text-2xl" />,
      title: "Financial Services",
      description: "Risk modeling, fraud detection, and algorithmic trading systems for financial institutions.",
      metrics: ["99.99% detection", "15% ROI"],
      gradient: "from-emerald-400 to-teal-400",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: <FaOilCan className="text-2xl" />,
      title: "Energy & Utilities",
      description: "Grid optimization, demand forecasting, and predictive maintenance for critical infrastructure.",
      metrics: ["25% savings", "50% fewer outages"],
      gradient: "from-cyan-400 to-sky-400",
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-700 font-medium mb-6"
          >
            <FaMicrochip className="mr-2" />
            Industries We Transform
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            AI Solutions Across <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Industries</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tailored artificial intelligence for specific sector challenges and opportunities
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {industries.map((industry, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Gradient border container with industry-specific colors */}
      <div 
        className={`absolute -inset-0.5 bg-gradient-to-r ${industry.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]`}
      />
      
      {/* Main card */}
      <div className="relative h-full p-7 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300">
        {/* Icon section */}
        <div className="flex items-start justify-between mb-5">
          <div className="relative">
            {/* Icon background glow with industry colors */}
            <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            
            {/* Icon container */}
            <div className={`relative w-16 h-16 rounded-2xl ${industry.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
              <div className={`text-2xl ${industry.iconColor}`}>
                {industry.icon}
              </div>
            </div>
          </div>
          
          {/* Metric badge with industry gradient */}
          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${industry.gradient} bg-opacity-10 text-xs font-medium text-gray-600 border border-gray-200`}>
            {industry.metrics[0]}
          </div>
        </div>

        {/* Title with industry gradient on hover */}
        <h3 className={`text-xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r ${industry.gradient} group-hover:bg-clip-text transition-all duration-300`}>
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {industry.description}
        </p>

        {/* Metrics section - without the arrow circle */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {industry.metrics.slice(1).map((metric, i) => (
              <span 
                key={i}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-50 text-gray-600 font-medium group-hover:bg-gray-100 transition-colors duration-300"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        {/* Corner accents with industry colors */}
        <div className={`absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        <div className={`absolute bottom-3 left-3 w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
      </div>
    </motion.div>
  ))}
</div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Enterprise Clients", icon: <FaRocket className="text-blue-500" /> },
            { value: "8", label: "Industry Verticals", icon: <FaBrain className="text-purple-500" /> },
            { value: "98%", label: "Success Rate", icon: <FaMicrochip className="text-cyan-500" /> }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-sm"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-sm">
            Each solution is customized to meet specific industry requirements and compliance standards
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceSection3;