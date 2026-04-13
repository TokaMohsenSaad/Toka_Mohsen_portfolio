"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>&copy; {new Date().getFullYear()} Toka Mohsen. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/toka-mohsen-84613a24b/" },
              { icon: FaGithub, href: "https://github.com/TokaMohsenSaad" },
              { icon: FaEnvelope, href: "mailto:tokasaad2012@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#0ea5e9] transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
