"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCertificate, FaCloud, FaCode, FaUniversity } from "react-icons/fa";
import { SiRedhat } from "react-icons/si";

const certifications = [
  {
    title: "Cloud DevOps Accelerator (Hire Ready)",
    institution: "National Telecommunication Institute",
    period: "January 2025 - May 2025",
    icon: FaCloud,
    topics:
      "Red Hat Linux (RHCSA), AWS Cloud Architecture, OpenShift/Kubernetes, Ansible, Terraform, Jenkins CI/CD",
  },
  {
    title: "Web Development Internship",
    institution: "CodSoft Company",
    period: "December 2024 - January 2025",
    icon: FaCode,
    topics:
      "Scalable UIs with React.js, industry-standard workflows, collaborative team environment",
  },
  {
    title: "Full Stack Development Track (DEPI)",
    institution: "Digital Egypt Pioneers Initiative",
    period: "June 2024 - December 2024",
    icon: FaUniversity,
    topics:
      "HTML, CSS, JavaScript, React.js, APIs, State Management, Node.js, Express.js, SQL",
  },
  {
    title: "Java Spring Advanced Course",
    institution: "Egyptian Banking Institute",
    period: "July 2024 - August 2024",
    icon: FaUniversity,
    topics:
      "Java OOP, Collections, Concurrency, Spring DI/IoC, Bean lifecycle",
  },
  {
    title: "Web Development Bootcamp",
    institution: "Udemy (Colt Steele)",
    period: "June 2025",
    icon: FaCode,
    topics:
      "HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, MERN stack, RESTful APIs",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative py-24 bg-dots">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Courses & <span className="gradient-text">Certifications</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9] via-[#06b6d4] to-transparent" />

            <div className="space-y-6">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-[#0a0f1c] border-2 border-[#06b6d4] flex items-center justify-center">
                    <cert.icon className="text-[#06b6d4] text-xs" />
                  </div>

                  <div className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <h3 className="text-white font-bold">{cert.title}</h3>
                      <span className="text-[#0ea5e9] text-sm font-mono shrink-0 mt-1 sm:mt-0 sm:ml-4">
                        {cert.period}
                      </span>
                    </div>
                    <p className="text-[#06b6d4] text-sm font-medium mb-3">
                      {cert.institution}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {cert.topics}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
