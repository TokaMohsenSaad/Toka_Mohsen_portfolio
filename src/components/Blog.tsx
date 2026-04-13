"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaPen, FaCloud, FaDocker, FaCogs } from "react-icons/fa";

const upcomingTopics = [
  { icon: FaCloud, label: "Cloud Architecture" },
  { icon: FaDocker, label: "Containers & K8s" },
  { icon: FaCogs, label: "CI/CD Automation" },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-24 bg-dots">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Articles</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-10 sm:p-14 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0ea5e9]/10 flex items-center justify-center">
              <FaPen className="text-[#0ea5e9] text-2xl" />
            </div>

            <h3 className="text-white text-2xl font-bold mb-3">
              Coming Soon
            </h3>
            <p className="text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
              I&apos;m currently working on technical articles about my experiences
              in cloud infrastructure and DevOps. Stay tuned!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {upcomingTopics.map((topic) => (
                <div
                  key={topic.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm"
                >
                  <topic.icon className="text-[#0ea5e9] text-sm" />
                  {topic.label}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
