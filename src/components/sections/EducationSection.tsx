import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { educationList } from '../../data/portfolioData';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Academic Background"
          title="Education Timeline"
          subtitle="Computer Science & Engineering degree and pre-university academic achievements."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden group"
            >
              {/* Subtle visual accent line */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 opacity-80" />

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
                      {item.degree}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight pt-1">
                    {item.institution}
                  </h3>

                  {item.highlight && (
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal pt-1">
                      {item.highlight}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side Info: CGPA & Year */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-zinc-800 pt-4 sm:pt-0 sm:pl-6 shrink-0 gap-2">
                <div className="flex items-center space-x-1 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                  <Award className="w-4 h-4" />
                  <span className="font-bold">CGPA: {item.cgpa}</span>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
