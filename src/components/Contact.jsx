import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      setFormError("Email is required");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Please enter a valid email");
      return false;
    }

    if (!formData.subject.trim()) {
      setFormError("Subject is required");
      return false;
    }

    if (!formData.message.trim()) {
      setFormError("Message is required");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        "service_3za3v3f",
        "template_wvwwuho",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "5JLVUdlLO_bfWySkr"
      );

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setFormError("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"
          style={{ top: "10%", left: "10%" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"
          style={{ bottom: "10%", right: "10%" }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 text-transparent bg-clip-text">
              Let's Connect
            </span>
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {formError && (
                  <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                    <FaExclamationCircle className="text-xl" />
                    <span>{formError}</span>
                  </div>
                )}

                {status === "success" && (
                  <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                    <FaCheckCircle className="text-xl" />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.97 }}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition duration-300"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.a
                href="mailto:kkabinayawork@gmail.com?subject=Portfolio%20Contact"
                whileHover={{ scale: 1.05, y: -5 }}
                className="group block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-blue-500/10 hover:border-blue-500/30 transition duration-300"
              >
                <MdEmail className="text-4xl text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Email
                </h3>
                <p className="text-sm text-gray-400 break-all group-hover:text-gray-300 transition">
                  kkabinayawork@gmail.com
                </p>
              </motion.a>

              <motion.a
                href="https://wa.me/917339184208"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                className="group block backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-green-500/10 hover:border-green-500/30 transition duration-300"
              >
                <FaWhatsapp className="text-4xl text-green-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  WhatsApp
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                  +91 7339184208
                </p>
              </motion.a>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Me
                </h3>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/kkabinaya/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition duration-300"
                  >
                    <FaLinkedin className="text-xl" />
                  </motion.a>

                  <motion.a
                    href="https://github.com/Abinaya1027"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:bg-white/20 hover:border-white/50 transition duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;