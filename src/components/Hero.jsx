import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
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

    return (
        <motion.section
            id="home"
            className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden flex items-center justify-center pt-36 pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20"
                    style={{ top: "-50px", left: "-50px" }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />

                <motion.div
                    className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-15"
                    style={{ bottom: "-100px", right: "-50px" }}
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div>
                    <motion.div
                        variants={itemVariants}
                        className="flex lg:justify-start justify-center mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Welcome to my portfolio
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:text-left text-center mb-8">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4">
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
                                K.K. Abinaya
                            </span>
                        </h1>

                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 lg:mx-0 mx-auto rounded-full" />
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:text-left text-center mb-10">
                        <div className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                            <TypeAnimation
                                sequence={[
                                    "Software Developer",
                                    2000,
                                    "React.js Developer",
                                    2000,
                                    "Frontend Developer",
                                    2000,
                                    "Web Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="lg:text-left text-center text-lg text-gray-300 leading-relaxed mb-12"
                    >
                        Building responsive and scalable web applications using React.js,
                        JavaScript, Laravel, Tailwind CSS, and modern frontend technologies.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center"
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/50 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects →
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="px-8 py-4 rounded-xl border border-cyan-500 text-white font-semibold hover:bg-cyan-500/10 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me ✨
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className="flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

                        <img
                            src={profile}
                            alt="K.K. Abinaya"
                            className="relative w-[300px] h-[390px] sm:w-[340px] sm:h-[440px] object-cover rounded-[32px] border-4 border-cyan-500/30 shadow-2xl"
                        />

                        <div className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl px-6 py-3 shadow-lg">
                            <p className="text-sm font-semibold">4+ Years Experience</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Hero;