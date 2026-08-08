import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress, SiSocketdotio } from 'react-icons/si';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import type { Project } from '../../types/portfolio';
import { ArrowRight, CheckCircle2, MessageSquare, ShieldAlert, Sparkles, ExternalLink } from 'lucide-react';

const PROJECT_TECH_ICONS: Record<string, React.ReactNode> = {
  'React.js': <SiReact className="text-cyan-400" />,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  'Express.js': <SiExpress className="text-zinc-300" />,
  'MongoDB': <SiMongodb className="text-emerald-400" />,
  'Socket.io': <SiSocketdotio className="text-zinc-200" />,
};

const PROJECT_VISUAL_CONFIG: Record<string, {
  gradient: string;
  glowColor: string;
  accentLine: string;
  icon: React.ReactNode;
  lightBg: string;
}> = {
  'vibe-chat': {
    gradient: 'from-[#1a0533] via-[#0d1a3a] to-[#060d1f]',
    glowColor: 'shadow-violet-500/20',
    accentLine: 'from-violet-500 via-blue-500 to-cyan-500',
    icon: <MessageSquare className="w-7 h-7 text-violet-400" />,
    lightBg: 'bg-violet-500/10 border-violet-500/30',
  },
  'online-complaint-system': {
    gradient: 'from-[#001a1a] via-[#021212] to-[#060d10]',
    glowColor: 'shadow-emerald-500/20',
    accentLine: 'from-emerald-500 via-teal-500 to-cyan-500',
    icon: <ShieldAlert className="w-7 h-7 text-emerald-400" />,
    lightBg: 'bg-emerald-500/10 border-emerald-500/30',
  },
};

export const ProjectsSection: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 relative bg-[#060610] border-t border-zinc-900/60 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Practical Web Engineering"
          title="Featured Projects"
          subtitle="Full-stack applications built with Java ecosystem, React.js, Node.js, MongoDB and real-time Socket.io."
        />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, pIdx) => {
            const config = PROJECT_VISUAL_CONFIG[project.id];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: pIdx * 0.15 }}
                className={`group relative rounded-3xl overflow-hidden border border-zinc-800/80 flex flex-col ${config.glowColor} hover:shadow-2xl transition-all duration-500`}
              >
                {/* Gradient glow border on hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                     style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}} />

                {/* Header Banner */}
                <div className={`relative h-48 bg-gradient-to-br ${config.gradient} overflow-hidden flex flex-col justify-between p-6 border-b border-zinc-800/60`}>
                  {/* Subtle grid */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

                  {/* Floating circles decoration */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/3 blur-xl" />
                  <div className="absolute bottom-4 left-1/2 w-32 h-16 rounded-full bg-white/2 blur-2xl" />

                  {/* Top row */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className={`p-3 rounded-2xl border ${config.lightBg} backdrop-blur-sm`}>
                      {config.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-zinc-400 font-mono text-xs font-semibold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <div className="relative z-10 space-y-1">
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">{project.subtitle}</p>
                    {/* Accent gradient line */}
                    <div className={`h-0.5 w-16 bg-gradient-to-r ${config.accentLine} rounded-full mt-2 group-hover:w-24 transition-all duration-500`} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex-1 bg-zinc-950/90 p-6 space-y-5">
                  <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                  {/* Tech stack with icons */}
                  <div>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techBadges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-zinc-700 transition-colors"
                        >
                          {PROJECT_TECH_ICONS[badge] && (
                            <span className="text-sm">{PROJECT_TECH_ICONS[badge]}</span>
                          )}
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key highlights */}
                  <div className="space-y-2">
                    {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTAs */}
                <div className="px-6 py-4 bg-zinc-950/90 border-t border-zinc-900 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-400 hover:text-violet-400 transition-colors group/btn"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono font-semibold text-zinc-300 hover:text-white hover:border-violet-500/40 hover:bg-zinc-800 transition-all group/gh"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <FaGithub className="w-4 h-4 group-hover/gh:text-violet-400 transition-colors" />
                    <span>Source Code</span>
                    <ExternalLink className="w-3 h-3 text-zinc-600 group-hover/gh:text-violet-400 transition-colors" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/karishma681shaik-star"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 text-sm font-mono text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-zinc-800/60 transition-all"
          >
            <FaGithub className="w-5 h-5" />
            <span>View all repositories on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
    </section>
  );
};
