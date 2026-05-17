import { useEffect, useRef, useState } from "react";

const isTouchDevice = () => {
  return ("ontouchstart" in window) || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
};

const lerp = (a, b, n) => (1 - n) * a + n * b;

const CursorGlow = () => {
  const enabledRef = useRef(true);
  const posRef = useRef({ x: -100, y: -100 });
  const renderRef = useRef(0);
  const rafRef = useRef(null);
  const trailCount = 6;
  const trailRefs = useRef(Array.from({ length: trailCount }, () => ({ x: -100, y: -100 })));
  const [tick, setTick] = useState(0); // minimal state to trigger re-render
  const [isHoverInteractive, setIsHoverInteractive] = useState(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (isTouchDevice()) {
      enabledRef.current = false;
      return;
    }

    prefersReducedMotion.current = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const onDown = (e) => {
      // create a ripple by pushing a small temporary trail
      const ripple = { x: e.clientX, y: e.clientY, born: performance.now() };
      // store as last trail element briefly (visual effect)
      trailRefs.current[trailCount - 1] = { x: ripple.x, y: ripple.y };
      setTick((t) => t + 1);
      setTimeout(() => {
        // let it fade naturally
      }, 600);
    };

    const onEnterInteractive = () => setIsHoverInteractive(true);
    const onLeaveInteractive = () => setIsHoverInteractive(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);

    // listen for hover on interactive elements to enlarge glow
    const interactiveSelector = "a, button, input, textarea, .interactive";
    const addHoverListeners = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    addHoverListeners();

    // Observe DOM changes to attach to dynamically added interactive elements
    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    const animate = () => {
      // stop animation if user prefers reduced motion
      if (prefersReducedMotion.current) return;

      const target = posRef.current;

      // head trail follows mouse quickly
      trailRefs.current[0].x = lerp(trailRefs.current[0].x, target.x, 0.25);
      trailRefs.current[0].y = lerp(trailRefs.current[0].y, target.y, 0.25);

      // rest of trail follows previous with slightly slower lerp
      for (let i = 1; i < trailCount; i++) {
        trailRefs.current[i].x = lerp(trailRefs.current[i].x, trailRefs.current[i - 1].x, 0.18 - i * 0.01);
        trailRefs.current[i].y = lerp(trailRefs.current[i].y, trailRefs.current[i - 1].y, 0.18 - i * 0.01);
      }

      // trigger a render occasionally (not every frame) to keep CPU lower
      renderRef.current = (renderRef.current + 1) % 2;
      if (renderRef.current === 0) setTick((t) => t + 1);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!enabledRef.current) return null;

  // Render multiple glow layers and trailing dots
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Main soft glow */}
      <div
        className={`absolute rounded-full blur-3xl transition-all duration-300 ${isHoverInteractive ? "w-[340px] h-[340px] opacity-40" : "w-[220px] h-[220px] opacity-25"}`}
        style={{
          left: `${trailRefs.current[0].x - (isHoverInteractive ? 170 : 110)}px`,
          top: `${trailRefs.current[0].y - (isHoverInteractive ? 170 : 110)}px`,
          background: "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.35), rgba(14,165,233,0.12) 40%, rgba(59,130,246,0.02) 70%)",
        }}
      />

      {/* Inner core */}
      <div
        className={`absolute rounded-full transition-all duration-300 ${isHoverInteractive ? "w-6 h-6" : "w-4 h-4"}`}
        style={{
          left: `${trailRefs.current[0].x - (isHoverInteractive ? 3 : 2)}px`,
          top: `${trailRefs.current[0].y - (isHoverInteractive ? 3 : 2)}px`,
          background: "linear-gradient(90deg, #22d3ee, #3b82f6)",
          boxShadow: "0 6px 22px rgba(59,130,246,0.6)",
        }}
      />

      {/* Trail dots */}
      {trailRefs.current.slice(1).map((p, i) => {
        const size = Math.max(2, 10 - i * 1.2);
        const opacity = Math.max(0.06, 0.25 - i * 0.04);
        return (
          <div
            key={i}
            className="absolute rounded-full transition-all duration-200"
            style={{
              left: `${p.x - size / 2}px`,
              top: `${p.y - size / 2}px`,
              width: `${size}px`,
              height: `${size}px`,
              background: `rgba(14,165,233,${opacity})`,
              filter: "blur(6px)",
            }}
          />
        );
      })}
    </div>
  );
};

export default CursorGlow;