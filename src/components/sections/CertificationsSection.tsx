import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/SectionHeader';
import { certifications } from '../../data/portfolioData';
import { Award, ExternalLink, BookOpen } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative bg-zinc-950/60 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Verified Qualifications"
          title="Certifications"
          subtitle="NPTEL academic certifications in Information Retrieval and Cloud Computing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover border border-zinc-800/80 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Award className="w-6 h-6" />
                  </div>

                  {cert.score && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                      Score: {cert.score}
                    </span>
                  )}
                </div>

                <div>
                  <span className="text-xs font-mono text-blue-400 font-semibold block uppercase tracking-wider">
                    {cert.title}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {cert.issuer}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {cert.description}
                </p>

                {/* Concepts list */}
                <div className="space-y-2 pt-3 border-t border-zinc-800/80">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-zinc-400 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Technical Concepts Covered:</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.concepts.map((concept, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Certificate Button */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl text-xs font-mono font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
