import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisible = () => {
      const scrollY = window.scrollY;
      
      // Calculate scroll progress (0-100)
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = windowHeight > 0 ? (scrollY / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      // Show button after scrolling 300px
      setVisible(scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Button animation variants
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  // Icon animation variants
  const iconVariants = {
    initial: { y: 0 },
    hover: {
      y: -6,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-8 right-8 z-[9999]"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-75"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />

          {/* Scroll progress ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
            {/* Background circle */}
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-700 dark:text-gray-300 opacity-20"
            />
            {/* Progress circle */}
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Main button */}
          <motion.button
            onClick={scrollToTop}
            className="group relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
            whileHover="hover"
            initial="initial"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity" />

            {/* Shine effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />

            {/* Backdrop blur layer */}
            <div className="absolute inset-0 backdrop-blur-sm opacity-10 rounded-full" />

            {/* Border highlight */}
            <div className="absolute inset-0 rounded-full border border-white/30 shadow-lg shadow-blue-500/50" />

            {/* Content */}
            <motion.div
              className="relative flex items-center justify-center text-white"
              variants={iconVariants}
            >
              <FaArrowUp size={20} />
            </motion.div>

            {/* Ripple effect on click */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0 }}
              whileTap={{ scale: 2 }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          {/* Floating tooltip */}
          <motion.div
            className="absolute -left-32 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold rounded-lg shadow-lg opacity-0 pointer-events-none"
            whileHover={{ opacity: 1, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            Back to top
            {/* Arrow pointer */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rotate-45" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollTop;