import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaJava } from 'react-icons/fa6';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import { ArrowRight, Mail, Sparkles, Terminal, Code2, Globe } from 'lucide-react';
import { HeroCanvas } from '../3d/HeroCanvas';
import { personalInfo } from '../../data/portfolioData';

const TYPING_WORDS = [
  'Java Full-Stack Developer',
  'React.js Engineer',
  'Node.js Developer',
  'Problem Solver',
];

const TypeWriter: React.FC = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPING_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex]);

  return (
    <span className="relative">
      <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
        {displayed}
      </span>
      <span className="animate-blink ml-0.5 inline-block w-0.5 h-[0.9em] bg-violet-400 align-middle" />
    </span>
  );
};

const techStack = [
  { icon: <FaJava />, label: 'Java', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/30' },
  { icon: <SiReact />, label: 'React.js', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/30' },
  { icon: <SiNodedotjs />, label: 'Node.js', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/30' },
  { icon: <SiExpress />, label: 'Express', color: 'text-zinc-300', bg: 'bg-zinc-500/10 border-zinc-500/30' },
  { icon: <SiMongodb />, label: 'MongoDB', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30' },
];

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-[#060610]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,80,220,0.25),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(56,189,248,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(167,139,250,0.08),transparent)]" />

      {/* 3D Canvas */}
      <HeroCanvas />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT: Main Content */}
          <div className="flex-1 flex flex-col space-y-8 text-left max-w-2xl">

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 backdrop-blur-md w-fit"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              <span className="text-xs font-mono font-medium text-violet-300">
                B.Tech CSE · RGUKT RK Valley · 2027
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05]">
                {personalInfo.name.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'block' : 'block'}>
                    {i === 0 ? (
                      <span className="text-white">{word} </span>
                    ) : (
                      <span className="relative inline-block">
                        <span className="relative z-10 text-white">{word}</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 rounded-full" />
                      </span>
                    )}
                  </span>
                ))}
              </h1>

              <div className="text-2xl sm:text-3xl font-bold text-zinc-200 min-h-[2.5rem]">
                <TypeWriter />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              Building scalable web applications with <span className="text-violet-400 font-semibold">Java</span>, <span className="text-cyan-400 font-semibold">React.js</span>, <span className="text-green-400 font-semibold">Node.js</span>, <span className="text-emerald-400 font-semibold">MongoDB</span> and real-time features via Socket.io.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="flex flex-wrap gap-2"
            >
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold font-mono ${tech.bg} ${tech.color} transition-all hover:scale-105`}
                >
                  <span className="text-sm">{tech.icon}</span>
                  {tech.label}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-lg shadow-violet-500/30 transition-all hover:-translate-y-0.5 hover:shadow-violet-500/50"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-zinc-200 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 hover:border-violet-500/50 transition-all hover:-translate-y-0.5"
              >
                <FaGithub className="w-4 h-4" />
                <span>View GitHub</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm text-zinc-400 hover:text-violet-300 bg-transparent border border-zinc-800 hover:border-violet-500/40 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Social icons row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3 pt-2"
            >
              <span className="text-xs font-mono text-zinc-600">Find me on</span>
              <div className="h-px flex-1 bg-zinc-800 max-w-[60px]" />
              {[
                { href: personalInfo.github, icon: <FaGithub className="w-4 h-4" />, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: <FaLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-violet-400 hover:border-violet-500/40 transition-all hover:-translate-y-0.5"
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 w-full max-w-sm"
          >
            {/* Outer glow ring */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 rounded-3xl blur-lg opacity-30" />
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950/95 shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-zinc-900/90 px-4 py-3 border-b border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="text-xs font-mono text-zinc-500 ml-2">developer.java</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-600">
                    <Terminal className="w-3.5 h-3.5 text-violet-400" />
                    <span>JDK 21</span>
                  </div>
                </div>

                {/* Code Block */}
                <div className="p-5 font-mono text-xs leading-7 overflow-x-auto">
                  <div><span className="text-violet-400">public class</span> <span className="text-cyan-300">Developer</span> <span className="text-zinc-400">{'{'}</span></div>
                  <div className="pl-4"><span className="text-blue-400">String</span> <span className="text-zinc-200">name</span> <span className="text-zinc-500">=</span> <span className="text-emerald-400">"{personalInfo.name}"</span>;</div>
                  <div className="pl-4"><span className="text-blue-400">String</span> <span className="text-zinc-200">stack</span> <span className="text-zinc-500">=</span> <span className="text-emerald-400">"Java + MERN"</span>;</div>
                  <div className="pl-4"><span className="text-blue-400">String</span> <span className="text-zinc-200">cgpa</span> <span className="text-zinc-500">=</span> <span className="text-amber-400">"8.5"</span>;</div>
                  <div className="pl-4"><span className="text-blue-400">boolean</span> <span className="text-zinc-200">openToWork</span> <span className="text-zinc-500">=</span> <span className="text-orange-400">true</span>;</div>
                  <div className="pl-4 text-zinc-500">&nbsp;</div>
                  <div className="pl-4"><span className="text-violet-400">String</span>[] <span className="text-zinc-200">projects</span> <span className="text-zinc-500">= {'{'}</span></div>
                  <div className="pl-8"><span className="text-emerald-400">"Vibe Chat"</span>,</div>
                  <div className="pl-8"><span className="text-emerald-400">"Complaint System"</span></div>
                  <div className="pl-4"><span className="text-zinc-500">{'}'}</span>;</div>
                  <div><span className="text-zinc-400">{'}'}</span></div>
                </div>

                {/* Stats Row */}
                <div className="border-t border-zinc-800 grid grid-cols-3 divide-x divide-zinc-800">
                  {[
                    { value: '2', label: 'Projects', color: 'text-violet-400' },
                    { value: '8.5', label: 'CGPA', color: 'text-cyan-400' },
                    { value: '2', label: 'Certs', color: 'text-emerald-400' },
                  ].map((stat, i) => (
                    <div key={i} className="py-3 text-center">
                      <div className={`text-lg font-black ${stat.color}`}>{stat.value}</div>
                      <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2.5 bg-zinc-900/50 border-t border-zinc-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-zinc-600" />
                    <span className="text-[11px] font-mono text-zinc-500">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-emerald-500">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
