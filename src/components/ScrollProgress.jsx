import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SECTIONS = ["home", "about", "skills", "experience", "projects", "contact"];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, (v) => Math.round(v * 100));
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const unsub = progress.onChange((v) => setPercent(v));
    return () => unsub();
  }, [progress]);

  const [active, setActive] = useState("home");
  const [nextSection, setNextSection] = useState(null);

  // compute active section by position
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      const winH = window.innerHeight;
      let found = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (y >= top - winH / 2 && y < top + height - winH / 2) {
          found = id;
          break;
        }
      }
      setActive(found);

      const idx = SECTIONS.indexOf(found);
      setNextSection(idx === -1 || idx === SECTIONS.length - 1 ? null : SECTIONS[idx + 1]);
    };

    handle();
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  const goToNext = () => {
    if (!nextSection) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(nextSection);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // radial metrics
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = useTransform(scrollYProgress, (v) => circumference * (1 - v));

  return (
    <>
      {/* Top thin progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Left vertical progress with markers (desktop) */}
      <div className="hidden md:flex fixed left-6 top-1/4 z-40 flex-col items-center gap-6">
        {SECTIONS.map((id) => (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${active === id ? "bg-cyan-400 shadow-lg scale-125" : "bg-white/20 hover:bg-white/40"}`}
            aria-label={`Go to ${id}`}
            title={id}
          />
        ))}
      </div>

      {/* Circular progress + next button (bottom-right) */}
      {/* <div className="fixed right-6 bottom-6 z-50">
        <motion.button
          onClick={goToNext}
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-200"
          whileHover={{ scale: 1.08 }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48">
            <defs>
              <linearGradient id="pg" x1="0%" x2="100%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth="4" fill="none" />
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              stroke="url(#pg)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              style={{ strokeDasharray: circumference, strokeDashoffset: dashOffset }}
            />
          </svg>
        </motion.button>
        <div className="mt-2 text-right text-xs text-gray-300 w-full text-end">{percent}%</div>
      </div> */}
    </>
  );
};

export default ScrollProgress;