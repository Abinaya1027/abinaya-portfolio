import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
            image: "../assets/ProjectImages/AspireLens.png",
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
            image: "../assets/ProjectImages/Cybersecurity Awareness App.png",
            category: "Application",
            note: true,
        },
        {
            title: "Pearl TK – Business Website",
            description:
                "Developed a responsive freelance business website using HTML5, CSS3, EmailJS, and AWS hosting. Worked on UI design, responsive layouts, contact form integration, content updates, and website maintenance.",
            tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
            github: "https://github.com/Abinaya1027/pearltk-website-showcase",
            live: "https://pearltk.com/",
            image: "../assets/ProjectImages/PearlTk.png",
            category: "Website",
        },

        {
            title: "Tato – Restaurant Website",
            description:
                "Designed and developed a responsive restaurant website as a freelance project using HTML5, CSS3, EmailJS, and AWS hosting. Focused on modern UI design, responsive layouts, contact form integration, and optimized user experience.",
            tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
            github: "https://github.com/Abinaya1027/tato-restaurant-showcase",
            live: "YOUR_TATO_LINK",
            image: "../assets/ProjectImages/Tato.png",
            category: "Website",
        },

        {
            title: "Diwa Cafe – Business Website",
            description:
                "Freelance business site with responsive design, EmailJS integration and AWS hosting. Focus on performance and content UX.",
            tech: ["HTML5", "CSS3", "EmailJS", "AWS"],
            github: "https://github.com/Abinaya1027/diwa-cafe-showcase",
            live: "https://diwacafe.com/",
            image: "../assets/ProjectImages/Diwa Cafe.png",
            category: "Website",
        },


        {
            title: "HabileSec Website",
            description:
                "Responsive cybersecurity business website built with React and Tailwind CSS, including SEO optimization and contact flows.",
            tech: ["React.js", "Tailwind CSS"],
            github: "https://github.com/Abinaya1027/habilesec-showcase",
            live: "https://www.habilesec.com/",
            image: "../assets/ProjectImages/HabileSec Website.png",
            category: "Website",
        },


    ];

    const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);

    const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setSelectedProject(null);
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    };

    const item = {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <motion.section
            id="projects"
            className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={container}
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-24 -top-24 w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-8" />
                <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-8" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">Featured Projects</span>
                        </h2>
                        <p className="text-gray-300 mt-2">Selected projects demonstrating frontend, backend and full-stack work.</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="inline-flex rounded-full bg-white/5 p-1 shadow-inner">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${filter === cat ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg" : "text-gray-300 hover:bg-white/5"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    key={filter}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {filtered.map((project, i) => (
                        <motion.article
                            key={project.title}
                            variants={item}
                            className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-400"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative">
                                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <div className="p-4 w-full">
                                        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                        <p className="text-sm text-gray-300 mt-1 line-clamp-2">{project.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-white font-semibold">{project.title}</h4>
                                        <span className="text-xs text-gray-300 px-2 py-1 rounded-full bg-white/5">{project.category}</span>
                                    </div>

                                    <div className="flex items-center gap-3 text-gray-300">
                                        <a href={project.github} onClick={(e) => e.stopPropagation()} className="hover:text-white">
                                            <FaGithub />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="hover:text-white">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, idx) => (
                                        <span key={idx} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-200">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />

                        <motion.div
                            className="relative z-10 max-w-3xl w-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-white text-3xl z-20">×</button>

                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover" />

                            <div className="p-6">
                                {selectedProject.note && (
                                    <p className="text-sm text-gray-300 mb-3">Note: Full application access is available only for paid/login users.</p>
                                )}
                                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                <p className="text-gray-300 mb-4">{selectedProject.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedProject.tech.map((t, k) => (
                                        <span key={k} className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-200">{t}</span>
                                    ))}
                                </div>

                                <div className="flex gap-3 flex-wrap">
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-md text-white">GitHub</a>
                                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="px-4 py-2 border border-white/20 rounded-md text-white">View Website</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default Projects;
