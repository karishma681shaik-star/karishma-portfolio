import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { ArrowUp, Heart, Mail, Terminal } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <Terminal className="w-4 h-4 text-blue-400" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-zinc-400 text-sm max-w-md leading-relaxed">
              Computer Science & Engineering student focused on building practical full-stack web applications with React.js, Node.js, Express.js, MongoDB, and Java.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                aria-label="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#education" className="text-zinc-400 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="text-zinc-400 hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-zinc-400 hover:text-white transition-colors">
                  Certifications
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Core Stack */}
          <div>
            <h3 className="text-xs font-mono font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Core Technologies
            </h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>• Java & JavaScript</li>
              <li>• React.js & HTML5/CSS3</li>
              <li>• Node.js & Express.js</li>
              <li>• MongoDB & Socket.io</li>
              <li>• Data Structures & Algorithms</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 inline fill-red-500/20" />
            <span>& React + Vite.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
