import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { technicalFocusAreas } from '../../data/portfolioData';
import { Code2, Database, Layout, Server, Zap, Cpu } from 'lucide-react';

export const TechnicalFocusSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-6 h-6 text-blue-400" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'Server': return <Server className="w-6 h-6 text-emerald-400" />;
      case 'Database': return <Database className="w-6 h-6 text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-rose-400" />;
      default: return <Code2 className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="focus" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Core Areas"
          title="Technical Focus"
          subtitle="Key engineering domains and practical development methodologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {technicalFocusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-3xl glass-panel glass-panel-hover border border-zinc-800/80 space-y-4"
            >
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 w-fit">
                {getIcon(area.icon)}
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {area.title}
              </h3>

              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
