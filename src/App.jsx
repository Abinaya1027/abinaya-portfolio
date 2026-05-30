import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";
import ScrollTop from "./components/ScrollTop";
import CursorGlow from "./components/CursorGlow";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Restore dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    setMounted(true);
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode, mounted]);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`${darkMode ? "dark" : ""}`}
    >
      {/* Premium background gradient */}
      <div
        className={`fixed inset-0 z-0 transition-all duration-500 ${
          darkMode
            ? "bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-black"
            : "bg-gradient-to-br from-white via-gray-50 to-blue-50"
        }`}
      />

      {/* Animated background elements for dark mode */}
      {darkMode && (
        <>
          {/* Top-left glow */}
          <motion.div
            className="fixed top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5 pointer-events-none z-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Bottom-right glow */}
          <motion.div
            className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-5 pointer-events-none z-0"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.08, 0.05, 0.08],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Light mode background accents */}
      {!darkMode && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-10 pointer-events-none z-0"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full blur-3xl opacity-10 pointer-events-none z-0"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.15, 0.1, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      {/* Premium interactive cursor */}
      <CursorGlow />

      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Scroll to top button */}
      <ScrollTop />

      {/* Content container with relative positioning */}
      <div className="relative z-10">
        {/* Loading and Content transition */}
        <AnimatePresence mode="wait">
          {loading ? (
            // Loading state
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.6, ease: "easeInOut" },
              }}
            >
              <Loader />
            </motion.div>
          ) : (
            // Main content
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
              }}
            >
              <Home darkMode={darkMode} setDarkMode={setDarkMode} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Premium overlay effects for theme transitions */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay"
        animate={{
          opacity: [0, 0.01, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
