import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import AspireLensImg from "../assets/ProjectImages/AspireLens.png";
import CyberImg from "../assets/ProjectImages/Cybersecurity Awareness App.png";
import PearlImg from "../assets/ProjectImages/PearlTk.png";
import TatoImg from "../assets/ProjectImages/Tato.png";
import DiwaImg from "../assets/ProjectImages/Diwa Cafe.png";
import HabileImg from "../assets/ProjectImages/HabileSec Website.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "AspireLens",
      description:
        "A paid-access school event photo purchase platform. Built with React frontend, Laravel backend, MySQL and secure auth flows.",
      tech: ["React.js", "Laravel", "MySQL", "Authentication"],
      github: "https://github.com/Abinaya1027/aspirelens-showcase",
      live: "https://www.aspirelens.com/",
      image: AspireLensImg,
      category: "Application",
      note: true,
    },
    {
      title: "Cybersecurity Awareness App",
      description:
        "Paid-access training platform with interactive modules and assessments. Implemented React UI and Laravel APIs.",
      tech: ["React.js", "Laravel", "REST API", "MySQL"],
      github: "https://github.com/Abinaya1027/cybersecurity-awareness-showcase",
      live: "https://tanikkai.com/",
      image: CyberImg,
      category: "Application",
      note: true,
    },
    {
      title: "Pearl TK – Business Website",
      description:
        "Developed a responsive freelance business website using HTML5, CSS3, EmailJS, and AWS hosting.",
      tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
      github: "https://github.com/Abinaya1027/pearltk-website-showcase",
      live: "https://pearltk.com/",
      image: PearlImg,
      category: "Website",
    },
    {
      title: "Tato – Restaurant Website",
      description:
        "Designed and developed a responsive restaurant website using HTML5, CSS3, EmailJS, and AWS hosting.",
      tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
      github: "https://github.com/Abinaya1027/tato-restaurant-showcase",
      live: "#",
      image: TatoImg,
      category: "Website",
    },
    {
      title: "Diwa Cafe – Business Website",
      description:
        "Freelance business site with responsive design, EmailJS integration and AWS hosting.",
      tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
      github: "https://github.com/Abinaya1027/diwa-cafe-showcase",
      live: "https://diwacafe.com/",
      image: DiwaImg,
      category: "Website",
    },
    {
      title: "HabileSec Website",
      description:
        "Responsive cybersecurity business website built with React and Tailwind CSS.",
      tech: ["React.js", "Tailwind CSS"],
      github: "https://github.com/Abinaya1027/habilesec-showcase",
      live: "https://www.habilesec.com/",
      image: HabileImg,
      category: "Website",
    },
  ];

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-300 mt-2">
              Selected projects demonstrating frontend, backend and full-stack work.
            </p>
          </div>

          <div className="inline-flex rounded-full bg-white/5 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-2 text-sm rounded-full ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={filter}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h4 className="text-white font-semibold">
                      {project.title}
                    </h4>
                    <span className="text-xs text-gray-300 px-2 py-1 rounded-full bg-white/5">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-gray-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="hover:text-white"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative z-10 max-w-3xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-3xl z-20"
              >
                ×
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                {selectedProject.note && (
                  <p className="text-sm text-gray-300 mb-3">
                    Note: Full application access is available only for paid/login users.
                  </p>
                )}

                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {selectedProject.description}
                </p>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md"
                  >
                    GitHub
                  </a>

                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 border border-white/20 rounded-md"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
