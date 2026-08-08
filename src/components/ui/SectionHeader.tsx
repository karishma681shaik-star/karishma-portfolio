import React from 'react';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  alignment = 'center',
}) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-16 ${alignClass}`}>
      <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wide uppercase mb-3">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
    </div>
  );
};
