import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3
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
    { path: "/more/vision-mission", label: "Vision and Mission", icon: "📋" },
    { path: "/more/products", label: "Our Products", icon: "🚀" },
    { path: "/more/principles", label: "Our Principles", icon: "⭐" },
    { path: "/more/technology", label: "Our Technology", icon: "⚡" },
    { path: "/more/ai-features", label: "AI Features", icon: "🤖" },
    { path: "/more/key-clientele", label: "Key Clientele", icon: "👥" },
  ];

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-2xl py-3 border-b border-gray-800' 
          : 'bg-gradient-to-r from-gray-900 to-gray-800 py-4 shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Menu Items */}
                    <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex items-center -ml-18"
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">V</span>
                  <motion.div 
                    className="absolute inset-0 rounded-xl border-2 border-blue-400/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
              <div className="text-right">
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  Vayanta AI Labs
                </h1>
                <p className="text-xs text-gray-400 mt-0.5 mr-9">Intelligent Solutions</p>
              </div>
            </Link>
          </motion.div>


          {/* Right Side - Logo */}
          <div className="flex items-center space-x-1 -mr-20">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                custom={index}
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={menuItemVariants}
                className="relative mr-9"
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
            <motion.div 
              initial="initial"
              animate="animate"
              whileHover="hover"
              custom={3}
              variants={menuItemVariants}
              className="relative more-dropdown mr-9"
            >
              <button
                onClick={toggleMore}
                className="relative px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white group flex items-center space-x-1"
              >
                <span>More</span>
                <motion.svg
                  animate={{ rotate: isMoreOpen ? 180 : 0 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
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
                        {moreItems.map((item, index) => (
                          <motion.div
                            key={item.path}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <Link 
                              to={item.path}
                              className="flex items-center p-3 rounded-lg bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 border border-gray-800 hover:border-blue-500/30 transition-all duration-300 group"
                            >
                              <span className="text-xl mr-3 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                              </span>
                              <div>
                                <p className="text-sm font-medium text-white group-hover:text-blue-300">
                                  {item.label}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
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
              className="relative mr-9"
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
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm font-medium text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-xl transition-shadow duration-300 mr-9"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.concat({ path: "/contact", label: "Contact" }).map((item, index) => (
                <motion.div
                  key={item.path}
                  custom={index}
                  variants={mobileItemVariants}
                >
                  <Link 
                    to={item.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800/50 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile More Menu */}
              <motion.div
                custom={4}
                variants={mobileItemVariants}
              >
                <button
                  onClick={toggleMobileMore}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium hover:bg-gray-800/50"
                >
                  <span>More</span>
                  <motion.svg
                    animate={{ rotate: isMobileMoreOpen ? 180 : 0 }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {isMobileMoreOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 mt-2 space-y-2"
                    >
                      {moreItems.map((item, index) => (
                        <Link 
                          key={item.path}
                          to={item.path}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-lg transition-colors"
                        >
                          <span className="mr-3">{item.icon}</span>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                custom={5}
                variants={mobileItemVariants}
              >
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-base font-medium text-white shadow-lg"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;