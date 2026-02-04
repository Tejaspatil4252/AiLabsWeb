import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaEnvelope, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaRss,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';

const TopInfoBar = () => {
  return (
    <motion.div 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-2">
          
          {/* Left Side - Contact Information */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 mb-2 md:mb-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <FaMapMarkerAlt className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-blue-400/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors">
                New York, NY 10001 • 123 Innovation Street
              </span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <FaClock className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-green-400/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors">
                Mon-Fri: 9AM-6PM • Sat: 10AM-4PM
              </span>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <FaEnvelope className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <motion.div 
                  className="absolute inset-0 rounded-full bg-purple-400/20"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                />
              </div>
              <span className="text-xs md:text-sm font-medium group-hover:text-white transition-colors">
                info@vayantaailabs.com
              </span>
            </motion.div>
          </div>

          {/* Right Side - Social Media */}
          <div className="flex items-center space-x-3">
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                <FaFacebook className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Facebook
              </div>
            </motion.a>

            <motion.a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-blue-600 transition-all duration-300">
                <FaTwitter className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Twitter
              </div>
            </motion.a>

            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                <FaLinkedin className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn
              </div>
            </motion.a>

            <motion.a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-red-800 transition-all duration-300">
                <FaYoutube className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                YouTube
              </div>
            </motion.a>

            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                <FaInstagram className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Instagram
              </div>
            </motion.a>

            <div className="h-6 w-px bg-gray-700 mx-1" />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg text-xs font-medium text-gray-300 hover:text-white border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              Subscribe
            </motion.button>
          </div>
        </div>

        {/* Divider line with gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mt-2" />
      </div>
    </motion.div>
  );
};

export default TopInfoBar;