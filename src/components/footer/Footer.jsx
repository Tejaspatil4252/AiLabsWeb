import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaArrowRight,
  FaHeart,
  FaRocket
} from 'react-icons/fa';
import footerBg from '../../assets/bgImages/footerIMG.jpg';
import ailabsLOGO from '../../assets/logo/AiLabsFooter.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundPosition: 'center',
            filter: 'brightness(0.8)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-950" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(90deg, #4299e1 1px, transparent 1px),
                           linear-gradient(0deg, #4299e1 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
 <div className="space-y-4">
  {/* Logo Image - Already contains the name */}
  <div className="flex items-center">
    <img 
      src={ailabsLOGO} 
      alt="Vyantra AI Labs" 
      className="h-16 w-auto object-contain"
    />
  </div>
  
  <p className="text-gray-300 text-sm leading-relaxed">
    Pioneering the future of artificial intelligence through cutting-edge research and innovative solutions that transform industries.
  </p>
  
  {/* Social Links */}
  <div className="flex space-x-4">
    {[
      { icon: <FaTwitter />, href: "#", color: "hover:text-blue-400" },
      { icon: <FaLinkedin />, href: "#", color: "hover:text-blue-600" },
      { icon: <FaGithub />, href: "#", color: "hover:text-gray-300" },
      { icon: <FaEnvelope />, href: "#", color: "hover:text-purple-400" }
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        whileHover={{ y: -3 }}
        className={`w-10 h-10 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-blue-500/30`}
      >
        {social.icon}
      </motion.a>
    ))}
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Products", href: "/more/products" },
                { name: "Contact", href: "/contact" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Our Solutions</h3>
            <ul className="space-y-4">
              {[
                { name: "Smart Gate Systems", href: "/products" },
                { name: "Yard Management", href: "/products" },
                { name: "Computer Vision", href: "/services" },
                { name: "Predictive Analytics", href: "/services" },
                { name: "AI Integration", href: "/services" }
              ].map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  123 AI Innovation Drive<br />
                  Silicon Valley, CA 94043
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">hello@vyantra.ai</span>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-medium mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-l-lg text-gray-300 text-sm focus:outline-none focus:border-blue-500/50"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-shadow"
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm flex items-center">
              © {currentYear} Vyantra AI Labs. All rights reserved.
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <FaHeart className="text-red-400 mx-1 text-xs" /> for AI innovation
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" }
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-500 hover:text-gray-300 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Rocket animation */}
            <motion.div
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-blue-400"
            >
              <FaRocket />
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;