"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap, FaSchool, FaTrophy, FaStar } from "react-icons/fa";

const education = [
  {
    institution: "Helwan University",
    degree: "Bachelor of Computer Engineering",
    period: "September 2019 - August 2024",
    icon: FaGraduationCap,
    highlights: [
      "Grade: Excellent",
      "Top third accumulative for five years",
      "Ranked top student in Computer Engineering department (June 2023)",
    ],
  },
  {
    institution: "Heliopolis International School",
    degree: "American Diploma",
    period: "2016 - 2019",
    icon: FaSchool,
    highlights: ["Cairo, Egypt"],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0ea5e9] via-[#06b6d4] to-transparent" />

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * i }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-5 top-6 w-7 h-7 rounded-full bg-[#0a0f1c] border-2 border-[#0ea5e9] flex items-center justify-center">
                    <edu.icon className="text-[#0ea5e9] text-xs" />
                  </div>

                  <div className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-white font-bold text-lg">
                        {edu.institution}
                      </h3>
                      <span className="text-[#0ea5e9] text-sm font-mono">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-400 font-medium mb-3">
                      {edu.degree}
                    </p>
                    <ul className="space-y-2">
                      {edu.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-gray-400 text-sm">
                          <FaStar className="text-[#06b6d4] text-xs mt-1.5 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
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
