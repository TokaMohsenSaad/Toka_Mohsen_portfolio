"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full glass text-sm text-[#0ea5e9]"
          >
            Welcome to my portfolio
          </motion.div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="gradient-text glow-text">Toka Mohsen</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#0ea5e9]" />
            <p className="text-xl sm:text-2xl text-gray-400 font-light">
              Cloud DevOps Engineer
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#06b6d4]" />
          </div>

          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            Building secure, scalable, and reliable cloud-native infrastructure.
            Specializing in{" "}
            <span className="text-[#0ea5e9]">AWS</span>,{" "}
            <span className="text-[#06b6d4]">Kubernetes</span>, and{" "}
            <span className="text-[#38bdf8]">CI/CD automation</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] text-white font-semibold hover:shadow-xl hover:shadow-[#0ea5e9]/25 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-lg border border-[#0ea5e9]/30 text-[#0ea5e9] font-semibold hover:bg-[#0ea5e9]/10 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/toka-mohsen-84613a24b/", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com/TokaMohsenSaad", label: "GitHub" },
              { icon: FaEnvelope, href: "mailto:tokasaad2012@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-gray-400 hover:text-[#0ea5e9] hover:shadow-lg hover:shadow-[#0ea5e9]/20 transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 hover:text-[#0ea5e9] transition-colors"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
