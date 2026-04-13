"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaAws,
  FaDocker,
  FaLinux,
  FaJenkins,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiRedhatopenshift,
  SiHelm,
  SiSpringboot,
  SiExpress,
} from "react-icons/si";

const categories = [
  {
    title: "Cloud & Infrastructure",
    color: "from-[#FF9900] to-[#FF6600]",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "Red Hat Linux", icon: FaLinux },
      { name: "Networking (CCNA)", icon: FaShieldAlt },
    ],
  },
  {
    title: "Containers & Orchestration",
    color: "from-[#326CE5] to-[#0ea5e9]",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "OpenShift", icon: SiRedhatopenshift },
      { name: "Docker", icon: FaDocker },
      { name: "Helm", icon: SiHelm },
    ],
  },
  {
    title: "Automation & CI/CD",
    color: "from-[#D33833] to-[#EE0000]",
    skills: [
      { name: "Terraform", icon: SiTerraform },
      { name: "Ansible", icon: SiAnsible },
      { name: "Jenkins", icon: FaJenkins },
      { name: "Git/GitHub", icon: FaGitAlt },
    ],
  },
  {
    title: "Languages & Backend",
    color: "from-[#F89820] to-[#ED8B00]",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    title: "Frontend & APIs",
    color: "from-[#61DAFB] to-[#0ea5e9]",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
    ],
  },
  {
    title: "Security & Monitoring",
    color: "from-[#06b6d4] to-[#0ea5e9]",
    skills: [
      { name: "AWS Security", icon: FaShieldAlt },
      { name: "CloudWatch", icon: FaAws },
      { name: "CloudTrail", icon: FaAws },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * ci }}
                className="glass rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`}
                  />
                  <h3 className="text-white font-semibold text-lg">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-[#0ea5e9]/10 border border-white/5 hover:border-[#0ea5e9]/30 transition-all duration-300"
                    >
                      <skill.icon className="text-[#0ea5e9] text-base" />
                      <span className="text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
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
