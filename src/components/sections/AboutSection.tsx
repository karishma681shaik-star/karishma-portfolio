import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { personalInfo } from '../../data/portfolioData';
import { Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => (
  <section id="about" className="py-28 relative bg-[#0a0a1a] border-t border-zinc-900/30 overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeader badge="Profile Overview" title="About Me" subtitle="Computer Science & Engineering student focused on Java Full‑Stack development." />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 flex flex-col lg:flex-row gap-12 items-start"
      >
        {/* Left: Profile Card */}
        <div className="flex-1 max-w-xl">
          <div className="rounded-3xl glass-panel glass-panel-hover border border-zinc-800 overflow-hidden shadow-2xl">
            <div className="px-6 py-5 border-b border-zinc-800 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">{personalInfo.name}</h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed">{personalInfo.bio}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-violet-300 transition-colors">{personalInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-violet-400" />
                  <a href={`tel:${personalInfo.phone}`} className="hover:text-violet-300 transition-colors">{personalInfo.phone}</a>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-zinc-900/30 border-t border-zinc-800 flex justify-center space-x-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-violet-500/40 hover:bg-zinc-700 transition-all">
                {/* GitHub Icon */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.92.58.1.79-.25.79-.55v-2c-3.2.7-3.88-1.55-3.88-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.04.76 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.57-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.44-2.27 1.16-3.07-.12-.28-.5-1.43.11-2.98 0 0 .96-.31 3.15 1.17a10.88 10.88 0 012.87-.38c.97.01 1.95.13 2.87.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.55.24 2.7.12 2.98.73.8 1.16 1.81 1.16 3.07 0 4.41-2.68 5.38-5.24 5.66.42.36.8 1.07.8 2.16v3.2c0 .3.21.66.8.55A10.5 10.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-violet-500/40 hover:bg-zinc-700 transition-all">
                {/* LinkedIn Icon */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.33c-.97 0-1.75-.79-1.75-1.76s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.76-1.75 1.76zm13.5 11.33h-3v-5.5c0-1.31-.02-3-1.84-3-1.84 0-2.12 1.44-2.12 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.77 1.38-1.58 2.84-1.58 3.04 0 3.6 2 3.6 4.6v5.62z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Technical Summary */}
        <div className="flex-1 max-w-xl">
          <div className="rounded-3xl glass-panel glass-panel-hover border border-zinc-800 p-6">
            <h4 className="text-sm font-mono text-violet-400 uppercase tracking-wider mb-3">Technical Summary</h4>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>⚡ Java Full‑Stack Development (Spring Boot, React.js)</li>
              <li>⚡ Real‑time communication with Socket.io</li>
              <li>⚡ Scalable RESTful APIs (Node.js, Express)</li>
              <li>⚡ Cloud‑native deployment (Docker basics)</li>
              <li>⚡ Data modeling with MongoDB & MySQL</li>
              <li>⚡ Strong fundamentals in Data Structures & Algorithms</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
