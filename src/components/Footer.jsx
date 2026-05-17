import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-12 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
            K.K. Abinaya
          </h3>
          <p className="text-gray-300 mt-2">
            Software Developer focused on React.js, frontend development, and modern web applications.
          </p>
          <a
            href="mailto:kkabinayawork@gmail.com"
            className="text-gray-300 hover:text-white block mt-4"
          >
            kkabinayawork@gmail.com
          </a>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#skills" className="hover:text-white">Skills</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">Connect</h4>
          <p className="text-gray-300 text-sm mb-4">
            Open to Gulf, International, and Remote developer opportunities.
          </p>

          <div className="flex gap-4 text-gray-300 text-2xl">
            <a
              href="https://www.linkedin.com/in/kkabinaya/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Abinaya1027"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © 2026 K.K. Abinaya. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;