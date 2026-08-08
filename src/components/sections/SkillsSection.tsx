import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { skillCategories } from '../../data/portfolioData';
import { Code2, Server, Layout, Database, Wrench, Cpu, Users } from 'lucide-react';
import {
  FaJava, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaDatabase
} from 'react-icons/fa6';
import { SiMongodb, SiExpress, SiSocketdotio, SiMysql, SiVscodium, SiJavascript } from 'react-icons/si';

const SKILL_ICONS: Record<string, { icon: React.ReactNode; color: string }> = {
  'Java':                    { icon: <FaJava />, color: 'text-orange-400' },
  'JavaScript':              { icon: <SiJavascript />, color: 'text-yellow-400' },
  'HTML':                    { icon: <FaHtml5 />, color: 'text-orange-500' },
  'CSS':                     { icon: <FaCss3Alt />, color: 'text-blue-500' },
  'React.js':                { icon: <FaReact />, color: 'text-cyan-400' },
  'HTML5':                   { icon: <FaHtml5 />, color: 'text-orange-500' },
  'CSS3':                    { icon: <FaCss3Alt />, color: 'text-blue-500' },
  'Node.js':                 { icon: <FaNodeJs />, color: 'text-green-400' },
  'Express.js':              { icon: <SiExpress />, color: 'text-zinc-300' },
  'Socket.io':               { icon: <SiSocketdotio />, color: 'text-zinc-200' },
  'MongoDB':                 { icon: <SiMongodb />, color: 'text-emerald-400' },
  'MySQL':                   { icon: <SiMysql />, color: 'text-blue-400' },
  'Git':                     { icon: <FaGitAlt />, color: 'text-orange-500' },
  'GitHub':                  { icon: <FaGithub />, color: 'text-zinc-200' },
  'VS Code':                 { icon: <SiVscodium />, color: 'text-blue-500' },
  'LocalStorage':            { icon: <FaDatabase />, color: 'text-purple-400' },
};

const CATEGORY_STYLES: Record<string, { icon: React.ReactNode; color: string; accent: string; glow: string }> = {
  programming:  { icon: <Code2 className="w-4 h-4" />, color: 'text-orange-400', accent: 'bg-orange-500/10 border-orange-500/30', glow: 'shadow-orange-500/20' },
  frontend:     { icon: <Layout className="w-4 h-4" />, color: 'text-cyan-400',   accent: 'bg-cyan-500/10 border-cyan-500/30',     glow: 'shadow-cyan-500/20' },
  backend:      { icon: <Server className="w-4 h-4" />, color: 'text-green-400',  accent: 'bg-green-500/10 border-green-500/30',   glow: 'shadow-green-500/20' },
  databases:    { icon: <Database className="w-4 h-4" />, color: 'text-emerald-400', accent: 'bg-emerald-500/10 border-emerald-500/30', glow: 'shadow-emerald-500/20' },
  core:         { icon: <Cpu className="w-4 h-4" />, color: 'text-violet-400',   accent: 'bg-violet-500/10 border-violet-500/30', glow: 'shadow-violet-500/20' },
  tools:        { icon: <Wrench className="w-4 h-4" />, color: 'text-blue-400',  accent: 'bg-blue-500/10 border-blue-500/30',     glow: 'shadow-blue-500/20' },
  soft:         { icon: <Users className="w-4 h-4" />, color: 'text-pink-400',   accent: 'bg-pink-500/10 border-pink-500/30',     glow: 'shadow-pink-500/20' },
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('programming');
  const selected = skillCategories.find(c => c.id === activeCategory) || skillCategories[0];
  const style = CATEGORY_STYLES[activeCategory] || CATEGORY_STYLES['programming'];

  return (
    <section id="skills" className="py-28 relative bg-[#070710] border-t border-zinc-900/60 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Technical Competencies"
          title="Technical Skills"
          subtitle="Grounded in Java Full-Stack development, core CS principles, and modern web tools."
        />

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">

          {/* LEFT: Category Selector */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="space-y-2">
              {skillCategories.map((cat) => {
                const s = CATEGORY_STYLES[cat.id];
                const isActive = activeCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 border ${
                      isActive
                        ? `${s.accent} ${s.color} shadow-lg ${s.glow}`
                        : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={isActive ? s.color : 'text-zinc-500'}>{s.icon}</span>
                      <span>{cat.name}</span>
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-black/30' : 'bg-zinc-800'}`}>
                      {cat.skills.length}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Skills Display */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                {/* Header */}
                <div className={`flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800`}>
                  <div className={`p-2.5 rounded-xl border ${style.accent}`}>
                    <span className={style.color}>{style.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{selected.name}</h3>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">{selected.description}</p>
                  </div>
                </div>

                {/* Skill Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selected.skills.map((skill, idx) => {
                    const skillData = SKILL_ICONS[skill];
                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.06, duration: 0.3 }}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="group relative p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all cursor-default overflow-hidden"
                      >
                        {/* Hover glow */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl bg-gradient-to-br ${
                          activeCategory === 'programming' ? 'from-orange-500/5 to-transparent' :
                          activeCategory === 'frontend' ? 'from-cyan-500/5 to-transparent' :
                          activeCategory === 'backend' ? 'from-green-500/5 to-transparent' :
                          activeCategory === 'databases' ? 'from-emerald-500/5 to-transparent' :
                          activeCategory === 'core' ? 'from-violet-500/5 to-transparent' :
                          activeCategory === 'tools' ? 'from-blue-500/5 to-transparent' :
                          'from-pink-500/5 to-transparent'
                        }`} />

                        <div className="flex items-center gap-3 relative z-10">
                          {skillData ? (
                            <span className={`text-xl ${skillData.color}`}>{skillData.icon}</span>
                          ) : (
                            <div className={`w-2 h-2 rounded-full ${style.color.replace('text-', 'bg-')}`} />
                          )}
                          <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* All Skills Overview */}
            <div className="mt-10 pt-8 border-t border-zinc-900">
              <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-5">All Technologies at a glance</p>
              <div className="flex flex-wrap gap-2">
                {skillCategories.flatMap(c => c.skills).map((skill, idx) => {
                  const skillData = SKILL_ICONS[skill];
                  return (
                    <span
                      key={idx}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
                    >
                      {skillData && <span className={`text-sm ${skillData.color}`}>{skillData.icon}</span>}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
