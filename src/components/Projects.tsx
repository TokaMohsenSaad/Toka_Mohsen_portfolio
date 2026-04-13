"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Aquaculture Water Monitoring System",
    badge: "Graduation Project",
    description:
      "A real-time system to monitor and manage fish tanks. Tracks pH, temperature, and turbidity with automatic water treatments (pump, drain, feeder, heater). Uses AI to classify fish species appropriate for tested water conditions.",
    tech: ["Embedded Systems", "Web Development", "AI/ML", "IoT"],
    grade: "Excellent",
    github: "https://github.com/TokaMohsenSaad",
  },
  {
    title: "E-Shop Website",
    description:
      "Full-featured shopping platform with cart management, dynamic quantity/total updates, and a user-friendly UI for browsing and managing products.",
    tech: ["React.js", "JavaScript", "CSS3", "REST API"],
    github: "https://github.com/TokaMohsenSaad",
  },
  {
    title: "Admin Dashboard",
    description:
      "Product management dashboard built with Express.js. Features include search filtering, product creation forms, and tabular data display with full CRUD operations.",
    tech: ["Express.js", "Node.js", "HTML5", "CSS3"],
    github: "https://github.com/TokaMohsenSaad",
  },
  {
    title: "Recipe Search App",
    description:
      "Web application for fetching and displaying recipes from an external API. Dynamic HTML generation, keyword search, and clean responsive design.",
    tech: ["JavaScript", "REST API", "HTML5", "CSS3"],
    github: "https://github.com/TokaMohsenSaad",
  },
  {
    title: "Movie Website",
    description:
      "Movie discovery platform using TMDb API. Features hover effects for backdrop images, search functionality, and dynamic content rendering.",
    tech: ["JavaScript", "TMDb API", "HTML5", "CSS3"],
    github: "https://github.com/TokaMohsenSaad",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative py-24 bg-dots">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass rounded-2xl p-6 flex flex-col hover:shadow-xl hover:shadow-[#0ea5e9]/10 transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg group-hover:text-[#0ea5e9] transition-colors">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs rounded-full bg-[#0ea5e9]/15 text-[#38bdf8] border border-[#0ea5e9]/20">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#0ea5e9] transition-colors ml-3"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>

                {/* Grade badge */}
                {project.grade && (
                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-xs text-[#06b6d4] font-medium bg-[#06b6d4]/10 px-2 py-1 rounded">
                      Grade: {project.grade}
                    </span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
