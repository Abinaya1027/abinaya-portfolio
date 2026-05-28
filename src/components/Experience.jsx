import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  const experienceData = [
    {
      company: "Hurix Digital",
      role: "Software Developer",
      duration: "Apr 2025 - Present",
      description:
        "Leading feature development, mentoring team members, and shipping performant React applications with modern tooling and CI workflows.",
      highlights: ["Team leadership", "Performance optimization", "API architecture"],
    },
    {
      company: "Freelance Projects",
      role: "Frontend & Web Developer",
      duration: "Apr 2024 - Present",
      description:
        "Delivered bespoke websites and web apps focusing on UX, accessibility, and scalable component design for small businesses and startups.",
      highlights: ["Client-facing", "Accessible UI", "Rapid prototyping"],
    },
    {
      company: "HabileSec India Private Limited",
      role: "Software Developer",
      duration: "Mar 2024 - Mar 2025",
      description:
        "Built secure full-stack solutions using React, Laravel, and MySQL. Implemented authentication systems and data integrations.",
      highlights: ["Security best-practices", "API integration", "Testing"],
    },
    {
      company: "Vebbox Software Solutions",
      role: "Frontend Developer",
      duration: "Jul 2022 - Jan 2024",
      description:
        "Implemented responsive UI components and improved page load times across projects using modern JS and CSS techniques.",
      highlights: ["Performance improvements", "Component libraries", "Cross-browser QA"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="experience"
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-24 -top-24 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-8" />
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-8" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">Professional Experience</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">A curated timeline of roles, responsibilities, and achievements across my career.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 opacity-20 rounded-full" />

          <motion.div className="space-y-12" variants={container}>
            {experienceData.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.article
                  key={exp.company}
                  variants={item}
                  className={`relative md:w-1/2 md:px-6 ${isLeft ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
                >
                  {/* Marker */}
                  <div className={`absolute md:top-6 top-0 ${isLeft ? "md:-right-6 right-0" : "md:-left-6 left-0"}`}>
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-xl">
                      <FaBriefcase />
                    </div>
                    <div className="hidden md:block w-1 h-24 bg-gradient-to-b from-blue-500 to-cyan-500 mt-3 rounded-full opacity-40" />
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <span className="text-sm text-gray-300 flex items-center gap-2"><FaCalendarAlt /> {exp.duration}</span>
                    </div>

                    <h4 className="text-lg text-cyan-300 font-medium mb-3">{exp.company}</h4>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h, i) => (
                        <span key={i} className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/10 text-gray-200">{h}</span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
