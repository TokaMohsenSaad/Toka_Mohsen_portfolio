"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "Toka demonstrated exceptional problem-solving skills and a deep understanding of cloud infrastructure during our DevOps program. Her dedication to learning is outstanding.",
    name: "Instructor",
    role: "NTI Cloud DevOps Program",
  },
  {
    quote:
      "A brilliant student who consistently ranked at the top of her class. Her graduation project showcased remarkable technical depth across embedded systems, web development, and AI.",
    name: "Professor",
    role: "Helwan University, Computer Engineering",
  },
  {
    quote:
      "Toka brings a unique combination of full-stack development skills and DevOps expertise. She's a fast learner who adapts quickly to new technologies and team environments.",
    name: "Team Lead",
    role: "CodSoft Internship",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Testimonials</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
            <p className="text-gray-500 mt-4 text-sm">
              Placeholder testimonials — replace with real recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300 flex flex-col"
              >
                <FaQuoteLeft className="text-[#0ea5e9]/30 text-3xl mb-4" />
                <p className="text-gray-400 text-sm leading-relaxed italic flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#06b6d4] text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
