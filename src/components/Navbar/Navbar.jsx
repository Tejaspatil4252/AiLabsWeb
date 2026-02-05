import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ailabs from '../../assets/logo/AiLabs.png';

import { 
  FaEye,          
  FaRocket,       
  FaStar,       
  FaBolt,        
  FaRobot,     
  FaUsers,        
  FaChevronDown   
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);
  const toggleMobileMore = () => setIsMobileMoreOpen(!isMobileMoreOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMoreOpen && !event.target.closest('.more-dropdown')) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMoreOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsMoreOpen(false);
    setIsMobileMoreOpen(false);
  }, [location.pathname]);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const logoVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const menuItemVariants = {
    initial: { x: -20, opacity: 0 },
    animate: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      x: 3,
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  const underlineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" }
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ];

const moreItems = [
  { 
    path: "/more/vision-mission", 
    label: "Vision and Mission", 
    icon: <FaEye className="text-xl" />,
    color: "text-blue-400"
  },
  { 
    path: "/more/products", 
    label: "Our Products", 
    icon: <FaRocket className="text-xl" />,
    color: "text-purple-400"
  },
  { 
    path: "/more/principles", 
    label: "Our Principles", 
    icon: <FaStar className="text-xl" />,
    color: "text-yellow-400"
  },
  { 
    path: "/more/technology", 
    label: "Our Technology", 
    icon: <FaBolt className="text-xl" />,
    color: "text-green-400"
  },
  { 
    path: "/more/ai-features", 
    label: "AI Features", 
    icon: <FaRobot className="text-xl" />,
    color: "text-pink-400"
  },
  { 
    path: "/more/key-clientele", 
    label: "Key Clientele", 
    icon: <FaUsers className="text-xl" />,
    color: "text-indigo-400"
  },
];

  return (
    <>
      {/* Main Navbar */}
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-gray-800' 
          : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Side - Logo */}
<motion.div
  variants={logoVariants}
  initial="initial"
  animate="animate"
  whileHover="hover"
  className="flex items-center -ml-12 md:-ml-28"
>
  <Link to="/" className="flex items-center">
    <motion.div 
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Large logo with aspect ratio */}
      <img 
        src={ailabs} 
        alt="Vayanta AI Labs Logo" 
         className="w-auto h-48 object-contain" // Control height, auto width
      />
    </motion.div>
  </Link>
</motion.div>

            {/* Right Side - Desktop Menu Items */}
            <div className="hidden lg:flex items-center space-x-8 -mr-14">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={menuItemVariants}
                  className="relative "
                >
                  <Link 
                    to={item.path}
                    className="relative px-5 py-2.5 text-sm font-medium group"
                  >
                    <span className={`relative z-10 ${
                      location.pathname === item.path 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300'
                    } group-hover:text-white transition-colors duration-300`}>
                      {item.label}
                    </span>
                    <motion.div 
                      variants={underlineVariants}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ originX: 0 }}
                    />
                    {location.pathname === item.path && (
                      <motion.div 
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* More Dropdown */}
{/* More Dropdown */}
<motion.div 
  initial="initial"
  animate="animate"
  whileHover="hover"
  custom={3}
  variants={menuItemVariants}
  className="relative more-dropdown"
>
  <button
    onClick={toggleMore}
    className="relative px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white group flex items-center space-x-1"
  >
    <span>More</span>
    <motion.div
      animate={{ rotate: isMoreOpen ? 180 : 0 }}
    >
      <FaChevronDown className="w-3 h-3 mt-1" />
    </motion.div>
    <motion.div 
      variants={underlineVariants}
      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
      style={{ originX: 0 }}
    />
  </button>

  <AnimatePresence>
    {isMoreOpen && (
      <motion.div
        variants={dropdownVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute left-0 mt-2 w-96 rounded-xl shadow-2xl bg-gray-900/95 backdrop-blur-xl border border-gray-800 overflow-hidden"
      >
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              key="vision-mission"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/vision-mission"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaEye className="text-xl mr-3 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-blue-300">
                    Vision and Mission
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              key="products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/products"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaRocket className="text-xl mr-3 text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-purple-300">
                    Our Products
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              key="principles"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/principles"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaStar className="text-xl mr-3 text-yellow-400 group-hover:text-yellow-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-yellow-300">
                    Our Principles
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              key="technology"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/technology"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaBolt className="text-xl mr-3 text-green-400 group-hover:text-green-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-green-300">
                    Our Technology
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              key="ai-features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/ai-features"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaRobot className="text-xl mr-3 text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-pink-300">
                    AI Features
                  </p>
                </div>
              </Link>
            </motion.div>

            <motion.div
              key="key-clientele"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5 * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Link 
                to="/more/key-clientele"
                className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaUsers className="text-xl mr-3 text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-all duration-300" />
                <div>
                  <p className="text-sm font-medium text-white group-hover:text-indigo-300">
                    Key Clientele
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

              <motion.div
                custom={4}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={menuItemVariants}
                className="relative "
              >
                <Link 
                  to="/contact"
                  className="relative px-5 py-2.5 text-sm font-medium group"
                >
                  <span className={`relative z-10 ${
                    location.pathname === "/contact" 
                      ? 'text-white font-semibold' 
                      : 'text-gray-300'
                  } group-hover:text-white transition-colors duration-300`}>
                    Contact
                  </span>
                  <motion.div 
                    variants={underlineVariants}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    style={{ originX: 0 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                custom={5}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={menuItemVariants}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-xl transition-shadow duration-300 "
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <motion.div
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { rotate: 90 },
                    closed: { rotate: 0 }
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl z-50 border-l border-gray-700/50"
            >
              <div className="h-full flex flex-col">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">V</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-white">Menu</h2>
                   
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                {/* Scrollable menu items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <div className="space-y-1 px-4">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link 
                          to={item.path}
                          className={`flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                            location.pathname === item.path
                              ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-blue-500'
                              : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full mr-3 ${
                            location.pathname === item.path 
                              ? 'bg-blue-500' 
                              : 'bg-gray-600'
                          }`} />
                          {item.label}
                          {location.pathname === item.path && (
                            <motion.div
                              layoutId="mobileActive"
                              className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Contact */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: menuItems.length * 0.05 }}
                    >
                      <Link 
                        to="/contact"
                        className={`flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                          location.pathname === "/contact"
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border-l-4 border-blue-500'
                            : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                        }`}
                      >
                        <span className={`w-2 h-2 rounded-full mr-3 ${
                          location.pathname === "/contact" 
                            ? 'bg-blue-500' 
                            : 'bg-gray-600'
                        }`} />
                        Contact
                      </Link>
                    </motion.div>

                    {/* More Section with Accordion */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (menuItems.length + 1) * 0.05 }}
                      className="mt-2"
                    >
                      <motion.button
                        onClick={toggleMobileMore}
                        className="w-full flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center">
                          <span className={`w-2 h-2 rounded-full mr-3 ${
                            isMobileMoreOpen ? 'bg-purple-500' : 'bg-gray-600'
                          }`} />
                          More Features
                        </div>
                        <motion.div
                          animate={{ rotate: isMobileMoreOpen ? 180 : 0 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </motion.button>


<AnimatePresence>
  {isMobileMoreOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="ml-8 mt-2 space-y-1 border-l border-gray-700 pl-4"
    >
      <Link 
        to="/more/vision-mission"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaEye className="text-lg mr-3 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">Vision and Mission</span>
      </Link>
      
      <Link 
        to="/more/products"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaRocket className="text-lg mr-3 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">Our Products</span>
      </Link>
      
      <Link 
        to="/more/principles"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaStar className="text-lg mr-3 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">Our Principles</span>
      </Link>
      
      <Link 
        to="/more/technology"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaBolt className="text-lg mr-3 text-green-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">Our Technology</span>
      </Link>
      
      <Link 
        to="/more/ai-features"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaRobot className="text-lg mr-3 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">AI Features</span>
      </Link>
      
      <Link 
        to="/more/key-clientele"
        className="flex items-center px-3 py-3 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-all duration-300 group"
      >
        <FaUsers className="text-lg mr-3 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
        <span className="flex-1">Key Clientele</span>
      </Link>
    </motion.div>
  )}
</AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Divider */}
                  <div className="px-4 my-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                  </div>

                  {/* User info or quick actions */}
                  <div className="px-4">
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-700/30">
                      <p className="text-sm text-gray-400 mb-2">Ready to transform your business?</p>
                     
                      <div className="flex space-x-3">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                        >
                          Get started with AI solutions
                        </motion.button>
         
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-700/50">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">© 2024 Vayanta AI Labs</p>
                    <p className="text-xs text-gray-600 mt-1">All rights reserved</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;