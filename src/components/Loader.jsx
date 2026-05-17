import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ message = "Loading Portfolio..." }) => {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useMemo(() => typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let mounted = true;
    let pct = 0;
    const tick = () => {
      pct += Math.random() * 6 + 2; // variable step
      if (pct >= 95) pct = 95; // simulate near completion
      if (mounted) setProgress(Math.round(pct));
    };

    const interval = setInterval(tick, 300);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center z-[9999]">
      <motion.div
        className="w-full max-w-md mx-4 bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-md shadow-2xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45 }}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-center justify-center mb-6">
          <motion.div
            className="relative flex items-center justify-center w-24 h-24 rounded-full"
            animate={!prefersReducedMotion ? { rotate: 360 } : {}}
            transition={!prefersReducedMotion ? { duration: 6, repeat: Infinity, ease: "linear" } : { duration: 0 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 blur-2xl" />

            <svg width="72" height="72" viewBox="0 0 72 72" className="relative z-10">
              <defs>
                <linearGradient id="g1" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle cx="36" cy="36" r="28" stroke="rgba(255,255,255,0.06)" strokeWidth="6" fill="none" />
              <motion.circle
                cx="36"
                cy="36"
                r="28"
                stroke="url(#g1)"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: prefersReducedMotion ? 0.6 : 1 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
              />
            </svg>
          </motion.div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 mb-2">K.K. Abinaya</h1>
        <p className="text-sm text-gray-300 tracking-wide mb-6">{message}</p>

        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.4 }}
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
          <span>Preparing assets</span>
          <span>{progress}%</span>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          <motion.span className="w-2 h-2 rounded-full bg-blue-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1 }} />
          <motion.span className="w-2 h-2 rounded-full bg-cyan-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.15 }} />
          <motion.span className="w-2 h-2 rounded-full bg-indigo-400" animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.3 }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;