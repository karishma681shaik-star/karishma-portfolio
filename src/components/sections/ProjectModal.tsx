import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa6';
import { X, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getProjectIcon = (id: string) => {
    if (id === 'vibe-chat') return <MessageSquare className="w-8 h-8 text-blue-400" />;
    return <ShieldAlert className="w-8 h-8 text-emerald-400" />;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-y-auto z-10 text-zinc-100 no-scrollbar"
        >
          {/* Header Banner */}
          <div className={`relative p-6 sm:p-8 bg-gradient-to-br ${project.gradient} border-b border-zinc-800 flex flex-col justify-between`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 text-zinc-300 hover:text-white border border-white/10 hover:bg-black/80 transition-all"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 rounded-2xl bg-zinc-950/80 border border-zinc-800 shadow-md">
                {getProjectIcon(project.id)}
              </div>
              <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-blue-400 font-mono text-xs font-semibold">
                {project.category}
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-zinc-300 mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Project Overview
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono font-semibold text-blue-400"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features List */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Key Features & Technical Implementation
              </h3>
              <div className="space-y-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-zinc-300 p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Action CTA */}
            <div className="pt-4 border-t border-zinc-800 flex justify-end">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-mono font-semibold text-white shadow-lg shadow-blue-500/20 transition-all"
              >
                <FaGithub className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
