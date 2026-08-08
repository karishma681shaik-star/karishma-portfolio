import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'emerald' | 'purple' | 'amber' | 'zinc';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'zinc',
  size = 'sm',
}) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 border-blue-500/25 text-blue-300',
    emerald: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300',
    purple: 'bg-purple-500/10 border-purple-500/25 text-purple-300',
    amber: 'bg-amber-500/10 border-amber-500/25 text-amber-300',
    zinc: 'bg-zinc-800/80 border-zinc-700/50 text-zinc-300',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-0.5 text-xs font-mono',
    md: 'px-3 py-1 text-xs font-mono font-medium',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border font-mono transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
};
