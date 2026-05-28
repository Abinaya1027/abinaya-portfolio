import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const skills = [
    { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-500 to-orange-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-blue-500" },
    { name: "Laravel", level: 85, color: "from-red-500 to-pink-500" },
    { name: "MySQL", level: 88, color: "from-orange-500 to-red-500" },
    { name: "REST APIs", level: 89, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <motion.section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"
          style={{ top: "20%", right: "10%" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
          style={{ bottom: "20%", left: "10%" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
              About Me
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Passionate developer crafting elegant solutions with modern technologies
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image with Animation */}
          <motion.div
            className="relative"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Image container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-1 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=600&fit=crop"
                  alt="developer"
                  className="w-full rounded-xl shadow-2xl"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-1 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="bg-slate-900 rounded-full px-6 py-3">
                  <p className="text-sm font-semibold">4+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
            >
              Software Developer & React Specialist
            </motion.h3>

            {/* Description paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Full-stack developer with <span className="text-cyan-400 font-semibold">4+ years</span> of hands-on experience in crafting modern web applications. Specialized in React.js, JavaScript, and full-stack development with a passion for clean code and user-centric design.
                </p>
              </div>

              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition duration-300">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Expert in building <span className="text-blue-400 font-semibold">scalable applications</span> with modern UI/UX, REST APIs, authentication systems, and responsive design. Passionate about solving complex problems and delivering exceptional digital experiences.
                </p>
              </div>
            </motion.div>

            {/* Highlight Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              <div className="backdrop-blur-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-3xl font-bold text-blue-400">20+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="backdrop-blur-md bg-gradient-to-br from-cyan-500/10 to-sky-500/10 border border-cyan-500/20 rounded-lg p-4">
                <p className="text-3xl font-bold text-cyan-400">100%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-3">
                {["React.js", "JavaScript", "Tailwind CSS", "Laravel", "MySQL", "REST APIs","HTML5","CSS3","GitLab","PHP","Bootstrap"].map(
                  (skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-cyan-300 hover:border-blue-500/50 transition duration-300 cursor-default"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section with Progress Bars */}
        <motion.div
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
          >
            Technical Proficiency
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg text-white">{skill.name}</span>
                  <span className={`bg-gradient-to-r ${skill.color} text-transparent bg-clip-text font-bold`}>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden border border-white/5">
                  {/* Animated progress fill */}
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.2,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
          >
            Professional Journey
          </motion.h3>

          <div className="space-y-6">
            {[
              {
                year: "2025 - Present",
                title: "Software Developer",
                company: "Hurix Digital",
                desc: "Working on responsive web applications, frontend development, UI optimization, API integration, and team collaboration using React.js and modern web technologies.",
              },

              {
                year: "2024 - 2025",
                title: "Software Developer",
                company: "HabileSec India Private Limited",
                desc: "Developed secure and responsive web applications using React.js, Laravel, Bootstrap, MySQL, and authentication systems with API integration.",
              },

              {
                year: "2024 - Present",
                title: "Freelance Frontend & Web Developer",
                company: "Self Employed",
                desc: "Built responsive business websites, UI-focused applications, and AWS-hosted web solutions using HTML, CSS, JavaScript, React.js, and EmailJS.",
              },

              {
                year: "2022 - 2024",
                title: "Frontend Developer",
                company: "Vebbox Software Solutions",
                desc: "Developed responsive UI components and optimized frontend performance using React.js, JavaScript, HTML, CSS, and Bootstrap.",
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition duration-300 pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-6 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-800" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-cyan-300">{experience.title}</h4>
                  <span className="text-sm text-blue-400 font-semibold">{experience.year}</span>
                </div>

                <p className="text-gray-400 mb-2">{experience.company}</p>
                <p className="text-gray-300">{experience.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
