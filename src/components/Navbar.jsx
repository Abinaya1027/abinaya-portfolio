import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position for navbar styling
      setScrolled(window.scrollY > 50);

      // Update active section
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 150;
          const height = element.offsetHeight;

          if (window.scrollY >= top && window.scrollY < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-slate-900/80 to-black/80 backdrop-blur-lg shadow-2xl shadow-blue-500/10"
          : "bg-gradient-to-r from-slate-900/40 to-black/40 backdrop-blur-md"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" className="relative group">
              <div className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
                Abinaya
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.a
                  href={`#${link.id}`}
                  className="relative px-4 py-2 text-gray-300 font-medium text-sm lg:text-base group"
                  whileHover={{ color: "#06b6d4" }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Link text */}
                  <span className="relative z-10">{link.label}</span>

                  {/* Active indicator */}
                  {activeSection === link.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 40 }}
                    />
                  )}

                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Desktop Theme Toggle */}
          {/* <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white hover:border-blue-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              initial={false}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-400" />
              )}
            </motion.div>
          </motion.button> */}

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white hover:border-blue-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="md:hidden pb-6"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="bg-gradient-to-b from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-lg p-4 backdrop-blur-md">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={handleNavClick}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                          activeSection === link.id
                            ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 border border-cyan-500/30"
                            : "text-gray-300 hover:bg-blue-500/10 hover:text-cyan-300"
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Theme Toggle */}
                {/* <motion.button
                  onClick={() => {
                    setDarkMode(!darkMode);
                    setMenuOpen(false);
                  }}
                  className="w-full mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-white font-medium hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {darkMode ? (
                    <>
                      <FaSun className="text-yellow-400" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <FaMoon className="text-blue-400" />
                      Dark Mode
                    </>
                  )}
                </motion.button> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;

