import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaBootstrap,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
  const [filter, setFilter] = useState("All");

  const skills = [
    { name: "React.js", icon: <FaReact />, level: 95, category: "Frontend", color: "from-blue-400 to-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, level: 92, category: "Frontend", color: "from-yellow-400 to-orange-400" },
    { name: "HTML5", icon: <FaHtml5 />, level: 95, category: "Frontend", color: "from-red-400 to-orange-400" },
    { name: "CSS3", icon: <FaCss3Alt />, level: 94, category: "Frontend", color: "from-blue-400 to-indigo-400" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 93, category: "Frontend", color: "from-cyan-400 to-blue-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, level: 86, category: "Frontend", color: "from-purple-400 to-pink-400" },
    { name: "Laravel", icon: <FaLaravel />, level: 85, category: "Backend", color: "from-red-400 to-pink-400" },
    { name: "MySQL", icon: <SiMysql />, level: 88, category: "Backend", color: "from-orange-400 to-red-400" },
    { name: "Postman", icon: <SiPostman />, level: 84, category: "Tools", color: "from-amber-400 to-yellow-400" },
    { name: "Figma", icon: <SiFigma />, level: 80, category: "Tools", color: "from-pink-400 to-purple-400" },
    { name: "GitHub", icon: <FaGithub />, level: 90, category: "Tools", color: "from-gray-400 to-slate-400" },
  ];

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const filtered = filter === "All" ? skills : skills.filter((s) => s.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="skills"
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Subtle bg blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-10" />
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">Skills & Expertise</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Interactive skill overview with proficiency indicators and category filters.</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-3 bg-white/5 p-1 rounded-full backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${filter === cat ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" : "text-gray-300 hover:bg-white/5"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of skill cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((skill, index) => {
            const radius = 28;
            const circumference = 2 * Math.PI * radius;
            const dashOffset = circumference * (1 - skill.level / 100);

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-4"
              >
                {/* Radial Progress */}
                <div className="w-20 h-20 flex items-center justify-center relative">
                  <svg width="72" height="72" viewBox="0 0 72 72" className="transform -rotate-90">
                    <circle cx="36" cy="36" r={radius} strokeWidth="6" stroke="rgba(255,255,255,0.08)" fill="none" />
                    <motion.circle
                      cx="36"
                      cy="36"
                      r={radius}
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      stroke={`url(#grad-${index})`}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: dashOffset }}
                      transition={{ duration: 1.2, delay: index * 0.06, ease: "easeOut" }}
                      style={{ strokeDasharray: circumference }}
                    />
                    <defs>
                      <linearGradient id={`grad-${index}`} x1="0%" x2="100%">
                        <stop offset="0%" stopColor={skill.color.split(' ')[0].replace('from-','').replace('-400','') || '#06b6d4'} stopOpacity="1" />
                        <stop offset="100%" stopColor={skill.color.split(' ')[2]?.replace('to-','').replace('-400','') || '#3b82f6'} stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="absolute text-center">
                    <div className="text-sm font-semibold">{skill.level}%</div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl text-white/90">{skill.icon}</div>
                      <h4 className="text-lg font-semibold">{skill.name}</h4>
                    </div>
                    <div className="text-sm text-gray-300">{skill.category}</div>
                  </div>

                  <div className="mt-3">
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden border border-white/5">
                      <div className={`h-full rounded-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;