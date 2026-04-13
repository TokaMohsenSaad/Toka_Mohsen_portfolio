"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCloud, FaServer, FaCode, FaLanguage } from "react-icons/fa";

const highlights = [
  {
    icon: FaCloud,
    title: "Cloud Architecture",
    desc: "AWS (EC2, S3, VPC, IAM, Lambda) with security best practices",
  },
  {
    icon: FaServer,
    title: "Container Orchestration",
    desc: "Kubernetes, OpenShift, Docker, Podman & Helm",
  },
  {
    icon: FaCode,
    title: "CI/CD & Automation",
    desc: "Jenkins, Terraform, Ansible & AWS CodePipeline",
  },
  {
    icon: FaLanguage,
    title: "Bilingual",
    desc: "Arabic (Native) & English (C1 Advanced, IELTS Band 8)",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 bg-dots">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 mx-auto bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                I&apos;m a recently graduated <span className="text-white font-medium">Computer Engineering</span> student
                from Helwan University with an <span className="text-[#0ea5e9]">Excellent</span> grade, ranked as the{" "}
                <span className="text-[#06b6d4]">top student</span> in my department.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                With a background in Full Stack Development (React, Java), I&apos;m currently
                specializing in <span className="text-white font-medium">Cloud Infrastructure and Automation</span>.
                I&apos;m passionate about building secure, scalable, and reliable cloud-native
                applications through modern DevOps practices.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                My expertise spans from provisioning infrastructure with Terraform, automating
                with Ansible, to orchestrating containers with Kubernetes/OpenShift and
                streamlining CI/CD pipelines with Jenkins.
              </p>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-xl p-5 hover:shadow-lg hover:shadow-[#0ea5e9]/10 transition-all duration-300 group"
                >
                  <item.icon className="text-[#0ea5e9] text-2xl mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
